
module.exports = {
  content: ["./src/**/*.{js,svelte,html,ts,css}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        'alice-blue': '#F4FAFF',
        'maya-blue': '#7CC6FE',
        'rich-black-fogra': '#08090A',
        'cool-grey': '#8789C0',
      },
    }
  },
  plugins: [
    require("daisyui"),
  ],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}
