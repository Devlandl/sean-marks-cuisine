# Sean Mark's Cuisine -- Site-Wide Redesign Spec

## Overview

Complete visual overhaul of seanmarkscuisine.com from a generic template look to a bold, dark, chef-forward brand identity. The redesign aligns the website with the existing logo (black/white/electric green) and draws inspiration from Streetbird's bold, personality-driven approach.

**Design direction:** Dark & Electric -- black base, white text, electric green accents. Premium, bold, memorable.

---

## Color Palette

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Base | Near-black | `#0A0A0A` | Page backgrounds |
| Surface | Dark charcoal | `#1A1A1A` | Elevated sections, card backgrounds |
| Border/subtle | Medium gray | `#2A2A2A` | Dividers, borders |
| Body text | Light gray | `#E0E0E0` | Paragraphs, descriptions |
| Headings | White | `#FFFFFF` | Titles, nav links, emphasis |
| Accent | Electric green | `#4ADE40` | CTAs, hover states, highlights |
| Accent hover | Bright green | `#3BCF31` | Button hover, link hover |
| Warm accent | Soft amber | `#F59E0B` | Price highlights, special badges |

**Key rules:**
- Green is a *punctuation* color -- thin accent lines, underlines, hover glows, bullet dots. Never used as a large background fill.
- No emojis anywhere on the site. Replace with custom SVG icons or omit entirely.

---

## Typography

- **Display/Logo:** Script font echoing the handwritten logo style. Used sparingly for brand name only.
- **Headings:** Bold sans-serif (Inter or Manrope, weight 700-800). Oversized, tight letter-spacing, commanding.
- **Body:** Clean sans-serif (Inter or Manrope, weight 400). Slightly increased line-height for readability on dark backgrounds.

---

## Header & Navigation

- Fixed/sticky with `#0A0A0A` background, blur backdrop on scroll
- Left: Actual logo image (Logo 2, dark version) -- no plain text replacement
- Center/Right: Nav links in white, uppercase, letterspaced sans-serif
- Far right: Cart icon with green badge count
- Hover: green underline slides in from left
- Subtle `#2A2A2A` bottom border
- Mobile: hamburger opens full-screen dark overlay with large stacked links
- Remove visible Clerk UserButton from nav (move to subtle icon or account page)

---

## Homepage

### Hero
- Full viewport height, dark background
- Logo 2 displayed large and centered
- Single tagline in white below
- One green CTA button: "View This Week's Menu"
- Subtle animated scroll indicator at bottom
- Nothing else -- let it breathe

### "What We Do" Section
- 3-column grid on `#1A1A1A` surface
- Each card: green outline SVG icon, white heading, gray description
- Cards: Weekly Menu / Catering / Private Events
- Thin green top-border on each card
- No emojis, no gradients

### Featured Menu Preview
- Section heading with thin green line accent
- 2-3 featured dishes: name (white), description (gray), price (green)
- "See Full Menu" button at bottom

### Testimonials
- Dark background, one quote at a time
- Large green quotation mark as visual anchor
- Customer name and context in gray

### CTA Banner
- Full-width, black background with very subtle green gradient glow
- "Ready to Experience Sean's Cooking?" in large white
- Two buttons: "Order This Week's Menu" (green fill), "Book Catering" (green outline)

---

## Footer

- `#0A0A0A` background
- Small logo top-left
- 3-column layout: Quick Links / Contact / Social
- Links in gray, hover to green
- Thin green top border
- Social: outlined icons, not text links

---

## About Page

- Full-width hero: "Meet Sean Mark" in oversized white type
- Chef photo space (placeholder: logo on dark gradient until photo available)
- Story section on dark surface cards with large readable text
- Philosophy: clean icon + text rows with green accent dots
- Experience: timeline-style layout with green vertical line connecting milestones

---

## Menu Page

- Category tabs/filters with green active state
- Menu items as cards on `#1A1A1A` surface
- Dish name (white), description (gray), price (green)
- Add-to-cart: green outline button, fills green on hover

---

## Catering Page

- Bold hero headline
- Sample menus in styled cards (not plain bullet lists)
- Quote request form: dark inputs, green focus borders, white text
- Premium form styling throughout

---

## Events Page

- Card-based grid for upcoming events
- Date badge with green accent, event name, details
- Clean, scannable layout

---

## Gallery Page

- Masonry or grid layout
- Images edge-to-edge
- Subtle hover overlay with green tint
- Lightbox on click

---

## Contact Page

- Split layout: form on left, contact info on right
- Same premium dark form styling as catering page

---

## Shared Patterns (All Pages)

- No emojis anywhere
- Consistent section spacing: 80-120px vertical padding
- Green only as accent, never large background fills
- All forms use dark premium styling (dark inputs, green focus borders, white text)
- Page hero sections follow consistent pattern: full-width dark bg, oversized white heading
- Smooth hover transitions on all interactive elements
- SVG icons in green outline style where icons are needed

---

## Assets

- `public/logo 1.jpg` -- white background version (for light contexts if needed)
- `public/Logo 2.jpg` -- black background version (primary, used in header/hero/footer)
- Logo colors: black circle, white text, electric green "Sean" and "CUISINE"

---

## Out of Scope

- Admin pages (no visual changes)
- Checkout flow redesign (keep functional, apply dark form styling only)
- New content/copy -- reuse existing text, just restyle
- Photography -- design for placeholder state, easy to add photos later
