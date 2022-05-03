import { styled } from "../../themes/theme";

export const Header = styled("header", {
  // background: "#099",
  width: "100%",
  height: "80px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "$paddingDefault",
});

export const WrapOptions = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "20px",
});

export const Wrapper = styled("div", {
  width: "45px",
  height: "45px",
  display: "flex",
  position: "relative",
  transition: "all 0.5s ease",
  cursor: "pointer",

  ".options": {
    transition: "all 0.5s ease",
    background: "$bgShade",
    borderRadius: "12px",
    padding: "15px 20px",
    position: "absolute",
    right: "0",
    bottom: "-65px",
    color: "$bgContrast",
    visibility: "hidden",
    opacity: 0,
    boxShadow: "$shadow",
    span: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
  },
  "&:hover": {
    ".options": {
      visibility: "visible",
      opacity: 1,
    },
  },
});
