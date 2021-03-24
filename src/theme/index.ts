const theme = {
  fonts: {
    regular: "Open Sans",
  },

  colors: {
    primary: "#e51e50",
    white: "#ffffff",
    grey: "#ededed",
    darkGrey: "#696969",
    danger: "red",
  },
  fontSizes: {
    base: "16px",
    h1: "2.5em",
    h2: "1.4em",
    h3: "1.2em",
    button: "0.9em",
  },
  ruler: Array.from({ length: 10 }, (_e, i) => i * 4),
  dimensions: {
    inputHeight: "44px",
    buttonHeight: "44px",
    button: {
      default: {
        height: "44px",
        padding: "0 25px",
      },
    },
  },
  breakPoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
  borderRadius: {
    default: "2px",
    large: "8px",
    button: "4px",
    input: "2px",
  },
};

export default theme;
