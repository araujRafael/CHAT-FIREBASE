import { styled } from "../../themes/theme";

export const PageContainer = styled("div", {
  background: "$bg",
  width: "100%",
  height: "100vh",

  transition: "all 0.5s ease",

  display: "flex",
  justifyContent: "center",
  alignContent: "flex-start",
  flexDirection: "row",
  "h1,h2,p": {
    color: "$bgContrast",
    transition: "color 0.5s ease",
  },

  "&[data-col]": {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
  },
});
