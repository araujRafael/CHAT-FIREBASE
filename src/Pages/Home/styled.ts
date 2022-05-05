import { styled } from "../../themes/theme";

export const MainContent = styled("div", {
  // background: "#009",
  width: "100%",
  height: "calc(100vh)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
});

export const AsideBar = styled("div", {
  background: "$bgShade",
  minWidth: "100px",
  height: "calc(100vh)",
  transition: "all 0.5s ease",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

export const WrapButtonSideBar = styled("div", {
  // background: "$accent",
  width: "100%",
  height: "80px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  svg: {
    fill: "$bgContrast",
    width: "30px",
    height: "30px",
    cursor: "pointer",
  },
});
