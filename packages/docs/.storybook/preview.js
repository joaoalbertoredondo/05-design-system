import { themes } from '@storybook/theming'

export const parameters = {
  actions: { ArgTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },

  docs: {
    theme: themes.dark
  }
};

