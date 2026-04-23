# Météorologie du goût — Design System

> Une anthropologie de la glace, du froid et du bonheur.
> Projet de thèse en anthropologie à l'EHESS — candidature rentrée 2026.

---

## Contexte

**Météorologie du goût** est la vitrine d'un projet de thèse en anthropologie sociale à l'**EHESS** (École des Hautes Études en Sciences Sociales). Le site a deux fonctions :

1. **Faciliter la candidature** auprès d'un laboratoire et d'une direction de thèse.
2. **Chercher un financement**, idéalement par convention **CIFRE** (ANRT), auprès d'un partenaire industriel ou artisanal du froid alimentaire / gastronomique.

La thèse propose une **ethnographie longue** (36 mois) de la glace et du gelato, suivie sur trois terrains : **France, Italie (Sicile, Émilie-Romagne), Brésil (Belém, Bahia).** Trois pays, un seul geste d'enquête.

Le projet s'articule autour de trois piliers — qu'on appelle aussi "trois entrées dans une même matière" :

| № | Pilier | Sous-titre | Couleur signature |
|---|---|---|---|
| 01 | **Technique** | Le froid comme savoir-faire | Bleu acier glacé (`--ice`) |
| 02 | **Économie & Social** | Une économie morale du plaisir | Ocre / or chaud (`--ochre`) |
| 03 | **Métaphysique & Sensoriel** | Ce que le goût pense en nous | Indigo / violet (`--meta`) |

C'est une recherche qui s'inscrit dans le fil conducteur d'une **anthropologie du bonheur** déjà amorcée en M1 (communautés de joueurs en ligne, 2019) et M2 (économies du souvenir et travail funéraire, 2022).

---

## Sources (ce qui a fondé ce design system)

- **Codebase** : `mehjyn/field-to-frost-folio` (privé, GitHub). Stack : React 19, TanStack Start/Router, Tailwind 4, Framer Motion, shadcn/ui, Lucide React. Généré initialement via Lovable.
- Fichiers de référence copiés dans `source_reference/` : `Hero.tsx`, `Nav.tsx`, `Pillars.tsx`, `Methodology.tsx`, `Timeline.tsx`, `Funding.tsx`, `Footer.tsx`, `ScrollProgress.tsx`.
- `src/styles.css` du repo → converti en `colors_and_type.css` (tokens OKLCH + typographie sémantique).
- **Aucun slide deck attaché.** Aucun dossier `public/` avec assets visuels dans le repo (vide ou binaire uniquement).

> Le lecteur n'a pas forcément accès au repo ; tout ce qu'il faut savoir se trouve dans ce design system.

---

## Content Fundamentals — ton, voix, copy

**Langue** : **français littéraire**, jamais l'anglais dans le produit. Le vocabulaire académique (anthropologie, ethnographie, terrain, posture, corpus) cohabite avec une langue **sensorielle, presque poétique**.

**Voix** : première personne singulière discrète (« je ») et "nous" académique. S'adresse au lecteur sans vouvoyer ("ceux qui en goûtent"). Pas de « tu », jamais.

**Casse** : **Title Case français** pour les titres de section (« Le Projet », « Méthodologie »), minuscules pour le corps, **petites capitales espacées** pour les étiquettes (`tracking: 0.25em`, `text-transform: uppercase`).

**Numérotation des sections** : `§ I — Le projet`, `§ II — Méthodologie & Terrain`, `§ III — Fil conducteur`, `§ IV — Financement & CIFRE`. Un vrai signe de section `§`, chiffres romains.

**Tons et figures de style** :
- **Phrases nominales et rythmées.** « Suivre la trace d'un sorbet jusqu'à ses ateliers, ses ouvriers, ses récits intimes. »
- **Italique serif** pour nuancer un titre : « Trois pays, *un seul geste d'enquête* ». L'italique pose la voix d'auteur.
- **Sous-titres poétiques** entre guillemets dans la timeline : « Camaraderies fluorescentes », « Joies discrètes du deuil », « Climat intime du plaisir ».
- **Guillemets français** `« … »` avec espaces insécables.
- Virgules **rythmiques**, assumées ; phrases longues qui respirent.

**Emoji** : **jamais**. Aucun emoji dans le produit.

**Chiffres** : `lnum` (chiffres anciens/old-style) activé sur les titres. Numérotation de pilier style éditorial : `01 / 03`.

**Exemples représentatifs** (à réutiliser comme gabarit) :
- Hero : *« — une anthropologie de la glace, du froid et du bonheur »* (em-dash sérif italique).
- Posture : *« Apprendre le métier avant d'apprendre à en parler. Plonger les mains dans la sorbetière, sentir le sucre brûler, et seulement alors, écouter ce que le froid a à nous dire. »*
- Footer : « Écrivons-nous. » — injonction sobre, sérif, point final.

