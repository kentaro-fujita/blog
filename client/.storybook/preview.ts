import "../src/styles/globals.css";
import type { Preview } from "@storybook/react";
import { RouterContext } from "next/dist/shared/lib/router-context";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    nextRouter: {
      Provider: RouterContext.Provider,
    },
  },
};

export default preview;
