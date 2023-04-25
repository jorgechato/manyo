import "../src/components/styles/globals.css";
import "../src/components/styles/font.css";

import type { Preview } from "@storybook/react";


export const parameters = { layout: 'fullscreen' };

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  globalTypes: {
    darkMode: {
      defaultValue: true,
    },
  },
};

export default preview;
