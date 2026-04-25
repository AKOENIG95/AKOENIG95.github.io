# V2 Personal Website — Iteration Protocol

**Project**: `/Users/adriankonig/Library/Mobile Documents/com~apple~CloudDocs/DRIVE SD/AKOENIG95.github.io`
**Files**: `index_v2.html`, `style_v2.css`, `assets-v2/`
**Live preview**: `http://localhost:8765/index_v2.html` (lokaler Python-Server)
**Backups auf Desktop**: `~/Desktop/V1/` (Marc-Hanslin-Style), `~/Desktop/V2/` (Editorial-Hero-Stage)

---

## Konzept

Personal-Branding-Visitenkarte für Adrian König (Ph.D. candidate CIVPRO, Bern). Editorial / magazine-style Single-Page mit dunklem moody Hero, sandfarbenem Stat-Strip, abwechselnd hellen und dunklen Sektionen. Story-Arc: Research → Hybrid Profile → Founder/Leadership → Discipline (sport).

---

## Iterationen (chronologisch)

### Phase 1 — Konzept-Sondierung
- Analyse marchanslin.com als visuelle Referenz
- Erste V1 als Marc-Hanslin-Style mit «Spectrum»-Sektion (Authentic / Maneuverable / All-Weather Adaptionen)
- Backup auf `~/Desktop/V1/`

