---
name: meteorologie-du-gout-design
description: Use this skill to generate well-branded interfaces and assets for Météorologie du goût — the thesis portfolio for an EHESS anthropology PhD candidacy on ice, cold, and everyday happiness. Contains essential design guidelines, tokens, fonts, assets, and a UI kit reproducing the landing page. French-language only.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files (colors_and_type.css for tokens, ui_kits/portfolio_these/ for the working recreation, preview/ for token specimens, source_reference/ for the original TSX components).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. Always copy colors_and_type.css and link it. Use Playfair Display serif for display/titles and Inter for body/UI. Keep copy French, literary, sensorial; never use emoji; use § I / II / III section markers with Roman numerals. Reveal the three pillar gradients (ice / ochre / meta) only on hover or as blurred halos, never as dominant backgrounds. Easing is always cubic-bezier(0.22, 1, 0.36, 1).

If working on production code, copy colors_and_type.css and the JSX components in ui_kits/portfolio_these/ as a starting point, and read this README to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design (a section, a slide deck, a recruiting one-pager, social cards), ask some questions about French copy tone and which pillar(s) to foreground, and act as an expert designer who outputs HTML artifacts or production code, depending on the need.
