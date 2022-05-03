import { styled } from "../../themes/theme";

export const ButtonContainer = styled("button", {
  background: "linear-gradient($gradient)",
  width: "min-content",
  color: "$accentContrast",
  padding: "5px 15px",
  border: "none",
  borderRadius: "50px",
  cursor: "pointer",
  fontSize: "1.2rem",
  fontWeight: "bolder",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 0 4px 2px rgba(0,0,0,0.2)",
  },
});
