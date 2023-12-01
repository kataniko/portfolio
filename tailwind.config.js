/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        "10xl": "10rem",
        "11xl": "12rem",
        "12xl": "13rem",
        "13xl": "14rem",
        // Add more custom text sizes if needed
      },
      margin: {
        251: "227px",
        335: "335px",
        // Add more custom margin utilities if needed
      },
    },
  },
  plugins: [],
};
