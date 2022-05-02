module.exports = {
  content: ["./src/**/*.{tsx,jsx,mdx,ts}"],
  theme: {
    extend: {
      colors: {
        'primary': '#006AE5',
        'secondary': '#16a48b',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
