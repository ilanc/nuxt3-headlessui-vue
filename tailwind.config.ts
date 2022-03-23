import defaultTheme from "tailwindcss/defaultTheme";
import a from "@tailwindcss/forms";
import b from "@tailwindcss/typography";
import c from "@tailwindcss/line-clamp";
import d from "@tailwindcss/aspect-ratio";

export default {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [a, b, c, d],
};
