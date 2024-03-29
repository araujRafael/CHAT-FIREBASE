import { styled } from "../../themes/theme";

export const ContactListContainer = styled("div", {
  // background: "$accent",
  width: "100%",
  height: "calc(100vh - 80px)",
  padding: "10px 0px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "20px",
  overflowY: "scroll",
  "@media (max-width:600px)": {
    alignItems: "center",
  },
});
export const InfosUser = styled("div", {
  display: "none",
  "@media (max-width:600px)": {
    "&.open": {
      display: "block",
      padding: "$paddingMobile",
      span: {
        color: "$colorLow",
      },
    },
  },
});

export const UserComponent = styled("div", {
  // background: "$accent",
  width: "min-content",
  height: "min-content",
  display: "flex",
  cursor: "pointer",
  borderRadius: "20px",
  position: "relative",
  "&:hover": {
    boxShadow: "$hiShadow",
    [`${InfosUser}`]: {
      display: "block",
      // background: "$colorHigh",
      boxShadow: "$shadow",
      position: "fixed",
      left: "85px",
      padding: "0",
      borderRadius: "12px",
      span: {
        color: "$colorLow",
      },
      "@media (min-width:600px)": {
        background: "$bg",
        padding: "5px",
      },
    },
  },
  "@media (max-width:600px)": {
    width: "95%",
    borderRadius: "none",
    padding: "5px ",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
