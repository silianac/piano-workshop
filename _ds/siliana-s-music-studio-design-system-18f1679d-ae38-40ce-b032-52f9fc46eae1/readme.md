# Siliana's Music Studio — Design System

A warm, editorial design system for **Siliana's Music Studio** (also
*Siliana Piano*) — a studio offering **audiation-based piano lessons for
children and their families**, rooted in the research of Dr. Edwin Gordon
and Music Learning Theory. Online and in-person, in Sofia, Bulgaria, taught
in English and Bulgarian.

The brand voice is calm, intelligent, and warm — high expectations held
with great tenderness. The visual world is soft and literary: ivory paper,
a quiet sage and cream palette, a single terracotta accent, an elegant
Garamond serif paired with a humanist sans, and gentle musical motifs
(a treble-clef wordmark, a pressed flower, curved "wave" section breaks).

---

## Sources

This system was built from materials the studio provided. You may not have
access, but they are recorded here so you can go deeper if you do:

- **Website repository (private):** `silianac/siliana-website`
  → https://github.com/silianac/siliana-website — a complete single-page
  site (`index.html`) that is the primary source of truth for the visual
  language. Explore it to lift exact spacing, copy, and section rhythm.
- **Live site:** https://silianamusic.com
- **Brand assets (uploaded):** primary logo lockup in five colorways
  (black, cream, white, red, yellow) and the official color-palette sheet.

If you are building new work for this brand, reading the website repo above
will help you match the real product closely.

---

## Content fundamentals — how Siliana writes

