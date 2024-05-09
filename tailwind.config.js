/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FDD700",
        secondary: "#080C09",
        secondaryLight: "rgba(8, 12, 9, 0.8)",
        grayCloud: "#CCCBCA",
        blackOverlay: "rgba(0, 0, 0, 0.7)",
        lightGrey: "#B3B3B3",
        lightBlue: "#FCFAFF",
        forBorder: "#EFE5FF",
      },
      fontFamily: {
        ManropeBold: ["Manrope-Bold", "sans"],
        ManropeEB: ["Manrope-ExtraBold", "sans"],
        ManropeEL: ["Manrope-ExtraLight", "sans"],
        ManropeLight: ["Manrope-Light", "sans"],
        ManropeMedium: ["Manrope-Medium", "sans"],
        ManropeRegular: ["Manrope-Regular", "sans"],
        ManropeSB: ["Manrope-SemiBold", "sans"],
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
  plugins: [],
};