### Phase 2 — Story-driven Restart
- Komplette Neukonzeption mit Story-Struktur Hero → About → Education → Research → Publications → Beyond → Contact
- Eyebrow-Nummerierung (01–08)
- Sandfarbener Off-White-Hintergrund (#fbfaf6), Inter Sans + Cormorant Garamond Serif
- Bildauswahl aus `~/Desktop/topick`: alps, ASC Hossegor, kickboxing, river surfing, ski, surf-club
- 5 Voll-Bleed-Interludes als Kapiteltrenner

### Phase 3 — Faktenrecherche und Verifikation
- Komplette Sichtung von `01_CV`, `03_Experience_Records`, `04_Educational_Academic_Records`
- Verifizierte Marketing-Gold-Facts:
  - **6'275 Arbeitsstunden** ASC (Tätigkeitsnachweis 29.4.2023)
  - **~1'000 Mitglieder** ASC, drittgrösster Schweizer Surf Club
  - **CHF 150'000** jährliches Surfcamp-Budget, **>250 Teilnehmer/Jahr**, **14er-Team**
  - **LALIVE-Zeugnis** mit Zitat «Even with a heavy workload, Mr König constantly delivered very good work results»
  - **3× Swiss National Champion** Taekwondo (2010/11/12)
  - **2025 Doppel-Champion** Kickboxing + MMA an Open Swiss Academic Championships
  - **DELTA Group**: Lecturer seit Nov 2022, 119.42 Stunden Lehrtätigkeit bis 2025

### Phase 4 — Marketing-Restart
- Stat-Strip mit 4 Schlüsselzahlen
- Pull-Quotes von LALIVE und ASC
- Vollständige Experience-Timeline (LALIVE, Lenz & Staehelin, Kellerhals Carrard, Walder Wyss, CIVPRO, ASC, Weisse Arena)
- Available-for-Sektion (B2B Research & Project Support)
- Frühere ZZZ-Style-Profilbild Iteration

### Phase 5 — Critical-Review-Pass (User-Feedback)
- Contact reduziert auf **LinkedIn-only** (kein Email, Adresse, Telefon)
- **Wakeboard → River surfing** (sachliche Korrektur)
- Pull-Quote-Quellen entschlackt (kein «Work certificate» / «Tätigkeitsnachweis» mehr)
- Master-Theses-Erwähnungen entfernt
- Studiengang-Namen sauber ausgeschrieben (Doctor of Philosophy in Law usw.)
- Experience-Tätigkeitsbeschreibungen alle entfernt
- Publications-Heading: «Curiosity, in print.»
- **Research-Framing reframed**: «Tactical research on Swiss civil procedure» + «data science to surface strategic advantages in litigation»
- **OpenCaseLaw als Open-source-Contributor** (mit Arne Holicki und Jonas Hertner) hinzugefügt
- Open-source & Tools zu einer Subsektion zusammengefasst

### Phase 6 — Bildbearbeitung
- Headshot 400x400 BW aus CV als About-Photo
- Mehrere Crop-Iterationen: tight face → original framing → ZZZ-Style
- **Neues moody Portrait** (Screenshot 2026-04-25) eingeführt — dunkler Background, Gesicht im linken Bilddrittel
- Verschiedene Crop-Versuche

### Phase 7 — Editorial Dark Hero
- Hero komplett umgebaut: dunkler Editorial-Split mit Portrait links, Name+Tagline rechts
- Backup auf `~/Desktop/V2/`
- Pull-Quotes auf Voll-Bleed-Dunkel-Bänder (mit grossem «❝»-Ornament-Glyph)
- Honors auf 6 Einträge gestrafft (3× Swiss Champion zusammengefasst)
- Hero-Reveal-Cascade-Animation
- Footer mit AK-Mark und Editorial-Signatur

### Phase 8 — Schwarzfarben-Match und About-Photo-Removal
- `--bg-dark` von `#0a0a0a` auf **`#181818`** geändert (gemessener Grayscale-Wert des Bild-Backdrops)
- Gradient-Bleed verbreitert auf 480px (vorher 80px)
- About-Photo entfernt (redundant nach moody Hero)

### Phase 9 — Hero-Verschmelzung und Schlagwort-KPIs
- Bild via **CSS-Mask-Image** weich in die Schwarzfläche gefadet (statt Gradient-Overlay)
- Stat-Strip neu mit Schlagwort-KPIs: Research / Multidisciplinary / Leadership / Discipline
- Body-Lead-Text auf **Blocksatz** (`text-align: justify` mit Hyphenation)
- Hero-Text **absolut zentriert** auf Viewport (statt rechts ausgerichtet)
- Stat-Strip-Anpassung: «Law + Finance» → «Multidisciplinary», «Founder» → «Leadership»

### Phase 10 — Hero-Name einzeilig
- `<br>` zwischen Adrian und König entfernt — Name jetzt auf einer Zeile
- Hero-Content-Breite auf 1000px erhöht
- h1-Font-Size etwas kleiner skaliert (max 96px statt 124px), `white-space: nowrap` auf Desktop
- Mobile-Override mit umbrechendem Namen für schmale Screens

### Phase 11 — KPI-Konsolidierung auf 3 Schlagwörter
- Marketing-Review der vier Säulen ergab: Research und Multidisciplinary konzeptionell überlappend (beide academic profile)
- Konsolidiert auf drei Schlagwörter mit mehr visueller Bühne pro Säule
- Stat-Strip Layout: 3-Spalten statt 4 (mehr Atemraum), grössere Gap (48px), Padding hochgesetzt (72px)
- Font-Size feiner skaliert (max 42px) damit längere Keywords wie «Multidisciplinary» sauber passen

### Phase 12 — Grammatische Konsistenz der Schlagwörter
- Alle drei Schlagwörter jetzt im **gleichen grammatischen Format (Adjektive)**:
  - **Multidisciplinary** — Ph.D. across law, finance, and economics
  - **Entrepreneurial** — Founder · ~1,000-member surf club (ersetzt «Builder»; klingt professioneller und beschreibt den Charakter, nicht die Aktivität)
  - **Disciplined** — Three-time Swiss National Champion (ersetzt «Discipline» / Substantiv → Adjektiv)
- Resultat: Jedes Schlagwort ist eine Eigenschaft, die Adrian als Person beschreibt

### Phase 13 — Editorial-Marketing-Pass auf Subtexte und Hero
**Stat-Strip Subtexte** (Marketing-Tightening):
- Multidisciplinary detail: Prof. Eichel namentlich genannt + die vier Felder (law, corporate finance, business administration, international economics) explizit ausgeschrieben
- Entrepreneurial detail: ASC-Story von Aufbau bis Skala (~1,000 Members, drittgrösster CH-Surf-Club), gefolgt von dem was er weiter aufbaut (Publikationen, OpenCaseLaw, eigene Praxis)
- Disciplined detail: Drei Swiss National Titles plus internationale Medaillen über vier Länder, dann der 2025-Comeback im Kickboxing/MMA

### Phase 17 — Stat-Detail-Texte vom User finalisiert
- **Multidisciplinary**: «Combines academically grounded expertise across business, law, finance, economics, and technology. Researches data science driven litigation in his Ph.D. at the Institute for Private International Law and Civil Procedure, under Prof. Dr. Florian Eichel. Publishes across legal and interdisciplinary fields, with work spanning multiple academic domains.»
- **Entrepreneurial**: «Runs an independent B2B practice for legal research and project support based in Zurich. Contributes to the OpenCaseLaw project and several legaltech initiatives. Founder and former president of the Academic Surf Club Switzerland, comprising more than 1,000 members across all major Swiss universities. Built and ran leading student surfcamps, bringing together 200+ participants per year across two project weeks on a budget of around CHF 200,000. Co-founded the first Swiss championships in student surfing.»
- **Disciplined**: «Pursued two degree programmes in distinct academic disciplines in parallel, completing an exceptionally high ECTS workload while already publishing legal articles in renowned journals. Won multiple Swiss national titles in Taekwondo and achieved international placements across Europe.»
- Disciplined-Framing kombiniert nun **akademische und sportliche Disziplin** als zwei Ausprägungen derselben Charaktereigenschaft

### Phase 16 — Hero komplett neu: fixes Bild + flexibles Schwarz + Stats im Hero
- **Hero-Architektur umgebaut**: Stats sind jetzt INNERHALB des Hero (nicht mehr separate Sektion darunter)
- **Bild fix in Pixeln**: `position: absolute, top: 0, left: 0, width: 480px, height: 750px` — bleibt unabhängig vom Viewport gleich gross und im gleichen Crop
- **Schwarze Fläche flexibel**: Hero-Background füllt alles ausserhalb des Bildes mit `--bg-dark`. Bei Viewport-Vergrösserung wächst die schwarze Fläche nach rechts und unten
- **Hero-Layout flex column**:
  - Bild absolut top-left (480x750 fix)
  - hero-content (kicker, name, tagline) zentriert, flex 1 1 (nimmt verfügbaren Raum)
  - hero-stats unten, 3-spaltiges Grid spannt volle Breite
- **Stats auf dem Bild**: Der mittlere und linke Stat-Block überlagern die T-Shirt-Region des Bildes, der rechte sitzt rein auf der schwarzen Page-Fläche. Visuelle Kontinuität durch identischen Hintergrund.
- Stats-Trennung jetzt mit subtilen Borders (top + left rgba weiss) statt Gap

### Phase 15 — Stats auf dunkler Fläche, Bindestriche raus, OpenCaseLaw + Blocksatz
- **Stat-Strip jetzt auf dunklem Hintergrund** (`var(--bg-dark)` = `#181818`), nahtlose Fortsetzung der Hero-Schwarzfläche unter dem Bild — visuell als Erweiterung des Bild-Backdrops
- Detail-Texte in Blocksatz mit Hyphenation (`text-align: justify; text-align-last: left; hyphens: auto`)
- Stat-Schriftfarben angepasst: Keyword #fff, Punchline rgba(255,255,255,0.62), Detail rgba(255,255,255,0.72)
- Border-Top auf 1px rgba(255,255,255,0.18) für subtile Trennlinien auf dunkel
- **Alle en/em-Dashes entfernt** aus der ganzen Seite (Eyebrows, Date-Ranges, Page-Numbers, Title-Separators, Body-Copy)
- Eyebrows nutzen jetzt Mittelpunkt-Separator (· statt —)
- Datums-Ranges nutzen Bindestrich (z.B. «2018 - 2023»)
- Seiten-Nummern in Citations: «361-371»
- **OpenCaseLaw als Active Contributor** in Entrepreneurial-Subtext aufgenommen

### Phase 14 — Subtexte komplett neu nach User-Briefing
**Multidisciplinary**:
- Punchline: «Degrees in Finance, Law, and Economics»
- Detail: Researching data-science-driven litigation in his Ph.D. at CIVPRO, Bern. Combining knowledge across business, law, economics, and tech — computational methods auf Swiss civil procedure angewandt

**Entrepreneurial**:
- Punchline: «Founder · Academic Surf Club Switzerland» (unverändert)
- Detail: Founder + long-time president of ASC, today >1,000 members across Swiss universities. Most successful non-profit surfcamps in Swiss student surf scene mit 200+ participants und CHF 200k budget. Co-founder der ersten Swiss championships in student surfing

**Disciplined**:
- Neue Punchline: «Athletic discipline meets professional rigour» (statt «Three-time Swiss National Champion»)
- Detail ohne Jahreszahlen: Three Swiss national titles in Taekwondo, internationale Medaillen über France/Germany/Portugal/Luxembourg, multiple cantonal recognitions Basel-Stadt, dann recent double champion status Kickboxing+MMA

**Stat-Strip Visuelle Verfeinerung**:
- Jeder Stat hat jetzt einen **dünnen Strich oben** als editorial Marker
- Punchline (.lbl) jetzt in **Cormorant Garamond Italic** (statt Sans-uppercase) — wirkt magazinhafter, weniger CV-y
- Padding und Spacings rebalanciert

**Hero-Typografie hochgezogen**:
- Name: clamp(56px, 9.2vw, **148px**) — vorher max 96px, nun deutlich grösser, füllt den Raum
- Kicker: 13px mit 0.36em letter-spacing (vorher 11px)
- Role-Tagline: clamp(20px, 1.7vw, **26px**) — vorher max 21px
- Content-Bereich-Breite: max **1240px** (vorher 1000px) damit der grössere Name Platz hat
- Margins zwischen kicker/h1/role grosszügiger (44px, 48px)

---

## Aktueller Zustand (Stand jetzt)

### Hero
- Dunkler Background `#181818`
- Portrait links (60vw breit, height 100vh, object-fit cover, object-position left top)
- CSS-Mask fadet rechtes Bilddrittel weich in Schwarzfläche
- Text **absolut zentriert** auf Page-Mitte (top 50%, left 50%, translate -50%/-50%)
- Reveal-Cascade-Animation auf Page-Load: Portrait → Kicker → Name → Tagline → Scroll-Cue

### Stat-Strip (4 Schlagwörter)
| Keyword | Punchline | Detail |
|---|---|---|
| **Research** | Ph.D. candidate · CIVPRO, Bern | Tactical analysis of Swiss civil procedure with data-science methods. Supervised by Prof. Dr. Florian Eichel since 2025. |
| **Multidisciplinary** | Two master's degrees · Law and Finance | Master of Law + M.Sc. Corporate Finance (Bern), plus CAS International Law and Economics (WTI). |
| **Leadership** | Founder · Academic Surf Club Switzerland | ~1,000 members, third-largest Swiss surf club, five years as president. |
| **Discipline** | Three-time Swiss National Champion | Taekwondo 2010 – 2012, plus 2025 Open Swiss Academic Championships in Kickboxing and MMA. |

### Sektionen
1. **01 — About**: Bio in zwei Absätzen, Meta-Grid (Born / Citizenship / Languages), Single-Column (kein Photo mehr)
2. **Interlude**: Laax (Alpen)
3. **02 — Education**: Timeline mit 5 Stationen, sauber ausgeschriebene Studiengang-Namen
4. **03 — Research**: Lead «Litigation, tactically analysed.», 7 Current Projects, OpenCaseLaw + Tools
5. **Interlude**: Taekwondo-Headkick
6. **Pull-Quote-Band**: LALIVE (dunkel, mit «❝»-Ornament)
7. **04 — Experience**: 9 Stationen Timeline, ohne Beschreibungen
8. **05 — Publications**: 13 Artikel, Heading «Curiosity, in print.»
9. **Interlude**: ASC Hossegor
10. **Pull-Quote-Band**: Academic Surf Club (dunkel)
11. **06 — Beyond the institute**: Founder + Athlete, 3 Metric-Tiles, 2×2-Bild-Grid, 6 Selected Honors, Link zu honors.html
12. **Interlude**: Sunset Surf
13. **07 — Available for**: Dunkles Band, 3 Service-Säulen
14. **08 — Contact**: «Find me there.» + LinkedIn-CTA (kein Email/Tel/Adresse)
15. **Footer**: 3-spaltig mit AK-Mark, © Adrian König · Zurich, 2026, v1/Honors-Links

### Design-System
- **Farben**: `--ink: #0c0c0c`, `--bg: #fbfaf6` (warm off-white), `--bg-tone: #efece4` (sandig getönt), `--bg-dark: #181818` (matcht Bild-Backdrop)
- **Typografie**: Inter Sans (rsms.me CDN) + Cormorant Garamond Serif (Google Fonts CDN)
- **Body Lead**: Blocksatz mit Hyphenation
- **Bilder**: Monochrom (grayscale 100% via CSS), Color-Reveal beim Hover
- **Reveal-on-Scroll**: alle Headings, Lists, Grids, Interludes mit IntersectionObserver

---

## Bekannte offene Punkte / Diskussionsbedarf

- Hero-Text-Position: User wünscht stärkeres «Reinfliessen» in Bild — aktuell absolute zentriert auf Viewport, überlagert die maskierte Bildkante. Wenn weiter Anpassungen nötig: Mask noch stärker zur Mitte ziehen oder Image-Width reduzieren.
- Schlagwort-Set kann jederzeit weiter justiert werden (z.B. Discipline → Resilience, Multidisciplinary → Range, etc.)
- Sektion 07 «Available for» ist die einzige semi-kommerzielle Sektion. Optionaler Refinement-Punkt falls zu salesy wirkt.
- Hourly Rate (CHF 49.85 aus CV) aktuell **nicht** auf der Site — bewusst weggelassen aus Marketing-Sicht.

---

## Technische Notes

- Lokaler Server läuft im Hintergrund (Python http.server, Port 8765)
- `meta robots noindex,nofollow` — Site ist als Draft markiert, nicht von Suchmaschinen indexiert
- GoatCounter-Analytics aus v1 noch nicht in v2 übernommen
- JSON-LD Structured Data noch nicht in v2 übernommen
- Beim «Übernehmen» (V2 → live): alle Draft-Marker entfernen, SEO-Tags aktivieren, GoatCounter wieder einbauen

---

*Letztes Update: 2026-04-25*
