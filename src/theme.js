import { createTheme } from "@mui/material/styles";

// Подробнее о цветах Apple см. здесь:
// https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/color/

const cupertinoTheme = createTheme({
  palette: {
    primary: {
      // System Blue
      main: "#007AFF",
    },
    secondary: {
      // System Indigo
      main: "#5856D6",
    },
    background: {
      // Светлый фон в стиле iOS
      default: "#F5F5F7",
    },
    text: {
      // Основной цвет текста ближе к iOS
      primary: "#1C1C1E",
      // Вторичный цвет текста, немного светлее
      secondary: "#8E8E93",
    },
  },
  typography: {
    // Системные шрифты Apple + fallback
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      "SF Pro Text",
      "SF Pro Display",
      "Helvetica Neue",
      "Arial",
      "sans-serif",
    ].join(", "),
    h4: {
      fontSize: "2rem",
      fontWeight: 600,
      color: "#1C1C1E",
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: 500,
      color: "#3A3A3C",
    },
    body1: {
      fontSize: "1rem",
      color: "#1C1C1E",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          // Радиус и тень, похожие на карточки в iOS
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          padding: "16px",
        },
      },
    },
  },
});

export default cupertinoTheme;
