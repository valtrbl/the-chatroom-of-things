module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        $cyan: "#05c3db",
        $red: "#fb2d05",
        $black: "#1d1d1b",
      },
      fontFamily: {
        $ocr: "ocr-a-std, monospace",
        $roc: "roc-grotesk, sans-serif",
      },
      dropShadow: {
        "$red-sm": "2.5px 2.5px 0px #fb2d05",
        "$red-md": "10px 10px 0px #fb2d05",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  variants: {
    extend: {
      width: ["group-hover", "group-focus"],
      height: ["group-hover", "group-focus"],
    },
  },
  plugins: [],
};
