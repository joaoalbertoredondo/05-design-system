import * as Toast from "@radix-ui/react-toast";
import { keyframes, styled } from "../../styles";

const hide = keyframes({
  "0%": { opacity: 1 },
  "100%": { opacity: 0 },
});

const slideIn = keyframes({
  from: {
    transform: "translateX(calc(100% + 25px))",
  },
  to: {
    transform: "translateX(0)",
  },
});

const swipeOut = keyframes({
  from: {
    transform: "var(--radix-toast-swipe-end-translate-x)",
  },
  to: {
    transform: "translateX(calc(100% + 25px))",
  },
});

export const ToastContainer = styled(Toast.Provider, {});

export const ToastRoot = styled(Toast.Root, {
  "&[data-state=open]": {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  "&[data-state=closed]": {
    animation: `${hide} 150ms ease-in`,
  },

  '&[data-swipe="move"]': {
    transform: "translateX(var(--radix-toast-swipe-move-x))",
  },
  '&[data-swipe="cancel"]': {
    transform: "translateX(0)",
    transition: "transform 200ms ease-out",
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },

  backgroundColor: "$gray800",
  padding: 15,
  borderRadius: "$md",
  border: "1px solid $gray600",
  maxWidth: "20rem",
  position: "relative",
});

export const ToastTitle = styled(Toast.Title, {
  color: "$white",
  fontSize: "$xl",
  fontWeight: "$bold",
  lineHeight: "$base",
  fontFamily: "$default",
});

export const ToastDescription = styled(Toast.Description, {
  color: "$gray200",
  fontSize: "$sm",
  lineHeight: "$base",
  fontFamily: "$default",
});

export const ToastClose = styled(Toast.Close, {
  all: "unset",

  color: "$gray200",
  cursor: "pointer",

  position: "absolute",
  top: "$4",
  right: "$4",

  "&:hover": {
    color: "$white",
    transition: "color 0.3s",
  },
});

export const ToastViewport = styled(Toast.Viewport, {
  position: "fixed",
  bottom: 0,
  right: 0,
  display: "flex",
  flexDirection: "column",
  padding: 25,
  gap: 10,
  width: 390,
  maxWidth: "100vw",
  margin: 0,
  listStyle: "none",
  zIndex: 1000,
  outline: "none",
});
