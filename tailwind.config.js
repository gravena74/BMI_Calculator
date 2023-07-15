/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        "100vw": "100vw",
        "70vw": "70vw",
        "50vw": "50vw",
      },

      height: {
        "100vh": "100vh",
        "60vh": "60vh",
        "50vh": "50vh"
      },

      backgroundColor: {
        "fundo": "#D7DAE5",
        "conteiner": "#A6D8D4",
        "button": "#8EAF9D"
      }
    },
  },
  plugins: [],
}