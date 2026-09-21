# HiRE project website

Simple academic project page, styled after [Nerfies](https://nerfies.github.io/), for **HiRE: Hindsight Reward Editing for Policy Finetuning**. Open `index.html` directly, or preview with:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

The page uses local CSS, JavaScript, figures, and videos; it needs no build step or external CDN. Publish this directory with GitHub Pages.

## Content source

Release content follows `Paper/corl_2026_template_submission-8/example.tex` in the parent workspace. Authors, affiliations, experiment descriptions follow that manuscript. The 18 original video clips are retained in one task-based showcase, with a large player and compact numbered clip controls in the real-robot subsection. Content follows the paper’s order: method, simulation, real-robot experiments, then analysis.

The main comparison, encoder, reward-composition, buffer-design, and buffer-dynamics figures are rendered from the manuscript's referenced PDF figures. Real-robot, hyperparameter, reward-landscape, and critic-loss figures use the corresponding manuscript images. Older, unreferenced images remain available for history but are not shown by the page.

## Publication links

Paper and Code intentionally remain non-clickable **Coming soon** placeholders, as requested. When public URLs are available, replace the relevant spans in `index.html` with links. No paper PDF is bundled.

`assets/hire.bib` and the citation block in `index.html` use an `@misc` entry with the project URL until publication metadata is supplied. Update both together. The website does not claim a publication venue or acceptance status.

## Presentation and behavior

- `assets/style.css`: responsive layout and reduced-motion support.
- `assets/site.js`: progressive citation copying; task and clip selection, analysis selection, and offscreen video pausing.
- The video player uses native playback controls, local posters, and metadata-only preload.
- Full-resolution figures open when selected. A task selector groups the demonstrations; a second selector groups ablations and critic dynamics. Without JavaScript, direct links to all clips and all analysis panels remain available.
- Social metadata uses `images/social-preview.jpg` and the canonical project URL.

## Math typesetting

Equations are pre-rendered with KaTeX 0.16.22 as HTML and accessible MathML, with the original TeX preserved in annotations. Local CSS and fonts are in `assets/katex/` (MIT license included), so rendering needs no external CDN or client-side math script. The narrow-screen equation uses a two-line aligned layout.
