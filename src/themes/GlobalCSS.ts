import { globalCss } from "@stitches/react";

export const GlobalCSS = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    scrollBehavior: "smooth",
    boxSizing: "border-box",
    // fontFamily: ,
  },
  li: {
    listStyle: "none",
  },
});
