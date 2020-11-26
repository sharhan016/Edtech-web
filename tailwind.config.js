module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: "#2AB0B0",
      },
      spacing: {
        18: "4.5rem",
        "2/3": "66.666667%",
        "1/2": "55%",
        // "4/10": "40%",
        34: "30%",
        35: "35%",
        // 35: "3%",
        37: "39%",
        100: "100%",
      },
      fontSize: {
        "1xl": ["1.375rem", { lineHeight: "1.75rem" }],
        "2.5xl": ["1.750rem", { lineHeight: "2.125rem" }],
        "4.5xl": ["2.5rem", { lineHeight: "2.750rem" }],
        "5.5xl": ["3.5rem", { lineHeight: "1" }],
      },
      lineHeight: {
        11: "2.625rem",
      },
      width: {
        30: "31%",
        "1/6": "16.666667%",
        "1/9": "11.111111%",
        "1/8": "12.500000%",
        "1/10": "10%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
