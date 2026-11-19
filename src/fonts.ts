import { BOARD_FONT_600, BOARD_FONT_700 } from "virtual:board-fonts";

/** The family the board themes ask for (see hostStyles). */
export const BOARD_FONT_FAMILY = "OPT Board";

// Fontsource's Latin range: Western European languages, the euro sign and the
// usual punctuation. Polish letters fall outside it and come from the fallback.
const LATIN =
  "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD";

/**
 * Declare the board's typeface (Barlow Semi Condensed, SIL OFL 1.1) once, on
 * the document. A @font-face inside a shadow root is ignored by browsers, but
 * one on the document is available to every shadow root below it.
 */
export function ensureBoardFonts(): void {
  const id = "openpublictransport-board-fonts";
  if (typeof document === "undefined" || document.getElementById(id)) return;
  const face = (weight: number, data: string) => `@font-face {
  font-family: "${BOARD_FONT_FAMILY}";
  font-style: normal;
  font-weight: ${weight};
  font-display: swap;
  src: url(data:font/woff2;base64,${data}) format("woff2");
  unicode-range: ${LATIN};
}`;
  const style = document.createElement("style");
  style.id = id;
  style.textContent = [face(600, BOARD_FONT_600), face(700, BOARD_FONT_700)].join("\n");
  document.head.appendChild(style);
}
