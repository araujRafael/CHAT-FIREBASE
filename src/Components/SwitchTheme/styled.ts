import { styled, keyframes } from "../../themes/theme";
import * as SwitchPrimitive from "@radix-ui/react-switch";

export const Switch = SwitchPrimitive.Root;
export const Thumb = SwitchPrimitive.Thumb;

// keyframes
const slide = keyframes({
  "0%": { transform: "translateX(0)" },
  "100%": { transform: "translateX(30px)" },
});
const slideBack = keyframes({
  "0%": { transform: "translateX(30px)" },
  "100%": { transform: "translateX(0)" },
});

export const ThumbContent = styled(Thumb, {
  background: "linear-gradient($gradient)",
  width: "28px",
  height: "28px",
  border: "none",
  borderRadius: "50px",

  "&.on": {
    transform: "translateX(30px)",
    animation: `${slide} 500ms`,
  },
  "&.off": {
    animation: `${slideBack} 500ms`,
  },
});
export const SwitchContent = styled(Switch, {
  // background: "linear-gradient($gradient)",
  background: "$bg",
  width: "65px",
  height: "35px",
  border: "1px solid #bbb",
  borderRadius: "50px",
  display: "flex",
  alignItems: "center",
  padding: "2px",
  cursor: "pointer",

  "& [checked]": {
    background: "#009",
  },
});

export const WrapSwitch: any = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "10px",
});
