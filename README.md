# HiRE: Hindsight Reward Editing for Policy Finetuning

Academic project page for **HiRE: Hindsight Reward Editing for Policy Finetuning**. The layout was originally based on [Nerfies](https://nerfies.github.io/); the visual style now matches the teaser video. Open `index.html` directly, or preview with:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

The page uses local CSS, JavaScript, figures, and videos; it needs no build step or external CDN. Publish this directory with GitHub Pages.

## Content source

Release content follows `Paper/corl_2026_template_submission-8/example.tex` in the parent workspace. Authors, affiliations, experiment descriptions follow that manuscript. The 18 original video clips are retained in one task-based showcase, with a large player and compact numbered clip controls in the real-robot subsection. Content follows the paper’s order: method, simulation, real-robot experiments, then analysis.

The main comparison, encoder, reward-composition, buffer-design, and buffer-dynamics figures are rendered from the manuscript's referenced PDF figures. Real-robot, hyperparameter, reward-landscape, and critic-loss figures use the corresponding manuscript images. Older, unreferenced images remain available for history but are not shown by the page.

## Publication links

The Paper and Code buttons link to the [arXiv preprint](https://arxiv.org/abs/2609.27068) and the [HiRE source repository](https://github.com/HiRE-Project/HiRE). No paper PDF is bundled.

`assets/hire.bib` and the citation block in `index.html` contain matching BibTeX entries with the arXiv identifier and CoRL 2026 venue noted on the arXiv page. Update both together when citation metadata changes.

## Teaser video

`videos/teaser/hire_teaser.mp4` is the 1.5-minute teaser (1920×1080, H.264, no audio, `faststart` for streaming), shown under the title with `images/posters/teaser.jpg` as its cover frame. It pauses when scrolled out of view, and the teaser and the demonstration player never play at the same time.

## Visual style

The page uses the teaser's light style: a warm white page (`#fbfbf9`), Inter, slate-blue accent (`#2e4e84`), blue for success (`#24749c`) and terracotta for failure (`#b8523e`), flush-left section headings with small uppercase labels, plain display equations, and white cards for figures. Everything (text, equations, figures, videos) shares one centered 800 px column. All colors are CSS variables at the top of `assets/style.css`. Inter is served locally from `assets/fonts/InterVariable.woff2` (SIL Open Font License, see `assets/fonts/LICENSE-Inter.txt`), so the page still needs no external CDN.

## Presentation and behavior

- `assets/style.css`: responsive layout and reduced-motion support.
- `assets/site.js`: progressive citation copying; task and clip selection, analysis selection, and offscreen video pausing.
- The video player uses native playback controls, local posters, and metadata-only preload.
- Full-resolution figures open when selected. A task selector groups the demonstrations; a second selector groups ablations and critic dynamics. Without JavaScript, direct links to all clips and all analysis panels remain available.
- Social metadata uses `images/social-preview.jpg` and the canonical project URL.

## Math typesetting

Equations are pre-rendered with KaTeX 0.16.22 as HTML and accessible MathML, with the original TeX preserved in annotations. Local CSS and fonts are in `assets/katex/` (MIT license included), so rendering needs no external CDN or client-side math script. The narrow-screen equation uses a two-line aligned layout.
