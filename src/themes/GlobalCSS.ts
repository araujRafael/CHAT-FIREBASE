import { globalCss } from "@stitches/react";

export const GlobalCSS = globalCss({
  "@import": "Global.css",
  "@font-face": {
    fontFamily: "'Roboto', sans-serif;",
    // src: 'local("CustomFont"), url("CustomFont.woff2")',
  },
  "*": {
    margin: 0,
    padding: 0,
    scrollBehavior: "smooth",
    boxSizing: "border-box",
    fontFamily: "$poppins",
  },
  li: {
    listStyle: "none",
  },
  "::-webkit-scrollbar": {
    background: "$bgShade",
    width: "8px",
  },
  "::-webkit-scrollbar-thumb": {
    background: "$colorLow",
  },
});
