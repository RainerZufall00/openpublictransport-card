import { css } from "lit";

/**
 * Rules for the card element alone: its size in the grid, and its palettes,
 * one per `theme`. The card carries the resolved theme as `data-theme` ("auto"
 * resolves to "dark" or "light" by the dashboard's mode), and the palettes set
 * the --opt-* variables there.
 *
 * They are kept out of cardStyles, which every layout and badge shares. Each of
 * those has its own shadow root, and a palette declared in the shared sheet was
 * declared again on every one of them — where no data-theme exists — so
 * everything inside a layout was painted from the base block whatever the
 * theme said. Declared once, on the card, the variables inherit into every
 * shadow root below it.
 */
export const hostStyles = css`
  /* The card fills the cell a section grid gives it, so that ha-card's
     max-height has a height to resolve against. With a fixed row count the
     layout's body then scrolls inside the cell instead of the card being drawn
     over the one below; with the row count on auto the cell is as tall as the
     card, and this changes nothing. */
  :host {
    height: 100%;
  }

  /* theme: ha, and the palette before a theme is applied. Everything is taken
     from the Home Assistant palette and type, so the card follows the
     dashboard's theme — light, dark or custom — instead of carrying colours of
     its own. */
  :host {
    --opt-bg: var(--ha-card-background, var(--card-background-color));
    --opt-text: var(--primary-text-color);
    --opt-text-secondary: var(--secondary-text-color);
    --opt-border: var(--divider-color);
    --opt-accent: var(--primary-color);
    /* Readable text on top of an accent-coloured surface (line badges). */
    --opt-on-accent: var(--text-primary-color);
    --opt-delay-red: var(--error-color);
    --opt-delay-green: var(--success-color);
    --opt-delay-yellow: var(--warning-color);
    /* Readable text on top of the delay colours (delay badges, the banner). */
    --opt-on-delay: var(--text-primary-color);
    /* Home Assistant's own heading: no band and no rule, no capitals, and the
       size and weight of its heading card's title. The entities card's 24px
       title outweighs a departure list below it. */
    --opt-header-bg: transparent;
    --opt-header-rule: transparent;
    --opt-header-font-size: var(--ha-font-size-l, 16px);
    --opt-header-font-weight: var(--ha-font-weight-normal, 400);
    --opt-header-line-height: var(--ha-line-height-normal, 1.6);
    /* Labels (column headings, the station line) in sentence case, untracked. */
    --opt-caps: none;
    --opt-tracking: 0;
    /* Small text on Home Assistant's scale: labels, countdowns, chips, badges. */
    --opt-font-size-label: var(--ha-font-size-s, 12px);
    --opt-font-size-badge: var(--ha-font-size-s, 12px);
    --opt-row-hover: color-mix(in srgb, var(--primary-text-color) 6%, transparent);
    --opt-font-family: var(--ha-font-family-body, Roboto, Noto, sans-serif);
    --opt-font-weight-medium: var(--ha-font-weight-medium, 500);
  }

  /* The departure board, dark: white on near-black, with an amber accent for
     what needs attention — the countdown, a changed platform, the header's
     rule — in a bold condensed face that stays legible at a distance on a
     wall-mounted tablet. The face is embedded (see fonts.ts). */
  :host([data-theme="dark"]) {
    --opt-bg: #0b0f17;
    --opt-text: #f5f7fa;
    /* 7.6:1 on the board. */
    --opt-text-secondary: #9aa4b2;
    --opt-border: #1c2330;
    /* card-mod can set --opt-board-accent to recolour the board. */
    --opt-accent: var(--opt-board-accent, #ffc233);
    --opt-on-accent: #0b0f17;
    /* Accent as text: on the dark board the accent itself reads (12:1). */
    --opt-accent-text: var(--opt-accent);
    /* Red and green as text on the board: 7.5:1 and 11:1. As badge fills
       they carry black figures. */
    --opt-delay-red: #ff7a6b;
    --opt-delay-green: #4ade80;
    --opt-delay-yellow: #fdd835;
    --opt-on-delay: #000000;
    /* The disruption band is a fill of its own: the text red above would
       carry white at only 2.6:1. White on this one measures 4.6:1. */
    --opt-banner-bg: #d92d20;
    --opt-banner-text: #ffffff;
    --opt-header-bg: transparent;
    --opt-header-rule: var(--opt-accent);
    --opt-header-rule-width: 2px;
    --opt-header-font-size: 16px;
    --opt-header-font-weight: 700;
    --opt-header-line-height: normal;
    --opt-caps: uppercase;
    --opt-tracking: 1;
    --opt-font-size-label: 14px;
    --opt-font-size-badge: 15px;
    --opt-row-hover: rgba(255, 255, 255, 0.04);
    --opt-font-family: "OPT Board", "Barlow Semi Condensed", "Roboto Condensed", "Arial Narrow", sans-serif;
    /* The embedded face has 600 and 700 only; nothing on the board is
       lighter than 600. */
    --opt-font-weight-medium: 600;
    /* Board-only parts (boardStyles). */
    --opt-platform-border: #3a4456;
    --opt-countdown-bg: transparent;
    --opt-countdown-text: var(--opt-accent);
    --opt-chip-bg: #1c2330;
  }

  /* The same board on white. Amber does not read as text on white (1.6:1),
     so it is only ever a fill here — the countdown pill, a changed platform,
     the rule — and its text role goes to a dark ochre. */
  :host([data-theme="light"]) {
    --opt-bg: #ffffff;
    --opt-text: #0f141c;
    /* 6.0:1 on white, 5.5:1 on the header band. */
    --opt-text-secondary: #5a6472;
    --opt-border: #e3e7ec;
    --opt-accent: var(--opt-board-accent, #ffc233);
    --opt-on-accent: #0f141c;
    /* 5.9:1 on white. */
    --opt-accent-text: #8a5a00;
    /* 6.0:1 and 5.0:1 on white, and with white figures as badge fills. */
    --opt-delay-red: #c0261a;
    --opt-delay-green: #15803d;
    /* A dark amber for notice marks and transfer risk: 3.6:1, above the 3:1
       an icon needs. */
    --opt-delay-yellow: #b07d00;
    --opt-on-delay: #ffffff;
    --opt-banner-bg: #d92d20;
    --opt-banner-text: #ffffff;
    --opt-header-bg: #f4f6f9;
    --opt-header-rule: var(--opt-accent);
    --opt-header-rule-width: 3px;
    --opt-header-font-size: 16px;
    --opt-header-font-weight: 700;
    --opt-header-line-height: normal;
    --opt-caps: uppercase;
    --opt-tracking: 1;
    --opt-font-size-label: 14px;
    --opt-font-size-badge: 15px;
    --opt-row-hover: rgba(15, 20, 28, 0.03);
    --opt-font-family: "OPT Board", "Barlow Semi Condensed", "Roboto Condensed", "Arial Narrow", sans-serif;
    --opt-font-weight-medium: 600;
    --opt-platform-border: #cbd2db;
    --opt-countdown-bg: #f1f3f6;
    --opt-countdown-text: #0f141c;
    --opt-chip-bg: #f1f3f6;
  }
`;

