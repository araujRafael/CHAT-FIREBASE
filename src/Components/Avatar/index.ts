import { styled } from "../../themes/theme";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

export const Avatar = AvatarPrimitive.Root;
export const Image = AvatarPrimitive.Image;
export const Fallback = AvatarPrimitive.Fallback;

export const AvatarContainer = styled(Avatar, {
  background: "$bgShade",
  width: "45px",
  height: "45px",
  borderRadius: "38%",
  overflow: "hidden",
});
export const ImageContainer = styled(Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit",
});
export const FallbackContainer = styled(Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$accent",
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 600,
});
