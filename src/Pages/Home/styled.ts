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
  "@media (max-width:600px)": {
    zIndex: "99",
    position: "absolute",
    width: "-100%",
    padding: "$paddingMobile",
    transform: "translateX(-150%)",
    "&.open": {
      width: "100%",
      transform: "translateX(0)",
    },
  },
});

export const WrapButtonSideBar = styled("div", {
  // background: "$accent",
  width: "100%",
  height: "80px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  svg: {
    fill: "$bgContrast",
    width: "30px",
    height: "30px",
    cursor: "pointer",
  },
  ".close-icon": {
    display: "none",
  },
  ".name-header": {
    display: "none",
  },

  "@media (max-width:600px)": {
    justifyContent: "space-between",
    padding: "$paddingMobile",
    ".contact-icon": {
      display: "none",
    },
    ".close-icon": {
      display: "block",
    },
    ".name-header": {
      display: "block",
      fontSize: "1.5rem",
    },
  },
});