The studio writes in the **first person singular** ("I", "my teaching", "I
read everything"), addressing the reader as **"you"** and "your family". It
is the voice of one teacher speaking directly to a parent — personal, never
corporate. There is no "we", no marketing plural.

**Tone:** thoughtful, unhurried, quietly confident. It explains a pedagogy
without jargon-dumping; technical terms (*audiation*, *Music Learning
Theory*, *Edwin Gordon*) are introduced and then gently defined. It is
warm but holds **high standards** — a recurring theme is taking children
seriously as musicians.

**Casing:** Headlines are **sentence case** ("The missing piece in piano
education", "Choose your path."). Overlines/kickers are **UPPERCASE** and
widely tracked ("MY PHILOSOPHY", "WORKING TOGETHER"). Body is sentence case.

**Punctuation & devices:**
- Em dashes for asides — used often, as a breath in the sentence.
- Italics for emphasis and for the keyword *audiate* / *audiation*.
- Curly quotes; "words" and "phrases" of music appear in quotation marks.
- Short, declarative closing lines ("I read everything.").

**Emoji:** none. Never. The brand is literary and restrained.

**Specific examples (use as a reference for new copy):**
- Hero: *"Growing Lifelong Pianists" / "Teaching children to think, hear,
  and play musically."*
- Philosophy: *"In the same way children learn to speak before they learn
  to read, students first experience music through singing, movement,
  listening, improvisation, and pattern learning."*
- About: *"My teaching has high expectations because children deserve to be
  taken seriously as musicians. And it has warmth because they're children
  — curious, brilliant, playful."*
- CTA labels: *"Start the Conversation"*, *"Learn More"*, *"Send message"*.

---

## Visual foundations

**Palette.** Six named brand colors (see `tokens/colors.css`):
- **Beige / Ivory `#F3EFDE`** — the primary page background; everything sits
  on warm paper, never pure white.
- **Cream `#FFF1C1`** — soft highlight surface (callouts, a full section).
- **Sage / Green `#DBDDB6`** — calm secondary section background.
- **Terracotta / Red `#DE6A57`** — the single accent: buttons, the treble
  clef, links on hover, kickers, left-border rules. Used sparingly.
- **Gold / Yellow `#F7D56A`** — warm joy accent (blobs, small highlights).
- **Black / Ink `#131F26`** — all text, and dark "pop" sections.

Color is used in **horizontal bands**: the page moves ivory → sage → ivory
→ ink → cream → ivory, each transition softened by a wave divider. Text is
ink on light bands and ivory on the dark band; terracotta is the constant
accent throughout.

**Typography.** Two families do everything:
- **Cormorant Garamond** (serif) — display, all headings, and *italic
  pull-quotes*. High-contrast, elegant, set at regular weight with slightly
  negative tracking. Italic is a signature — used for sub-heads, quotes, and
  the word *audiate*.
- **DM Sans** (humanist sans) — body copy, UI, buttons, and the uppercase
  kickers/labels. Comfortable, modern, quietly friendly.
Both are Google Fonts (loaded in `tokens/typography.css`); the live site uses
the same two, so **no substitution was needed**.

**Imagery.** Warm, natural-light photography — a portrait holding Mozart
sonatas; children seated in a circle mid-lesson. Tones are warm and slightly
desaturated, never cold or high-contrast. Photos sit in 18px-rounded frames
with a soft drop shadow.

**Shape & cards.** The shape language is **soft**: cards are ivory with an
**18px radius** and a low warm shadow, lifting **-4px on hover**. The
signature flourish is the **organic "blob"** — a warm cream or gold shape
with an irregular `border-radius` that bleeds in from a card corner behind
the text. A second signature is the **swatch "arch"** (rounded top, flat
bottom), drawn straight from the palette sheet — captured as `--radius-arch`.

**Buttons & inputs.** Fully **pill-shaped** (`--radius-pill`). Primary is a
terracotta fill (darkens + lifts 1px on hover); secondary is an ink outline
that inverts to a solid ink fill on hover. Form fields are pills too, with a
translucent white fill that brightens and a terracotta border on focus;
textareas use the softer 24px radius.

**Dividers & motifs.** Sections are separated by **SVG wave dividers** — a
gentle `Q`/`T` curve in the color of the section being entered. Decorative
accents: the **terracotta treble clef**, a **pressed-flower** mark (used on
the dark testimonials band), and large **circles** that float behind the hero
at low opacity.

**Motion.** Restrained and soft. Fade/translate on scroll-in, gentle hover
lifts, ~0.2–0.4s eases. No bounces, no parallax, no looping decoration.
Easing is `cubic-bezier(0.22, 0.61, 0.36, 1)` (out) / `(0.4,0,0.2,1)` (soft).

**Borders & shadows.** Hairline ink borders at low opacity (`--ink-line`,
12%). Shadows are warm, low, and diffuse — built on the ink color at 8–16%,
never harsh black. No hard 1px black borders except the secondary button.

**Layout.** Content widths: `--container` 1200px for general layout,
`--container-narrow` 760px for long-form reading. Generous, unhurried
vertical rhythm (`--section-y`, clamped 80–140px). Nav is sticky on ivory.

---

## Iconography

The brand is **near-iconless by design** — it relies on typography, color,
photography, and a few bespoke decorative marks rather than a UI icon set.

- **No icon font, no icon library** is used anywhere in the source site.
- **Decorative marks** are custom PNGs, copied into `assets/`:
  `treble-clef.png` (terracotta hand-drawn clef) and `flower-accent.png`
  (a pressed flower for the dark section). These are brand ornaments, not
  functional icons — use them to punctuate, not to label.
- **The only functional "icon"** in the source is the select-dropdown
  chevron, drawn inline as a tiny SVG path (an ink `M1 1l5 5 5-5` caret).
  The `Select` component reproduces it.
- **Emoji / unicode icons:** never used.

**If you need UI icons** (for a new product surface the brand doesn't yet
have), reach for a **thin, rounded line set** to match the soft, gentle feel
— e.g. [Lucide](https://lucide.dev) at ~1.5px stroke, inked in `--ink` or
`--terracotta`. Flag any such addition as net-new, since the existing brand
ships no icon system. Prefer the treble clef and arch motif over generic
icons wherever a brand flourish will do.

---

## Index — what's in this system

**Foundations**
- `styles.css` — the single entry point (import-only). Consumers link this.
- `tokens/colors.css` — palette + semantic surface/text/accent aliases.
- `tokens/typography.css` — font families, scale, weights, tracking (+ font load).
- `tokens/spacing.css` — 4px spacing scale, section rhythm, containers.
- `tokens/effects.css` — radii (incl. arch), warm shadow set, motion, borders.

**Assets** (`assets/`)
- Logo lockup in five colorways (`logo-black/cream/white/red/yellow.png`)
  plus the original site lockup (`logo-lockup-black.png`).
- Decorative marks: `treble-clef.png`, `flower-accent.png`.
- Photography: `about-portrait.jpg`, `audiation-moment.jpg`,
  `teaching-circle.jpg`, `hero-piano.jpg`. Plus `favicon.png` and the
  reference `color-palette-reference.png`.

**Components** (`components/`)
- `buttons/Button` — pill action control (primary / secondary / ghost · 3 sizes).
- `forms/` — `Input`, `Textarea`, `Select`, `Checkbox` (the contact-form kit).
- `content/` — `Card` (with blobs), `SectionLabel` (kicker / tag), `Badge`,
  `PullQuote` (rule / bar), `Callout`, `Testimonial`.

**UI kits** (`ui_kits/`)
- `website/` — the full single-page marketing site, recreated on the system.

**Specimen cards** (`guidelines/`)
- Color, type, spacing, and brand cards that populate the Design System tab.

**Skill**
- `SKILL.md` — makes this folder usable as an Agent Skill (e.g. in Claude Code).

---

## Notes & caveats

- **Fonts** are loaded from Google Fonts (the same two the live site uses),
  so the Design System "Fonts" count shows 0 local `@font-face` files — this
  is intentional, not a gap.
- All copy in the UI kit is lifted or lightly trimmed from the real site.
