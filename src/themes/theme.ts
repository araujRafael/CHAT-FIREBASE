import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";

export const { styled, createTheme, config } = createStitches({
  theme: {
    colors: {
      bg: "hsl(206,2%,93%)",
      bgContrast: "hsl(228, 4%, 23%)",
      accent: "hsl(252 62% 54.9%)",
      accentContrast: "hsl(206,2%,93%)",
    },
  },
});
type CSS = Stitches.CSS<typeof config>;

export const DarkTheme = createTheme("darkTheme", {
  colors: {
    bg: "hsl(228, 4%, 23%)",
    bgContrast: "hsl(206,2%,93%)",
    accent: "hsl(252 62% 54.9%)",
    accentContrast: "hsl(206,2%,93%)",
  },
});