export const cardStyles = css`
  :host {
    display: block;
  }

  ha-card {
    background: var(--opt-bg);
    color: var(--opt-text);
    overflow: hidden;
    font-family: var(--opt-font-family);
    display: flex;
    flex-direction: column;
    /* The card takes the height its content needs, up to the height of the
       cell it is given (see hostStyles). With a fixed row count that is less
       than a long journey needs, and the layout's body scrolls; with the row
       count on auto the cell grows with the card. */
    max-height: 100%;
  }

  /* The layouts take the height their content needs; the card grows with them,
     so a journey with more legs is not cut off by a fixed card height. */
  openpublictransport-table-layout,
  openpublictransport-next-layout,
  openpublictransport-compact-layout,
  openpublictransport-trip-layout {
    display: flex;
    flex-direction: column;
    min-height: 0;
  }

  .card-header,
  .disruption-banner {
    flex-shrink: 0;
  }

  /* Each layout's body is what scrolls when the card is given less height than
     it needs — the header and a disruption banner stay put. Only the table's
     body used to: the others were clipped at the cell's edge, so a trip card
     at its default five rows lost its alternatives with no way to reach them. */
  .card-content,
  .trip-container,
  .compact-container,
  .next-container {
    min-height: 0;
    overflow-y: auto;
  }

  /* Icon sizing fallback: keeps legacy mdc variable and explicit dimensions in sync.
     The flex box is not cosmetic: an ha-icon holds an inline-flex ha-svg-icon,
     so as a block it puts that child on a text baseline and the glyph lands
     about 2px below the middle of the icon's own box — enough to read as
     misaligned beside a label. Laying the child out as a flex item centres the
     glyph in its box, which is what makes Home Assistant's own headings line
     up, and removes any need to nudge icons by hand. */
  ha-icon {
    --mdc-icon-size: var(--opt-icon-size, 24px);
    width: var(--opt-icon-size, 24px);
    height: var(--opt-icon-size, 24px);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* The header is the one place the themes part ways in shape rather than
     colour: the board's band of tracked capitals under a rule, or Home
     Assistant's own heading. Each theme's palette says which. */
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 12px 16px;
    background: var(--opt-header-bg);
    border-bottom: var(--opt-header-rule-width, 1px) solid var(--opt-header-rule);
    font-size: var(--opt-header-font-size);
    font-weight: var(--opt-header-font-weight);
    line-height: var(--opt-header-line-height);
    text-transform: var(--opt-caps);
    letter-spacing: calc(var(--opt-tracking) * 1px);
  }

  .card-header .station-name {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* The clock is secondary to the station, and keeps the body size under a
     title that is larger than it. */
  .card-header .current-time {
    font-size: var(--ha-font-size-m, 14px);
    font-variant-numeric: tabular-nums;
    color: var(--opt-text-secondary);
    margin-left: 12px;
    flex-shrink: 0;
  }

  /* The table's own box, so its columns can answer to the card's width (see
     the container query below). */
  .card-content {
    container-type: inline-size;
    /* The last row's own padding and this make Home Assistant's 16px below the
       content. */
    padding: 0 0 8px;
  }

  /* Disruption banner */
  .disruption-banner {
    background: var(--opt-banner-bg, var(--opt-delay-red));
    color: var(--opt-banner-text, var(--opt-on-delay));
    padding: 8px 16px;
    font-size: var(--ha-font-size-s, 12px);
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .disruption-banner ha-icon {
    --opt-icon-size: 16px;
    flex-shrink: 0;
  }

  /* The banner is a button that lists every disruption: reset the button's
     own look so it stays the band it was. */
  button.disruption-banner {
    width: 100%;
    border: none;
    margin: 0;
    font: inherit;
    font-size: var(--ha-font-size-s, 12px);
    text-align: start;
    cursor: pointer;
  }

  .disruption-banner .disruption-text {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .disruption-banner .disruption-more {
    flex-shrink: 0;
    font-weight: 700;
    text-decoration: underline;
  }

  button.disruption-banner:focus-visible,
  .notice-button:focus-visible {
    outline: 2px solid var(--opt-accent);
    outline-offset: -2px;
  }

  /* How long ago the data was fetched (show_data_age). */
  .data-age {
    padding: 0 16px 12px;
    font-size: var(--opt-font-size-label);
    color: var(--opt-text-secondary);
    font-variant-numeric: tabular-nums;
  }

  /* Table layout. The table is as wide as the card and never wider: the
     destination takes whatever the other columns leave and gives way first. */
  .departure-table {
    width: 100%;
    border-collapse: collapse;
  }

  /* 12px between columns, and Home Assistant's 16px inset at either edge, so
     the first column starts on the header's text and on the dashboard's own
     column. Twelve pixels a side on every cell spent 96px of a 384px card on
     padding and pushed the platform column off it. */
  .departure-table th,
  .departure-table td {
    padding: 8px 6px;
  }

  .departure-table th:first-child,
  .departure-table td:first-child {
    padding-left: 16px;
  }

  .departure-table th:last-child,
  .departure-table td:last-child {
    padding-right: 16px;
  }

  .departure-table thead th {
    text-align: left;
    font-size: var(--opt-font-size-label);
    font-weight: var(--opt-font-weight-medium);
    text-transform: var(--opt-caps);
    letter-spacing: calc(var(--opt-tracking) * 0.5px);
    white-space: nowrap;
    color: var(--opt-text-secondary);
    /* keep the header row pinned at the top of the scrolling list */
    position: sticky;
    top: 0;
    z-index: 2;
    background: var(--opt-bg);
    /* divider that stays attached to the cell (border-bottom can detach with collapse) */
    box-shadow: inset 0 -1px 0 var(--opt-border);
  }

  .departure-table tbody tr {
    border-bottom: 1px solid var(--opt-border);
    transition: background-color 0.15s ease;
  }

  .departure-table tbody tr:hover {
    background: var(--opt-row-hover);
  }

  .departure-table tbody tr:last-child {
    border-bottom: none;
  }

  .departure-table td {
    font-size: var(--ha-font-size-m, 14px);
    vertical-align: middle;
  }

  /* Time column: the time that will actually happen, the delay that explains
     it, and the countdown under both. */
  .time-cell {
    white-space: nowrap;
    font-variant-numeric: tabular-nums;
  }

  .time-departure {
    font-weight: var(--opt-font-weight-medium);
  }

  /* A time and the delay badge beside it, the badge centred on the time. Set on
     the time's baseline, the badge's figures lined up but its pill did not:
     they carry no descenders, so the pill's leading and descent all hang below
     them — 4.4px under the time's digits against 1.4px above. Centring the two
     boxes puts the pill's middle on the digits' middle, within 0.3px, in
     whatever face the theme draws them. */
  .time-line {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  .time-countdown {
    display: block;
    font-size: var(--opt-font-size-label);
    color: var(--opt-text-secondary);
    margin-top: 2px;
  }

  /* Line cell. The vehicle icon is the card's 16px, not ha-icon's 24px
     default: the line badge is what identifies the service, and the vehicle
     beside it only qualifies it. */
  .line-cell {
    --opt-icon-size: 16px;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .line-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 36px;
    padding: 2px 6px;
    border-radius: 4px;
    font-weight: 700;
    font-size: var(--opt-font-size-badge);
    background: var(--opt-accent);
    color: var(--opt-on-accent);
  }

  /* Destination: the rest of the row. A zero max-width lets a table cell
     shrink below its text, so the name ellipsises instead of widening the
     table past the card; the 100% width hands it every pixel the other
     columns do not need. */
  .destination-cell {
    width: 100%;
    max-width: 0;
    font-weight: 500;
  }

  /* A departure's notice mark follows its destination. In the line column it
     widened that column for every row, notice or not. */
  .destination {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .destination-name {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* Platform */
  .platform-cell {
    text-align: center;
    font-weight: var(--opt-font-weight-medium);
    white-space: nowrap;
  }

  /* The platform the timetable named, struck through. Secondary text, not a
     faded copy of the primary: at half opacity it measured 3.3:1 on the light
     board and 4.1:1 on the dark one. */
  .platform-changed {
    text-decoration: line-through;
    color: var(--opt-text-secondary);
    margin-right: 4px;
  }

  .platform-new {
    color: var(--opt-delay-red);
    font-weight: 700;
  }

  /* The short platform label is for narrow cards only. */
  .label-short {
    display: none;
  }

  /* A card in a narrow column — a phone, a dashboard of four — keeps every
     column rather than losing the last one off its edge: the vehicle icon
     goes, since the line badge already names the service, and the platform
     heading takes its short form. */
  @container (max-width: 340px) {
    .line-cell openpublictransport-transport-icon {
      display: none;
    }

    .label-long {
      display: none;
    }

    .label-short {
      display: inline;
    }
  }

  /* Notices */
  .notice-icon {
    --opt-icon-size: 16px;
    flex-shrink: 0;
    color: var(--opt-delay-yellow);
  }

  /* A 16px icon with a touch target around it; the negative margin keeps the
     row as tall as it was. */
  .notice-button {
    display: inline-flex;
    flex-shrink: 0;
    padding: 6px;
    margin: -6px;
    border: none;
    border-radius: 50%;
    background: transparent;
    color: inherit;
    cursor: pointer;
  }

  .notice-icon.notice-info {
    color: var(--opt-text-secondary);
  }

  /* Compact layout. The chips start on Home Assistant's 16px inset, where the
     header's text starts. */
  .compact-container {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding: 12px 16px;
  }

  /* The icon is a transport-icon element, not an ha-icon, so it is sized by
     the variable it reads: the ha-icon rule this replaces never matched, and
     the chips drew ha-icon's 24px default. */
  .compact-chip {
    --opt-icon-size: 16px;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 10px;
    border-radius: 8px;
    border: 2px solid var(--opt-border);
    background: var(--opt-bg);
    font-size: var(--opt-font-size-badge);
    transition: border-color 0.2s ease;
  }

  .compact-chip.on-time {
    border-color: var(--opt-delay-green);
  }

  .compact-chip.delayed {
    border-color: var(--opt-delay-red);
  }

  .compact-chip .chip-line {
    font-weight: 700;
  }

  .compact-chip .chip-destination {
    max-width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--opt-text-secondary);
  }

  .compact-chip .chip-countdown {
    font-weight: var(--opt-font-weight-medium);
    font-variant-numeric: tabular-nums;
  }

  /* Trip layout */
  .trip-container {
    /* The card's content keeps Home Assistant's own 16px inset, so it starts on
       the same column as every other card on the dashboard. The timeline's rail
       and dots live inside that inset rather than pushing the content right. */
    padding: 12px 16px;
  }

  .trip-header {
    display: flex;
    align-items: baseline;
    gap: 8px;
    margin-bottom: 8px;
    font-size: var(--ha-font-size-l, 16px);
    font-weight: var(--ha-font-weight-bold, 700);
    font-variant-numeric: tabular-nums;
  }

  .trip-arrow {
    color: var(--opt-text-secondary);
    /* The mark is drawn, so it is its own box that has to be placed: centred on
       the line rather than sat on a text baseline it does not share. */
    align-self: center;
    display: flex;
    flex-shrink: 0;
  }

  /* Sized in em so it scales with whatever text it joins, and stroked in
     currentColor so it inherits that text's colour. See the ARROW constant in
     layouts/trip.ts for why it is drawn and not typed. */
  .trip-arrow svg {
    display: block;
    width: 1.05em;
    height: 1.05em;
    fill: none;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  /* The header is bold, so its arrow carries the same weight. */
  .trip-header .trip-arrow svg {
    stroke-width: 2.6;
  }

  /* An arrow joins the two things on either side of it, so it keeps their
     company rather than the row's — in a row's own gap it read as another
     column separator, with as much air around it as unrelated values have. */
  .time-span {
    display: inline-flex;
    align-items: baseline;
    gap: 5px;
  }

  /* The journey's total reads at the same size as the times it belongs to; only
     its weight and colour set it back. */
  .trip-header .trip-duration {
    margin-left: auto;
    font-weight: var(--ha-font-weight-normal, 400);
    color: var(--opt-text-secondary);
  }

  /* One quiet line of facts rather than a row of filled boxes, the way Home
     Assistant renders a card's secondary information. */
  .trip-meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 2px 12px;
    margin-bottom: 12px;
    font-size: var(--ha-font-size-s, 12px);
    color: var(--opt-text-secondary);
  }

  .trip-meta-item {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    cursor: default;
  }

  .trip-meta-item ha-icon {
    --opt-icon-size: 16px;
    color: var(--opt-text-secondary);
  }

  /* Transfer risk. The colour rides on the icon so the label keeps the body
     text's contrast — painted in the warning hue it was unreadable on a light
     theme. A connection actually at risk is the one case loud enough to colour
     the text as well. */
  .risk-low ha-icon {
    color: var(--opt-delay-green);
  }

  .risk-medium ha-icon {
    color: var(--opt-delay-yellow);
  }

  .risk-high,
  .risk-high ha-icon {
    color: var(--opt-delay-red);
  }

  /* Timeline. Everything is placed from the four sizes below, so the rail, the
     dots and the text keep their relationship whatever those sizes become. */
  .trip-timeline {
    --opt-line-width: 2px;
    --opt-dot-size: 6px;
    --opt-dot-ring: 2px;
    /* the hollow marker's stroke: thinner than the outer ring, so a dot this
       small keeps a visible centre */
    --opt-dot-stroke: 1.5px;
    --opt-station-line: 20px;
    /* Gap between the dots and the text they mark. */
    --opt-dot-gap: 5px;
    /* From the legs' text back to the centre of the rail. */
    --opt-rail-offset: calc(
      var(--opt-dot-gap) + (var(--opt-dot-size) + 2 * var(--opt-dot-ring)) / 2
    );

    position: relative;
    /* Indenting the legs by exactly that offset puts the rail on the same
       column as the header, the facts and the alternatives — it reads as one
       vertical rule through the card's content — while the dots, being wider
       than the rule, straddle that column and sit a little into the padding. */
    padding-left: var(--opt-rail-offset);
  }

  .trip-leg {
    position: relative;
    padding-bottom: 16px;
  }

  /* The rail runs from this leg's dot to the next one, so it meets both centres
     and never leaves a gap at a leg boundary. */
  .trip-leg::after {
    content: "";
    position: absolute;
    left: calc(-1 * var(--opt-rail-offset) - var(--opt-line-width) / 2);
    top: calc(var(--opt-station-line) / 2);
    bottom: calc(-1 * var(--opt-station-line) / 2);
    width: var(--opt-line-width);
    background: var(--opt-border);
  }

  .trip-leg:last-child {
    padding-bottom: 0;
  }

  .trip-leg:last-child::after {
    display: none;
  }

  .trip-leg::before {
    content: "";
    position: absolute;
    /* the dot, ring included, centred on the rail */
    left: calc(-1 * var(--opt-rail-offset) - var(--opt-dot-size) / 2 - var(--opt-dot-ring));
    /* and on the middle of the station's first line */
    top: calc((var(--opt-station-line) - var(--opt-dot-size)) / 2 - var(--opt-dot-ring));
    width: var(--opt-dot-size);
    height: var(--opt-dot-size);
    border-radius: 50%;
    background: var(--opt-accent);
    border: var(--opt-dot-ring) solid var(--opt-bg);
  }

  /* A transfer is a hollow dot: a change of vehicle, not another colour. */
  .trip-leg.transfer::before {
    background: var(--opt-bg);
    box-shadow: inset 0 0 0 var(--opt-dot-stroke) var(--opt-accent);
  }

  /* Station and duration share the leg's first line, so the durations line up
     with the station names rather than floating beside the smaller detail row. */
  .leg-head {
    display: flex;
    align-items: baseline;
    gap: 12px;
  }

  .leg-station {
    font-size: var(--ha-font-size-m, 14px);
    font-weight: var(--opt-font-weight-medium);
    line-height: var(--opt-station-line);
  }

  .leg-details {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: var(--ha-font-size-s, 12px);
    color: var(--opt-text-secondary);
  }

  .leg-details ha-icon,
  .leg-details openpublictransport-transport-icon {
    --opt-icon-size: 16px;
  }

  .leg-time {
    font-variant-numeric: tabular-nums;
    font-weight: var(--opt-font-weight-medium);
  }

  .leg-line {
    font-weight: var(--opt-font-weight-medium);
  }

  /* The line and where it is headed: one phrase, so the arrow between them sits
     closer than the gap separating them from the ride's length. */
  .leg-service {
    display: inline-flex;
    align-items: baseline;
    gap: 5px;
    min-width: 0;
    overflow: hidden;
  }

  /* Where the vehicle is headed. It can be long, so it yields before the
     duration does. */
  .leg-direction {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
  }

  /* A station's own time sits at the right edge of its line, so the journey's
     four times read down one column like a timetable. */
  /* The delay and the time it qualifies travel together at the right edge. */
  .leg-head-time {
    margin-left: auto;
    display: flex;
    align-items: baseline;
    gap: 6px;
    flex-shrink: 0;
  }

  /* The badge's figures carry no descenders, so its ink rides high inside the
     pill and the pill hangs below the digits it annotates — measured, 4.1px
     under them against 1.7px above. No box alignment fixes that: the asymmetry
     is inside the pill, not in how it is placed, and reshaping the box moves
     both of its edges equally while the figures stay put. Two pixels up brings
     the two sets of figures onto the same optical line. */
  .leg-head-time openpublictransport-delay-badge {
    transform: translateY(-2px);
  }

  .leg-departure {
    flex-shrink: 0;
    font-size: var(--ha-font-size-m, 14px);
    font-weight: var(--opt-font-weight-medium);
    line-height: var(--opt-station-line);
    color: var(--opt-text);
  }

  /* The ride's length belongs to the vehicle that does it, so it follows the
     line and its direction directly rather than being pushed to the far edge:
     it reads as part of that sentence, and the right edge stays the times'. */
  .leg-duration {
    flex-shrink: 0;
    font-variant-numeric: tabular-nums;
  }

  /* When this leg gets in, under the time it left. Set back, because the pair
     that matters at a change is this arrival and the next leg's departure
     directly below it — which is what makes the wait between them visible. */
  .leg-arrival {
    margin-left: auto;
    flex-shrink: 0;
    font-variant-numeric: tabular-nums;
    color: var(--opt-text-secondary);
  }

  .leg-transfer-info {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: var(--ha-font-size-s, 12px);
    color: var(--opt-text-secondary);
    margin-top: 2px;
  }

  .leg-transfer-info ha-icon {
    --opt-icon-size: 16px;
  }

  /* Alternative journeys. No rule above the heading: the heading and the space
     before it already say a new section starts, and the rows below carry rules
     of their own — a third line here would compete with both. */
  .alt-journeys {
    margin-top: 16px;
  }

  /* The heading belongs to the list under it, so it sits close to it — the air
     that separates the two goes above the heading, not between them. */
  .alt-journeys-title {
    font-size: var(--ha-font-size-m, 14px);
    font-weight: var(--opt-font-weight-medium);
    color: var(--opt-text-secondary);
    margin-bottom: 2px;
  }

  .alt-journey {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 6px 0;
    font-size: var(--ha-font-size-s, 12px);
    font-variant-numeric: tabular-nums;
    color: var(--opt-text-secondary);
    border-bottom: 1px solid var(--opt-border);
  }

  .alt-journey .leg-time {
    color: var(--opt-text);
  }

  .alt-journey .alt-risk {
    margin-left: auto;
    display: inline-flex;
  }

  .alt-journey:last-child {
    border-bottom: none;
  }

  /* An alternative whose detail can be shown is a real button, not a row that
     happens to answer a click: it takes focus, responds to Enter and Space, and
     tells a screen reader that a dialog follows. Its box is the row's exactly —
     same padding, same rule underneath — so a list of buttons and a list of
     plain rows occupy the same space, and the card does not change shape on an
     integration too old to answer. */
  button.alt-journey {
    appearance: none;
    -webkit-appearance: none;
    width: 100%;
    margin: 0;
    background: none;
    border: none;
    border-bottom: 1px solid var(--opt-border);
    border-radius: 0;
    font-family: inherit;
    font-size: var(--ha-font-size-s, 12px);
    color: var(--opt-text-secondary);
    text-align: left;
    cursor: pointer;
  }

  /* The tint reaches 8px past the row on both sides, into the card's own
     padding, the way Home Assistant highlights a list row — with two offset
     shadows rather than a wider box, so nothing moves and the row's text stays
     on the card's column. */
  button.alt-journey:hover {
    background: var(--opt-row-hover);
    box-shadow: -8px 0 0 var(--opt-row-hover), 8px 0 0 var(--opt-row-hover);
  }

  button.alt-journey:focus-visible {
    outline: 2px solid var(--opt-accent);
    outline-offset: -1px;
  }

  /* The chosen connection's dialog. It is painted in the browser's top layer,
     which inherits none of the dashboard's appearance — not even the background
     a card is given for free — so every colour is set here, from the same Home
     Assistant variables the card is painted with. */
  .journey-dialog {
    width: min(calc(100vw - 32px), 460px);
    max-height: min(calc(100vh - 32px), 640px);
    padding: 0;
    border: 1px solid var(--opt-border);
    border-radius: var(--ha-card-border-radius, 12px);
    background: var(--opt-bg);
    color: var(--opt-text);
    font-family: var(--opt-font-family);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
    overflow: hidden;
  }

  /* Only while open: a dialog is display:none until then, and laying it out
     unconditionally would leave it on the page with nothing to close it. */
  .journey-dialog[open] {
    display: flex;
    flex-direction: column;
  }

  /* A plain tint rather than a themed one. ::backdrop inherited from the root
     element rather than from the dialog until Chrome 122, where a --opt-*
     defined on the card's host does not reach it; dimming reads correctly on a
     light and on a dark theme alike. */
  .journey-dialog::backdrop {
    background: rgba(0, 0, 0, 0.55);
  }

  .journey-dialog-head {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    flex-shrink: 0;
    padding: 16px 16px 0;
  }

  /* The title carries the journey's own header, which already has the margin
     that separates it from what follows; inside the head that margin would
     push the close button out of line with it. */
  .journey-dialog-head .trip-header {
    margin-bottom: 0;
    flex: 1;
    min-width: 0;
  }

  .journey-dialog-close {
    appearance: none;
    -webkit-appearance: none;
    display: inline-flex;
    padding: 4px;
    margin: -4px -4px 0 0;
    background: none;
    border: none;
    border-radius: 50%;
    color: var(--opt-text-secondary);
    cursor: pointer;
  }

  .journey-dialog-close:hover {
    background: var(--opt-row-hover);
  }

  .journey-dialog-close:focus-visible {
    outline: 2px solid var(--opt-accent);
    outline-offset: 0;
  }

  /* The journey scrolls, the title does not: a connection with many legs stays
     readable without the dialog growing past the screen. */
  .journey-dialog-content {
    padding: 8px 16px 16px;
    overflow-y: auto;
  }

  /* The dialog is not held to the card's column, so a leg says everything it
     has. On the dashboard's 374px a headsign like "Echterdingen
     Flughafen/Messe …" is cut off, and that cut is what the dialog exists to
     undo — here the direction wraps instead. */
  /* The row keeps its one line; it is the headsign inside it that wraps. Letting
     the row wrap instead put the leg's arrival on a line of its own with the
     rest of the row empty beside it — measured, 46px against the 38px it takes
     when the direction wraps in its own box and the duration and the arrival
     stay with the leg they belong to. */
  .journey-dialog .leg-details {
    flex-wrap: nowrap;
  }

  .journey-dialog .leg-service {
    overflow: visible;
  }

  .journey-dialog .leg-direction {
    overflow: visible;
    white-space: normal;
    text-overflow: clip;
  }

  .journey-dialog-status {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 24px 0;
    font-size: var(--ha-font-size-s, 12px);
    color: var(--opt-text-secondary);
  }

  .journey-dialog-status.is-error {
    color: var(--opt-delay-red);
  }

  .journey-dialog-status ha-icon {
    --opt-icon-size: 20px;
  }

  /* A spinner of its own rather than Home Assistant's: the same reason the
     dialog is the native element and not ha-dialog. */
  .journey-dialog-spinner {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    border: 2px solid var(--opt-border);
    border-top-color: var(--opt-accent);
    border-radius: 50%;
    animation: opt-spin 0.8s linear infinite;
  }

  @keyframes opt-spin {
    to {
      transform: rotate(360deg);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .journey-dialog-spinner {
      animation-duration: 2.4s;
    }
  }

    /* Error / Empty states, set back by colour rather than opacity: the error's
     red at 70% measured 3.2:1 on the light board and 2.8:1 on the dark one. */
  .card-error,
  .card-empty {
    padding: 24px 16px;
    text-align: center;
    font-size: var(--ha-font-size-m, 14px);
  }

  .card-empty {
    color: var(--opt-text-secondary);
  }

  .card-error {
    color: var(--opt-delay-red);
  }

  .card-error ha-icon {
    --opt-icon-size: 40px;
    display: block;
    margin: 0 auto 12px;
  }

  /* Delay badge. A filled chip reads at a glance, which is what a delay wants —
     but at its old size it outweighed the journey's own times. Now that a leg
     reports the time that will actually happen, the badge only explains why
     that time differs from the timetable, so it is sized as the annotation it
     is rather than as a headline. */
  .delay-badge {
    display: inline-flex;
    align-items: center;
    padding: 0 4px;
    border-radius: 4px;
    font-size: var(--ha-font-size-xs, 10px);
    font-weight: var(--opt-font-weight-medium);
    font-variant-numeric: tabular-nums;
    line-height: 1.6;
  }

  .delay-badge.delayed {
    background: var(--opt-delay-red);
    color: var(--opt-on-delay);
  }

  .delay-badge.on-time {
    background: var(--opt-delay-green);
    color: var(--opt-on-delay);
  }

  /* The drawn mark: as tall as the pill's line, so an on-time badge is the
     height of a delayed one, and stroked about as heavy as the figures. */
  .delay-badge .check {
    display: block;
    width: 1.2em;
    height: 1.6em;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.6;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  /* Editor styles */
  .card-config {
    padding: 16px;
  }

  .card-config .config-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0;
  }

  .card-config .config-row label {
    font-weight: 500;
  }

  .card-config ha-entity-picker,
  .card-config ha-select,
  .card-config ha-textfield {
    width: 100%;
  }

  .config-section {
    margin-bottom: 16px;
  }

  .config-section-title {
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    opacity: 0.6;
    margin-bottom: 8px;
  }
`;

