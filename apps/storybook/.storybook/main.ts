import type { StorybookViteConfig } from '@storybook/builder-vite';

const config: StorybookViteConfig = {
  stories: [
    "../stories/*.stories.@(ts|mdx)"
  ],
  addons: [
    "@storybook/addon-essentials"
  ],
  framework: "@storybook/vue3",
  core: {
    "builder": "@storybook/builder-vite"
  },
  async viteFinal(config, options) {
    // modify and return config

    return config;
  },
};

export default config;
