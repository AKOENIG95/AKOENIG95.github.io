# V3 Personal Website — Launch Protocol

**Launch date**: 2026-04-25
**Live URL**: https://adriankoenig.ch/
**Repo**: https://github.com/AKOENIG95/AKOENIG95.github.io

---

## Konzept

Akademisch fokussierte Self-Marketing-Single-Page für Adrian König (Ph.D. candidate CIVPRO, Bern). Ablösung der V2-Editorial-Iteration. Primäre Zielgruppe: akademisches Publikum (Forschungspartner, Konferenzorganisatoren, Journal-Editoren, akademische Recruiter), sekundäre Zielgruppe: B2B-Mandanten und Lehre-Auftraggeber.

Editorial / magazine-style mit moody dunklem Hero, einem einzelnen atmosphärischen Interlude, und zwei Hauptsektionen (Profile + Research). Kein expliziter Contact-Block — Kontaktwege sitzen im dunklen Footer.

---

## Vorgeschichte

V1 (klassisch, Georgia Serif, Container 720px) lief als adriankoenig.ch bis April 2026. V2 wurde als Editorial-Hero-Stage komplett neu konzipiert (siehe `_archive/v2/V2_PROTOCOL.md` für die 17 V2-Iterations-Phasen). V2 ging nie live, wurde aber zur Grundlage für V3.

V3 entstand am 2026-04-25 als komplette Neukonzeption mit Fokus auf akademische Kernzielgruppe.

---

## Strukturelle Entscheidungen V2 → V3

### Reduziert / entfernt aus V2
- **Hero-Stat-Säulen** (drei Charakter-Adjektive Multidisciplinary / Entrepreneurial / Disciplined mit Detail-Texten) — komplett entfernt für ruhigeren Hero
- **04 · Education-Block** — komplett entfernt
- **04 · Beyond-Block** — komplett entfernt (Buttons zu Honors / ASC ohne eigenständige Section)
- **05 · Available For** (B2B Service Strip, dunkles Band) — komplett entfernt, war zu salesy für akademischen Tonus
- **05 · Contact** — komplett entfernt, Kontaktwege wandern in den Footer
- **LALIVE-Pullquote** und **ASC-Pullquote** — beide entfernt; LALIVE einmal kurz inline integriert, dann auf Wunsch des Users wieder raus
- **Sport-Heaviness der Interludes**: V2 hatte 4-5 Sport-Bilder als Section-Trenner (Storm, Skipark, TKD, Skiflip, Sunset). V3 hat nur noch ein einziges atmosphärisches Interlude (Storm) zwischen Hero und Profile
- **«Find me there.»**, **«Practice and project work.»**, **«A path through law, finance, and economics.»**, **«Founder. Athlete.»** — alle h2 Sub-Headings entfernt, nur Eyebrows bleiben

### Konsolidiert
- **About + Experience** → ein einziger Profile-Block mit fünf Fliesstext-Absätzen (Academic + Practice + Profile-Charakter + Entrepreneurial + Sport/Personal)

### Neu / Beibehalten
- **Hero**: Portrait links (vergrössert von 480x750 auf 600x940), Schwarzfläche `#181818`, Name + Kicker «Ph.D. Candidate at CIVPRO · University of Bern» + italic Cormorant Strapline «Tactical research on Swiss civil procedure.»
- **Hero-min-height**: `100vh` → `72vh` (kompakter)
- **Eyebrows ohne Nummerierung**, an Heading-Grösse `clamp(28px, 3.4vw, 44px)` mit `border-top: 1px solid var(--line)` + 36px padding-top als editorial Section-Marker
- **Footer dunkel** (`var(--bg-dark)`) als visuelle Symmetrie zum Hero, mit AK-Mark, © Adrian König · Zurich, 2026, und LinkedIn + ORCID

---

## Design System (V3)

- **Farbpalette**: --ink #0c0c0c, --ink-soft #4a4a4a, --muted #8d8a82, --line #e5e2db, --bg #fbfaf6 (warm off-white), --bg-dark #181818
- **Typografie**: Inter Sans (rsms.me CDN) + Cormorant Garamond Serif (Google Fonts CDN, 400 + 500 italic)
- **Bilder**: 100% grayscale via CSS `filter: grayscale(100%)`
- **Lead-Body-Text**: Blocksatz mit Hyphenation, `clamp(17px, 1.4vw, 19px)`, line-height 1.75
- **Sections**: max-width 1240px, gutter 44px (22px mobile), padding 120px top/bottom
- **Animations**: Reveal-on-scroll (IntersectionObserver) für Headings, Leads, Listen, Interludes

