/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
export default withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    colors: {
      white:"#FFFFFF",
      primary: "#1637A2",
      secondary: "#FE6505",
      dark: "#2D2A2A",
      lightbrown: "#A69191",
      lightblue: "#18A0FB"
    }
  },
  plugins: [],
})

