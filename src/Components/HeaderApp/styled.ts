import { styled } from "../../themes/theme";

export const Header = styled("header", {
  // background: "#099",
  width: "100%",
  height: "80px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "15px",
  padding: "$paddingMobile",

  ".contactList-btn": {
    fill: "$bgContrast",
    width: "35px",
    height: "35px",
    marginLeft: "10px",
    "@media (min-width:600px)": {
      display: "none",
    },
  },
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
    top: "65px",
    color: "$bgContrast",
    visibility: "hidden",
    opacity: 0,
    boxShadow: "$shadow",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
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

export const SearchContainer = styled("div", {
  background: "$bgShade",
  width: "100%",
  // minWidth: "250px",
  height: "55%",
  borderRadius: "12px",
  boxSizing: "border-box",
  overflow: "hidden",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "10px",
  svg: {
    fill: "$bgContrast",
    minWidth: "22px",
    minHeight: "22px",
    cursor: "pointer",
  },
});
export const WrapIcon = styled("div", {
  minWidth: "45px",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
export const Input = styled("input", {
  background: "$bgShade",
  color: "$bgContrast",
  width: "100%",
  height: "100%",
  padding: "10px 20px",
  border: "none",
  "&:focus": {
    outline: "none",
  },
  "@media (max-width:650px)": {
    width: "80%",
  },
});

export const WrapSearch = styled("div", {
  width: "90%",
  height: "min-content",
  position: "relative",
  padding: "$paddingMobile",
});

export const ListUserContainer = styled("div", {
  background: "$bg",
  width: "100%",
  minWidth: "400px",
  maxWidth: "200px",
  height: "min-content",
  top: "50px",
  position: "absolute",
  borderRadius: "12px",
  boxShadow: "$shadow",
  boxSizing: "border-box",
  padding: "8px",
  "@media (max-width:650px)": {
    minWidth: "100vw",
    position: "fixed",
    top: "70px",
    left: 0,
  },
});

export const UserContainer = styled("div", {
  width: "100%",
  height: "100px",
  border: "$colorLow 1px solid",
  borderRadius: "12px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
});
export const WrapImage = styled("div", {
  // background: "$accent",
  height: "100%",
  width: "20%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
export const WrapName = styled("div", {
  // background: "$accent",
  height: "100%",
  width: "60%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "2px",
  // padding: "$paddingDefault",
  p: {
    color: "$bgContrast",
  },
  span: {
    color: "$colorLow",
    fontStyle: "italic",
  },
});
export const WrapAction = styled("div", {
  // background: "$accent",
  width: "20%",
  height: "100%",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-end",
});
