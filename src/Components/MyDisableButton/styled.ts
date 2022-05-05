import { styled } from "../../themes/theme";

export const ButtonContainer = styled("button", {
  background: "$colorLow",
  width: "min-content",
  color: "$accentContrast",
  padding: "5px 15px",
  border: "none",
  borderRadius: "50px",
  fontSize: "1.2rem",
  fontWeight: "bolder",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
