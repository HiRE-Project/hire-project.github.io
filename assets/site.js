'use strict';
const copyButton = document.getElementById('copy-citation');
const copyStatus = document.getElementById('copy-status');
if (copyButton && navigator.clipboard && window.isSecureContext) {
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(document.getElementById('bibtex').textContent.trim());
      copyStatus.textContent = 'BibTeX copied.';
    } catch {
      copyStatus.textContent = 'Select and copy the BibTeX text above.';
    }
  });
}

const player = document.getElementById('demo-player');
const groups = JSON.parse(document.getElementById('demo-data').textContent);
const clipChoices = document.getElementById('demo-clips');
const taskButtons = [...document.querySelectorAll('[data-group]')];
let activeGroup = groups[0];
let activeClip = 0;

function selectClip(index, play = false) {
  activeClip = index;
  const clip = activeGroup.clips[index];
  player.pause();
  player.poster = clip.poster;
  player.src = clip.src;
  player.setAttribute('aria-label', `${activeGroup.name}, ${clip.label}`);
  player.querySelector('a').href = clip.src;
  document.getElementById('demo-status').textContent = `${clip.label} · ${index + 1} / ${activeGroup.clips.length}`;
  [...clipChoices.children].forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
  player.load();
  // A selection is a user gesture; playback may still be restricted by the browser.
  if (play) player.play().catch(() => {});
}

function selectGroup(group, play = false) {
  activeGroup = group;
  taskButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.group === group.id)));
  document.querySelector('.demo-stage').classList.toggle('is-portrait', group.id === 'hanoi');
  document.getElementById('demo-description').textContent = `${group.lead} ${group.description}`;
  clipChoices.setAttribute('aria-label', `Choose a ${group.name.toLowerCase()} rollout`);
  clipChoices.replaceChildren(...group.clips.map((clip, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.setAttribute('aria-label', `Play ${group.name}: ${clip.label}`);
    button.textContent = group.id === 'bottle' ? `P${index + 1}` : String(index + 1);
    button.addEventListener('click', () => selectClip(index, true));
    return button;
  }));
  selectClip(0, play);
}
taskButtons.forEach(button => button.addEventListener('click', () => selectGroup(groups.find(group => group.id === button.dataset.group), true)));
selectGroup(activeGroup);
document.querySelector('.demo-tabs').hidden = false;
document.querySelector('.clip-controls').hidden = false;
document.getElementById('previous-clip').addEventListener('click', () => selectClip((activeClip - 1 + activeGroup.clips.length) % activeGroup.clips.length, true));
document.getElementById('next-clip').addEventListener('click', () => selectClip((activeClip + 1) % activeGroup.clips.length, true));

// Button groups support arrow-key navigation as well as ordinary Tab/Enter.
function keyboardSelection(container) {
  container.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    const buttons = [...container.querySelectorAll('button')];
    const current = buttons.indexOf(document.activeElement);
    if (current < 0) return;
    event.preventDefault();
    let next = event.key === 'Home' ? 0 : event.key === 'End' ? buttons.length - 1 : (current + (event.key === 'ArrowRight' ? 1 : -1) + buttons.length) % buttons.length;
    buttons[next].focus();
    buttons[next].click();
  });
}
for (const selector of ['.demo-tabs', '.demo-clips', '.analysis-tabs']) keyboardSelection(document.querySelector(selector));

const analysisButtons = [...document.querySelectorAll('[data-analysis]')];
const analysisPanels = [...document.querySelectorAll('.analysis-panel')];
function selectAnalysis(id) {
  analysisButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.analysis === id)));
  analysisPanels.forEach(panel => { panel.hidden = panel.id !== id; });
}
analysisButtons.forEach(button => button.addEventListener('click', () => selectAnalysis(button.dataset.analysis)));
selectAnalysis(analysisPanels[0].id);
document.querySelector('.analysis-tabs').hidden = false;

if ('IntersectionObserver' in window) {
  new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting) player.pause();
  }, { threshold: 0.05 }).observe(player);
}
document.addEventListener('visibilitychange', () => {
  if (document.hidden) player.pause();
});