---

## Visual Foundations

### Palette
- **Beige chaleureux** (`--background` ≈ `#F5F0E6`) comme "terre" globale. **Chocolat profond** (`--foreground` ≈ `#3D2314`) pour le texte, les boutons solides, les overlays sombres (section CIFRE).
- Toutes les couleurs sont en **OKLCH** pour garder la cohérence perceptuelle.
- **Trois gradients signature** (un par pilier), jamais utilisés en aplat dominant — toujours comme **révélation au hover** sur carte sombre, **halo flouté** en arrière-plan, ou **ligne de dégradé** (timeline).

### Typographie
- **Serif** : Playfair Display (400–800 + italique 400) → h1/h2/h3, citations, italiques d'auteur, chiffres de timeline.
- **Sans** : Inter (300–700) → corps, UI, étiquettes capitales.
- **Contraste maximal** entre display serif large (jusqu'à 7.5rem) et petites capitales espacées (12px, `tracking: 0.25em`).
- **Features** : `lnum` sur titres, `ss01 cv11` sur corps Inter.

### Spacing & rythme
- Conteneur principal : `max-w-7xl` ou `max-w-5xl` pour les sections littéraires (timeline).
- Padding vertical de section : **`py-28 md:py-40`** — très aéré, éditorial, jamais serré.
- Grille : deux tons principaux de fond (beige `--background`, puis `--secondary/40` pour les sections alternées comme Méthodologie et Footer).

### Arrière-plans
- **Texture "grain"** (`.grain-texture`) : superposition de trois halos radiaux chauds à faible opacité — évoque le papier de carnet ethnographique.
- **Halos flous de couleur signature** (`blur-3xl`, opacity 0.07–0.10), placés hors grille, parallaxés au scroll dans le hero.
- **Jamais** d'image photo full-bleed, de pattern répétitif net, ou de texture bruitée agressive. Le grain est radial et doux.

### Animation
- **Easing signature** : `cubic-bezier(0.22, 1, 0.36, 1)` ("silk"). Toujours cette courbe.
- **Durées** : 300ms (court), 500ms (UI hover), 700ms (révélations), 900ms (entrées héroïques).
- **Entrées à l'apparition** : `opacity 0 → 1` + `y: 40 → 0`, déclenchées par `whileInView` avec `margin: "-80px"`, `once: true`.
- **Hero** : animation lettre-par-lettre (`y: 110% → 0`, stagger 35ms).
- **Parallaxe douce** sur halos et textures au scroll.
- **Jamais de bounce**, pas de spring caricatural.
- **Respect de `prefers-reduced-motion`** activé globalement.

### Hover states
- **Cartes pilier** : **soulèvement** `-translate-y-2` + gradient signature qui **monte par le bas** (`translate-y-full → 0`, 700ms silk). Texte et icône passent en **blanc** pendant la transition.
- **Boutons primaires** : scale `1.02` + gradient qui monte par le bas, sans changer la couleur du texte principal.
- **Liens de nav** : soulignement qui se déploie de gauche à droite (`w-0 → w-full`, 300ms).
- **Pastilles de terrain (timeline)** : `scale-125`, inversion fond/texte.

### Press / focus
- Pas de shrink. Focus ring subtil (`--ring`, oklch earthy).
- Pas de feedback haptique visuel agressif : la main et l'œil suivent l'inertie.

### Borders & radii
- `--radius` = **0.5rem** (8px) de base. Échelle par pas de 4 jusqu'à `--radius-3xl` = 20px.
- **Cartes de pilier** : `rounded-2xl` (16px).
- **Bloc CIFRE** : `rounded-3xl` (20px), bordure `border-2 border-foreground/90`.
- **Boutons pilule** : `rounded-full`.
- **Bordures** : `border` fine (1px, `--border`), jamais de double border sauf bloc d'appel CIFRE.

### Shadows & elevation
- Ombres **très discrètes au repos** : `shadow-[0_1px_0_oklch(1_0_0/0.6)_inset]` (léger filet lumineux intérieur en haut, comme un papier).
- **`shadow-2xl` au hover** pour les cartes pilier et les CTA primaires.
- Pas d'ombres bleues ou colorées ; toujours neutres.

### Transparence & blur
- **Nav en scroll** : `bg-background/80 backdrop-blur-md` + `border-b border-border/60`.
- **Halos** : `blur-3xl` sur cercles colorés semi-transparents.
- **Cartes CIFRE (sur fond sombre)** : `bg-background/[0.04] backdrop-blur-sm` + `border-background/15`.
- Sobre : la transparence n'est jamais décorative, elle sert la profondeur.

### Imagerie
- Pas d'imagerie photo dans le repo actuel. **Recommandation** : photos **chaudes, argentiques, légèrement désaturées** — tons crème, ambre, terre cuite — avec grain film. Jamais de photo froide bleutée, sauf si elle illustre spécifiquement le pilier Technique.
- Sujets possibles : mains qui travaillent la glace, ateliers, carnets ethnographiques, paysages de terrain.

### Layout rules
- Nav **fixe en haut**, transparente au top, opaque en scroll.
- Barre de **progression de scroll** (2px, `--foreground/80`) tout en haut, au-dessus de la nav.
- Pas de sidebar, pas de modal flottant.
- Section héros `min-h-[100svh]` pour respirer.

### Color vibe
- **Chaud, papier, terreux** pour la base — rassurant et littéraire.
- **Froid (ice)** et **mystique (meta)** n'apparaissent que **par couches**, jamais comme fond principal.
- Ocre = chaleur monétaire, valeur artisanale.

---

## Iconography

Le système d'icônes est **Lucide React** (`lucide-react@0.575.0`) — stroke 1.5–2, outline only, jamais fill. **Aucune icône n'est reproduite en SVG custom** dans ce design system : on utilise Lucide partout.

Icônes utilisées dans le produit actuel (à utiliser comme vocabulaire standard) :

| Usage | Icône Lucide |
|---|---|
| Pilier Technique | `Cog` |
| Pilier Économie & Social | `Coins` |
| Pilier Métaphysique & Sensoriel | `Sparkles` |
| Terrain (timeline, pays) | `MapPin` |
| Citation bloc | `Quote` (rotation -12°, opacité 10%, décoratif) |
| Timeline 2019 | `Wifi` |
| Timeline 2022 | `Flower2` |
| Timeline 2026 | `Snowflake` |
| CTA "Télécharger PDF" | `Download` |
| Retour en haut | `ArrowUp` |
| CTA Hero scroll | `ArrowDown` |
| Menu mobile | `Menu` / `X` |
| Contact | `Mail` |
| Réseaux | `Linkedin`, `BookOpen` (Academia), `Fingerprint` (ORCID) |
| CIFRE — laboratoire | `GraduationCap` |
| CIFRE — entreprise | `Factory` |

**Taille standard** : `size-4` (16px) en ligne, `size-5` (20px) pour les icônes d'en-tête de carte, `size-6` pour icône d'email dans footer.

**Emoji** : jamais utilisé.
**Caractères Unicode** utilisés comme "icônes" typographiques : `§`, `·`, `—` (em-dash), `«  »` (guillemets français).

Pour intégrer : `npm i lucide-react` ou CDN `https://unpkg.com/lucide@latest`.

---

## Index du design system

```
./
├── README.md                  ← tu es ici
├── SKILL.md                   ← skill cross-compatible pour Claude Code / prototyping
├── colors_and_type.css        ← tokens OKLCH + typographie sémantique
│
├── source_reference/          ← composants originaux du repo (TanStack + Framer Motion)
│   ├── Hero.tsx
│   ├── Nav.tsx
│   ├── Pillars.tsx
│   ├── Methodology.tsx
│   ├── Timeline.tsx
│   ├── Funding.tsx
│   ├── Footer.tsx
│   └── ScrollProgress.tsx
│
├── preview/                   ← cards prévisualisées dans l'onglet Design System
│   ├── colors-palette.html
│   ├── colors-pillars.html
│   ├── colors-semantic.html
│   ├── type-display.html
│   ├── type-scale.html
│   ├── type-eyebrow-quote.html
│   ├── spacing-radii.html
│   ├── spacing-shadows.html
│   ├── motion-easing.html
│   ├── components-buttons.html
│   ├── components-card-pillar.html
│   ├── components-nav.html
│   ├── components-timeline-step.html
│   ├── brand-logo.html
│   └── brand-grain.html
│
└── ui_kits/
    └── portfolio_these/
        ├── README.md
        ├── index.html         ← click-thru complet
        ├── Nav.jsx
        ├── Hero.jsx
        ├── Pillars.jsx
        ├── Methodology.jsx
        ├── Timeline.jsx
        ├── Funding.jsx
        └── Footer.jsx
```

---

## Caveats

- **Polices** : Playfair Display et Inter sont chargées via Google Fonts CDN (identique au repo source). Pas de fichiers `.ttf` en local — le repo n'en fournit pas non plus.
- **Assets visuels** : le repo n'inclut pas de logo graphique, de photos de terrain, ni d'illustrations. Le "logo" est purement typographique : `Météorologie · du goût` en sérif italique. Aucune icône SVG custom n'est reproduite ici ; on s'appuie sur Lucide.
- **PDF de projet** référencé dans le code (`/projet-de-these.pdf`) n'est pas fourni. Les CTA "Télécharger" pointent vers un href mort dans les recréations — laisser tel quel jusqu'à réception du PDF.
