module.exports = {
    plugins: [require('daisyui')],
    daisyui: {
        themes: [
          {
            light: {
              ...require("daisyui/src/theming/themes")["light"],
              "base-100": "#ffffff"
            },
          },
          {
            dark: {
              ...require("daisyui/src/theming/themes")["dark"],
              "base-100": "#0f172a"
            },
          },
        ]
    }
  };
  