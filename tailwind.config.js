module.exports = {
  // content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}"],
  plugins: [
    // require('@tailwindcss/typography'),
    require("daisyui"),
  ],
};