---

## Accessibility & SEO

- Semantische Heading-Hierarchie: H1 → H2 (Profile, Research) → H3 (Current Projects, Publications, Open-source & Tools)
- Skip-Link als erstes Body-Element für Keyboard-User
- `:focus-visible` Outline (ink auf hellem Bg, off-white auf dunklem Bg)
- ARIA-Labels für SVG-Icons (Paywall-Lock)
- OG-/Twitter-Meta-Tags
- Canonical-URL gesetzt
- JSON-LD Person-Schema (jobTitle, affiliation, address, sameAs LinkedIn + ORCID, knowsAbout Research-Keywords)
- GoatCounter-Analytics aktiv

---

## Sektionen (V3 Live)

1. **Hero** (dunkel, ~72vh): Portrait + Name + Kicker + Strapline + Scroll-Cue
2. **Storm-Interlude**: Atmospheric Atlantic-Swell-Bild, fade-edges fade-top-dark
3. **Profile** (hell): 5 Absätze konsolidierter Fliesstext (CIVPRO/Eichel, Independent Practice + Lecturing + Bar Exam, Profile-Charakter Multidisziplinarität, Entrepreneurial Projects ASC + OpenCaseLaw, Sport-Discipline)
4. **Research** (hell): Lead-Statement + Current Projects (7 Einträge) + Publications (13 Einträge mit Year-Stamps + Paywall-Locks + Preview/Full PDF Buttons) + Open-source & Tools (2 Einträge)
5. **Footer** (dunkel): AK-Mark + © meta + LinkedIn · ORCID

---

## Subpages (V3 koexistierend)

- **honors.html** — Klassische V1-Style-Subpage (Georgia Serif, simple Container) mit allen Sport-Awards (Martial Arts + Swimming). Stylesheet referenziert auf `style-legacy.css`
- **asc-projects.html** — Minimaler V1-Style-Stub mit dem deutschen ASC-Zitat «Eine zentrale Figur in der Entwicklung des Vereins...» — Inhalt von Adrian später zu erweitern. Stylesheet referenziert auf `style-legacy.css`

---

## Repo-Struktur nach Launch

```
/
├── index.html (V3, live)
├── style.css (V3)
├── style-legacy.css (V1-Stylesheet, beibehalten für honors + asc-projects)
├── assets/
│   ├── hero-portrait.jpg
│   ├── interlude-storm.jpg
│   └── interlude-skiflip.jpg (orphan, kann später entfernt werden)
├── honors.html (V1-Style)
├── asc-projects.html (V1-Style stub)
├── publications/ (PDFs + HTML-Wrapper-Pages)
├── files/ (untracked, lokal)
├── og-image.jpg
├── tkd-1.webp (für honors.html)
├── CNAME
├── robots.txt
├── sitemap.xml
├── googleeecce83a77eee1f0.html (Google verification)
├── dc729e904de8ab20c54da4b4e6d00063.txt
├── info.docx
└── _archive/
    ├── V3_PROTOCOL.md (dieses Dokument)
    ├── v1/
    │   ├── index.html
    │   ├── style.css
    │   ├── profile.jpg
    │   ├── og-image.jpg
    │   └── tkd-1.webp
    └── v2/
        ├── index_v2.html
        ├── style_v2.css
        ├── V2_PROTOCOL.md
        └── assets-v2/ (alle V2-Assets, 15 Files)
```

---

## Bekannte offene Punkte

- **`asc-projects.html`** ist ein Stub mit nur dem Quote — Inhalt ergänzen (Surfcamps, Swiss Student Surfing Championships, Press, Mediathek)
- **`honors.html`** im V1-Stil belassen — könnte später im V3-Stil neu gebaut werden für visuelle Konsistenz
- **Email-Kontakt** fehlt im Footer — bewusste Entscheidung des Users (nur LinkedIn + ORCID), kann jederzeit ergänzt werden
- **`assets/interlude-skiflip.jpg`** ist nach Entfernung des Beyond-Blocks orphan — nicht mehr referenziert, kann später entfernt werden
- **Google Scholar / ResearchGate / SSRN** — falls Profile dort existieren, könnten sie in `sameAs` JSON-LD und im Footer ergänzt werden
- **CV-PDF** — bei Bedarf zum Download verlinken

---

*Letztes Update: 2026-04-25*
