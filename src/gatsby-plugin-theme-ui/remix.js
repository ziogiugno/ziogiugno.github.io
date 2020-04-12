import baseTheme from "@joshkennedy00/gatsby-theme-blog-remix/src/gatsby-plugin-theme-ui";

export default {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    text: "#333",
    primary: "#000",
    background: "#1ca086",
    secondary: "#f347ff",
    modes: {
      dark: {
        text: "#fff",
        background: "#000",
        secondary: "#1ca086",
        heading: "#333"
      }
    }
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
    monospace: "Menlo, monospace"
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
};
