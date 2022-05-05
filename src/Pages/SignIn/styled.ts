import { styled } from "../../themes/theme";

export const Wrapper = styled("div", {
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
});

export const GoogleButton = styled("button", {
  background: "#fff",
  minWidth: "100px",
  padding: "15px 20px",
  border: "none",
  borderRadius: "6px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  cursor: "pointer",
  fontSize: "1.2rem",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "$shadow",
  },
  svg: {
    width: "25px",
    height: "25px",
  },
});
