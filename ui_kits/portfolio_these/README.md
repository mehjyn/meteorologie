# UI kit — Portfolio de thèse EHESS

Recréation du site `mehjyn/field-to-frost-folio` en React+JSX vanilla (chargé via Babel), sans TanStack ni Framer Motion. Les animations sont rejouées en CSS pur (keyframes `lift`, `fadein`, `fadeup`) en gardant le timing et l'easing `cubic-bezier(.22,1,.36,1)` de la source.

## Pages recréées

Une seule page (landing unique du site original), composée de :

1. **Nav fixe + barre de progression** — liens ancres, pilule PDF, fond transparent qui devient flouté en scroll.
2. **Hero** — titre serif animé lettre-par-lettre, halos ice/meta parallaxés, texture grain, trois CTAs.
3. **Pillars** (§ I) — 3 cartes avec gradient signature révélé au hover (ice, ochre, meta).
4. **Methodology** (§ II) — liste de terrains avec pastilles `MapPin`, + aside citation/posture.
5. **Timeline** (§ III) — fil conducteur 2019/2022/2026 zigzag, ligne dégradée tri-couleur.
6. **Funding** (§ IV) — bloc sombre CIFRE avec halos floutés + 2 mini-cartes (labo / entreprise).
7. **Footer** — email serif, profils, affiliation, retour en haut.

## Fichiers

- `index.html` — point d'entrée, charge React/Babel + tous les `.jsx` + `kit.css` + le token file racine.
- `kit.css` — recréation directe des classes Tailwind utilisées dans la source.
- `icons.jsx` — icônes Lucide recréées en SVG inline (exportées sur `window.I`).
- `Nav.jsx · Hero.jsx · Pillars.jsx · Methodology.jsx · Timeline.jsx · Funding.jsx · Footer.jsx` — un composant par section, exporté sur `window`.

## Notes de recréation

- Les animations d'entrée `whileInView` de Framer Motion n'ont pas été reproduites (complexité/coût). Seul le hero conserve ses animations à l'apparition.
- Liens `href="#..."` → ancres internes fonctionnelles. Les CTA "Télécharger" pointent vers `#` (PDF absent du repo).
