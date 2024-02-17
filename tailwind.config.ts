module.exports = {
    plugins: [require('daisyui')],
    daisyui: {
        themes: [
          {
            light: {
              ...require("daisyui/src/theming/themes")["light"],
              "base-100": "#ffffff",  // backgrounds
              "base-content": "#1f2937",
              "primary-content": "#ffffff",  // text
              "primary": "#1A67D7" // AbandonTech Blue
            },
          },
          {
            dark: {
              ...require("daisyui/src/theming/themes")["dark"],
              "base-100": "#1f2937",  // backgrounds
              "base-content": "#ffffff",
              "primary-content": "#ffffff",  // text
              "primary": "#1A67D7"  // AbandonTech Blue
            },
          },
        ]
    }
  };
  