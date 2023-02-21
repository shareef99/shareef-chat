/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        p: {
          "dark-green": "var(--dark-green)",
          "light-green": "var(--light-green)",
          yellow: "var(--yellow)",
          red: "var(--red)",
          gray: "var(--gray)",
          white: "var(--white)",
          black: "var(--black)",
          "light-black": "var(--light-black)",
        },
        primary: "var(--primary)",
        "primary-monochrome": "var(--primary-monochrome)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
