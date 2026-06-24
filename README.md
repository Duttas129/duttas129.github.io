# duttas129.github.io

Static landing pages served from GitHub Pages, reached via printed QR codes.

| Path | Purpose |
|------|---------|
| `/`         | Minimal branded splash (no private info) |
| `/bagtag/`  | Lost-luggage contact page |
| `/brio/`    | Honda Brio — vehicle info + owner contacts |
| `/creta/`   | Hyundai Creta — vehicle info + owner contacts |

## Shared assets (`/assets`)
- **`theme.css`** — the whole design system: black canvas, two-blue palette, glassmorphic cards, system (SF Pro / Helvetica) type, entrance animations, reduced-motion fallbacks.
- **`i18n.js`** — on-device translation. Hand-authored strings in 16 languages (English, Hindi, Bengali, Tamil, Telugu, Kannada, Malayalam, Arabic, Italian, Japanese, Spanish, French, German, Chinese, Portuguese, Russian). Auto-selects from the browser locale, remembers the manual override, handles RTL. No backend, no network calls. Also drives the staggered reveal animation.

## Editing
- **Contact numbers / names** live inline in each page's `.contact` blocks.
- **Translatable copy** is keyed by `data-i18n="key"` in the HTML and defined in `assets/i18n.js`. Add a language by adding one entry to `DICT` and `NATIVE`/`ORDER`.
- **No private data** (Wi-Fi passwords, home address on car pages) belongs in this public repo — see the security note below.

## Security note
The home address appears only on `/bagtag/` (lost luggage is returned home — intended). Car pages deliberately omit it. There is intentionally **no** Wi-Fi / network page: this repo is public, so anything committed here is world-readable.
