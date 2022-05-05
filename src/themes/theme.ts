import { createStitches, keyframes } from "@stitches/react";
import type * as Stitches from "@stitches/react";

export { keyframes };
export const { styled, createTheme, config } = createStitches({
  theme: {
    colors: {
      bg: "hsl(206,2%,93%)",
      bgShade: "hsl(206,2%,84%)",
      bgContrast: "hsl(228, 4%, 23%)",
      accent: "hsl(255, 84%, 56%)",
      accentContrast: "hsl(206,2%,93%)",
      gradient: "19deg, #21D4FD 0%, #B721FF 100%",
      colorLow: "#999",
    },
    space: {
      paddingDefault: "0 45px",
    },
    shadows: {
      shadow: "0 0 10px 1px hsl(206,2%,84%)",
      hiShadow: "0 0 5px 5px rgba(0,0,0,0.2)",
    },
    fonts: {
      roboto: "'Roboto', sans-serif;",
      poppins: "'Poppins', sans-serif",
    },
  },
});
type CSS = Stitches.CSS<typeof config>;

export const DarkTheme = createTheme("darkTheme", {
  colors: {
    bg: "hsl(228, 4%, 23%)",
    bgShade: "hsl(228, 4%, 13%)",
    bgContrast: "hsl(206,2%,93%)",
    accent: "hsl(252 62% 54.9%)",
    accentContrast: "hsl(206,2%,93%)",
    colorLow: "#555",
  },
  shadows: {
    shadow: "0 0 10px 1px hsl(228, 4%, 13%)",
    hiShadow: "0 0 5px 5px rgba(0,0,0,0.5)",
  },
});
