/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  // to process `url(/next.svg)` in `globals.css`
  // see: https://storybook.js.org/docs/react/configure/images-and-assets
  staticDirs: ["../public"],
  addons: [],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
};
export default config;
