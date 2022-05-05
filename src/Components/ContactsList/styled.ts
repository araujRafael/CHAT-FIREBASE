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
});
export const UserComponent = styled("div", {
  width: "min-content",
  height: "min-content",
  display: "flex",
  cursor: "pointer",
  borderRadius: "20px",
  "&:hover": {
    boxShadow: "$hiShadow",
  },
});
