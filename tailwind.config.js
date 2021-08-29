module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      "2xl": { min: "1536px" },
      // => @media (min-width: 1535px) { ... }
      "xl": { min: "1280px" },
      // => @media (min-width: 1279px) { ... }
      "lg": { min: "1024px" },
      // => @media (min-width: 1023px) { ... }
      "md": { min: "768px" },
      // => @media (min-width: 767px) { ... }
      "sm": { min: "640px" },
      // => @media (min-width: 639px) { ... }
      "2xl-max": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
      "xl-max": { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
      "lg-max": { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
      "md-max": { max: "767px" },
      // => @media (max-width: 767px) { ... }
      "sm-max": { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      height: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
