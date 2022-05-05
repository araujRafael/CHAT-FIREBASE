import { styled } from "../../themes/theme";

const HeaderSize = 80;
const MessageContainer = 115;

export const ContentContainer = styled("div", {
  // background: "#900",
  width: "100%",
  minHeight: `calc(100vh - ${HeaderSize}px)`,
});
export const ContentHeader = styled("div", {
  // background: "#999",
  width: "100%",
  minHeight: "65px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "10px",
  padding: "$paddingDefault",
  "@media (max-width:600px)": {
    padding: "$paddingMobile",
  },
});

export const FormMessageContainer = styled("form", {
  // background: "#990",
  width: "100%",
  minHeight: `min-content`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-end",
});
export const SendMessageContainer = styled("div", {
  // background: "$accent",
  width: "100%",
  minHeight: `${MessageContainer}px`,
  height: "min-content",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "10px",
  padding: "5px 1vw",
  boxSizing: "border-box",
  "@media (max-width:600px)": {
    padding: "$paddingMobile",
  },
});
export const Textarea = styled("textarea", {
  background: "$bgShade",
  border: "none",
  borderRadius: "25px",
  color: "$bgContrast",
  width: "100%",
  maxWidth: "calc(100vw - 200px)",
  minWidth: "calc(100vw - 200px)",
  minHeight: "80px",
  maxHeight: "80px",
  height: "100%",
  padding: "5px 20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "1.2rem",
  boxSizing: "border-box",
  "&:focus": {
    outline: "none",
    border: "none",
    boxShadow: "$shadow",
  },
  "@media (max-width:600px)": {
    maxWidth: "100vw",
  },
});

export const ViewMessages = styled("ul", {
  // background: "$accent",
  width: "100%",
  height: `calc(100vh - ${MessageContainer * 2.26}px)`,
  display: "flex",
  flexDirection: "column-reverse",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "15px",
  padding: "12px 0",
  overflowY: "scroll",
});
export const WrapMessage = styled("div", {
  background: "$bgShade",
  padding: "8px 12px",
  borderRadius: "12px",
  minWidth: "45%",
  height: "min-content",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  span: {
    color: "$colorLow",
    fontSize: "0.9rem",
  },
});
export const UserMessage = styled("li", {
  // background: "$accent",
  width: "100%",
  height: "min-content",
  padding: "0 12px",
  display: "flex",
  "&.myMessage": {
    justifyContent: "flex-end",
    [`& ${WrapMessage}`]: {
      background: "linear-gradient($gradient)",
      span: {
        color: "$bg",
      },
    },
  },
});