/**
 * The table layout on the board themes (dark, light, auto). Home Assistant's
 * own theme keeps the table above; these rules only match the board's markup.
 *
 * Sizes follow the card's width rather than Home Assistant's type scale: a
 * board is read from across the room, so on a tablet-wide card the times and
 * destinations run 27–36px, and on a phone-wide one they shrink to what still
 * fits. Each size is a clamp() of the board's own width (cqi); the variables
 * hold the expression unevaluated, so it resolves against the .board
 * container wherever it is used.
 */
export const boardStyles = css`
  .board {
    container-type: inline-size;
    display: flex;
    flex-direction: column;
    min-height: 0;
    font-variant-numeric: tabular-nums;
    --b-gutter: clamp(16px, 3.3cqi, 24px);
    --b-label: clamp(13px, 2.1cqi, 15px);
    --b-sub: clamp(14px, 2.25cqi, 16px);
    --b-time: clamp(20px, 4.2cqi, 30px);
    --b-dest: clamp(18px, 3.75cqi, 27px);
    --b-platform: clamp(18px, 3.35cqi, 24px);
    --b-count: clamp(22px, 5cqi, 36px);
    --b-badge: clamp(16px, 3.2cqi, 23px);
    --b-station: clamp(20px, 4.45cqi, 32px);
    --b-clock: clamp(22px, 5.3cqi, 38px);
  }

  /* Header: the line, when the board shows only one, then a label and the
     station; the clock on the right. */
  .b-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    flex-shrink: 0;
    padding: 16px var(--b-gutter) 14px;
    background: var(--opt-header-bg);
    border-bottom: var(--opt-header-rule-width, 2px) solid var(--opt-header-rule);
  }

  .b-header-main {
    display: flex;
    align-items: center;
    gap: 14px;
    min-width: 0;
  }

  .b-header-text {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
  }

  .b-header-label {
    font-size: var(--b-label);
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--opt-accent-text);
  }

  .b-station {
    font-size: var(--b-station);
    font-weight: 700;
    line-height: 1.1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .b-clock {
    flex-shrink: 0;
    font-size: var(--b-clock);
    font-weight: 700;
    line-height: 1;
  }

  /* Line badge. Provider colours come in as an inline style. */
  .b-line {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
  }

  .b-line openpublictransport-transport-icon {
    --opt-icon-size: 22px;
    color: var(--opt-text-secondary);
  }

  .b-line-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.3em;
    box-sizing: border-box;
    min-width: 2.8em;
    height: 1.65em;
    padding: 0 0.35em;
    border-radius: 8px;
    font-size: var(--b-badge);
    font-weight: 700;
    white-space: nowrap;
    background: var(--opt-accent);
    color: var(--opt-on-accent);
  }

  /* The header's badge names the one line on the board, with its vehicle. */
  .b-header .b-line-badge {
    --opt-icon-size: 1.1em;
    font-size: calc(var(--b-badge) * 1.3);
    height: 1.85em;
    padding: 0 0.45em;
    border-radius: 10px;
  }

  .b-header .b-line-badge openpublictransport-transport-icon {
    color: inherit;
  }

  /* Disruption band, at the board's reading size. */
  .board button.disruption-banner {
    gap: 10px;
    padding: 12px var(--b-gutter);
    font-size: clamp(15px, 2.5cqi, 18px);
    font-weight: 600;
  }

  .board .disruption-banner ha-icon {
    --opt-icon-size: 22px;
  }

  /* The table. Columns: time, line (several lines only), destination,
     platform (optional), countdown. */
  .b-table {
    width: 100%;
    border-collapse: collapse;
  }

  .b-table th,
  .b-table td {
    padding: 11px 7px;
    vertical-align: middle;
  }

  .b-table th:first-child,
  .b-table td:first-child {
    padding-left: var(--b-gutter);
  }

  .b-table th:last-child,
  .b-table td:last-child {
    padding-right: var(--b-gutter);
  }

  .b-table thead th {
    padding-top: 12px;
    padding-bottom: 8px;
    text-align: left;
    font-size: var(--b-label);
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    white-space: nowrap;
    color: var(--opt-text-secondary);
    position: sticky;
    top: 0;
    z-index: 2;
    background: var(--opt-bg);
  }

  .b-table thead th.b-col-platform {
    text-align: center;
  }

  .b-table thead th.b-col-count {
    text-align: right;
  }

  .b-table tbody tr {
    border-top: 1px solid var(--opt-border);
    transition: background-color 0.15s ease;
  }

  .b-table tbody tr:hover {
    background: var(--opt-row-hover);
  }

  /* Time: the time that will happen, and under it why it differs from the
     timetable — or that it does not. */
  .b-time-cell {
    white-space: nowrap;
    line-height: 1.1;
  }

  .b-time {
    display: block;
    font-size: var(--b-time);
    font-weight: 700;
  }

  .b-time.late {
    color: var(--opt-delay-red);
  }

  .b-time-sub {
    display: block;
    margin-top: 2px;
    font-size: var(--b-sub);
    font-weight: 600;
    color: var(--opt-text-secondary);
  }

  .b-planned {
    text-decoration: line-through;
  }

  .b-delay {
    font-weight: 700;
    color: var(--opt-delay-red);
  }

  .b-on-time {
    color: var(--opt-delay-green);
  }

  .b-line-cell {
    white-space: nowrap;
  }

  /* Destination: takes what the other columns leave, and ellipsises. */
  .b-dest-cell {
    width: 100%;
    max-width: 0;
    line-height: 1.15;
  }

  .b-dest {
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
  }

  .b-arrow {
    display: flex;
    flex-shrink: 0;
    color: var(--opt-text-secondary);
  }

  .b-arrow svg {
    width: 0.8em;
    height: 0.8em;
    fill: none;
    stroke: currentColor;
    stroke-width: 2.6;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .b-dest-name {
    min-width: 0;
    font-size: var(--b-dest);
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .b-dest .b-arrow {
    font-size: var(--b-dest);
  }

  .b-platform-note {
    display: block;
    margin-top: 2px;
    padding-left: calc(var(--b-dest) * 0.8 + 10px);
    font-size: var(--b-sub);
    font-weight: 700;
    color: var(--opt-accent-text);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* The notice mark, a round button beside the destination. */
  .b-notice {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    /* 36px beside a tablet-sized destination, down to 28px on a phone. */
    width: clamp(28px, calc(var(--b-dest) * 1.35), 36px);
    height: clamp(28px, calc(var(--b-dest) * 1.35), 36px);
    padding: 0;
    border: none;
    border-radius: 50%;
    background: var(--opt-chip-bg);
    color: var(--opt-accent-text);
    cursor: pointer;
  }

  .b-notice.disrupted {
    color: var(--opt-delay-red);
  }

  .b-notice ha-icon {
    --opt-icon-size: 22px;
  }

  .b-notice:focus-visible {
    outline: 2px solid var(--opt-accent);
    outline-offset: 2px;
  }

  /* Platform in a box; a changed one is filled with the accent. */
  .b-platform-cell {
    text-align: center;
  }

  .b-platform {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    min-width: 2em;
    height: 1.75em;
    padding: 0 0.25em;
    border: 2px solid var(--opt-platform-border);
    border-radius: 8px;
    font-size: var(--b-platform);
    font-weight: 700;
    white-space: nowrap;
  }

  .b-platform.changed {
    border-color: var(--opt-accent);
    background: var(--opt-accent);
    color: var(--opt-on-accent);
  }

  /* Countdown: the number large, its unit small. A departure within the
     highlight window (highlight_minutes) is filled with the accent. */
  .b-count-cell {
    text-align: right;
    white-space: nowrap;
  }

  .b-count {
    display: inline-flex;
    align-items: baseline;
    gap: 0.15em;
    padding: 1px 0.3em;
    border-radius: 10px;
    background: var(--opt-countdown-bg);
    color: var(--opt-countdown-text);
    font-size: var(--b-count);
    font-weight: 700;
    line-height: 1.15;
  }

  .b-count.soon {
    background: var(--opt-accent);
    color: var(--opt-on-accent);
  }

  .b-count-unit {
    font-size: 0.5em;
    font-weight: 600;
  }

  .board .card-empty {
    font-size: var(--b-dest);
  }

  /* A narrow card keeps its columns: the vehicle icon goes first. */
  @container (max-width: 420px) {
    .b-line openpublictransport-transport-icon {
      display: none;
    }

    .b-arrow {
      display: none;
    }

    .b-platform-note {
      padding-left: 0;
    }
  }
`;
