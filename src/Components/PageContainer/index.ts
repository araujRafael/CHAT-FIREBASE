import { styled } from "../../themes/theme";

export const PageContainer = styled("div", {
  background: "$bg",
  width: "100%",
  height: "100vh",

  "h1,h2,p": {
    color: "$bgContrast",
  },

  "&[col]": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});
