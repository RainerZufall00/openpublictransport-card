import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { createRequire } from "node:module";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

const require = createRequire(import.meta.url);

/**
 * The departure board's typeface, embedded in the bundle rather than fetched
 * from a font CDN: a Home Assistant install is often offline or kept away from
 * third-party requests, and the card has no other way to ship a file of its
 * own. Only the Latin subset and the two weights the board uses, about 23 KB
 * each; anything outside that range falls back to the next face in the stack.
 */
function boardFonts() {
  const id = "virtual:board-fonts";
  const resolved = "\0" + id;
  return {
    name: "board-fonts",
    resolveId(source) {
      return source === id ? resolved : null;
    },
    load(source) {
      if (source !== resolved) return null;
      const dir = join(dirname(require.resolve("@fontsource/barlow-semi-condensed/package.json")), "files");
      const font = (weight) =>
        readFileSync(join(dir, `barlow-semi-condensed-latin-${weight}-normal.woff2`)).toString("base64");
      return [
        `export const BOARD_FONT_600 = ${JSON.stringify(font(600))};`,
        `export const BOARD_FONT_700 = ${JSON.stringify(font(700))};`,
      ].join("\n");
    },
  };
}

export default {
  input: "src/openpublictransport-card.ts",
  output: {
    file: "dist/openpublictransport-card.js",
    format: "es",
    inlineDynamicImports: true,
  },
  plugins: [
    boardFonts(),
    resolve(),
    commonjs(),
    typescript(),
    terser(),
  ],
};
