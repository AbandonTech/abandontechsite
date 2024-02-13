module.exports = {
    plugins: [require('daisyui')],
    daisyui: {
        themes: [
          {
            light: {
              ...require("daisyui/src/theming/themes")["light"],
              "base-100": "#ffffff",  // backgrounds
              "primary-content": "#ffffff",  // text
              "primary": "#1A67D7"
            },
          },
          {
            dark: {
              ...require("daisyui/src/theming/themes")["dark"],
              "base-100": "#1f2937",  // backgrounds
              "primary-content": "#ffffff",  // text
              "primary": "#1A67D7"
            },
          },
        ]
    }
  };
  