README.md
# CBE  Birr Online Banking Dashboard

A responsive dashboard layout inspired by the structure of an Ethiopian
Commercial Bank online-banking interface.

This project focuses on CSS Grid and Flexbox and not exact functional and visual layout of the  real banking website.

## Layout

The main page skeleton uses CSS Grid with named grid areas:

- Header
- Main content
- Footer

The desktop layout is:

header | header
main | main
footer | footer


## Where CSS Grid is Used

### 1. Main page skeleton

The .app container uses:

css
display: grid;

grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
2. Dashboard cards

The service cards use:

grid-template-columns:
    grid-template-columns: repeat(2, minmax(0, 1fr));

3. Main content

The transactions section uses a nested Grid:

.content-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
}
Where Flexbox is Used

Flexbox is used for smaller components inside the Grid areas.

Navbar

The navigation uses Flexbox to arrange:

Logo
Language

The welcome section uses Flexbox.

Transaction rows

Each transaction uses Flexbox to align the transaction information
and amount.

Footer

The footer uses Flexbox to position the copyright information and
footer links.

Sticky Element

The header uses:

position: sticky;
top: 0;

This keeps the header visible while the main content scrolls.

Absolute Positioning

The NEW badge is absolutely positioned.

Its parent .offer-card has:

position: relative;

The badge therefore positions itself relative to the offer card,
not the page.

Responsive Design

There is one media query:

@media (max-width: 700px)

It changes the main Grid skeleton from two columns to three column.




Grid page skeleton - .app
Named grid areas - header, main, footer
Header - Grid area + position: sticky
Main - Grid area 
Footer - Grid area 
Navbar with Flexbox - .navbar
Flexbox - .moto-section
Card grid - .cards
Responsive cards - repeat(auto-fit, minmax(220px, 1fr))
Nested Grid - .content-grid
Sticky element - .header
Absolute element - .badge
Relative parent - .offer-card
One tablet media query - @media (min-width: 700px)` 
Mobile two-column skeleton - grid-template-areas` changes to two column 
README - Explains Grid vs Flexbox usage 

