import type { StorybookConfig } from '@storybook/angular';
import * as path from 'path';

const config: StorybookConfig = {
  stories: ['../**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling-webpack', // Changed from addon-styling-webpack
      options: {
        postCss: true
      },
    },
  ],
  framework: {
    name: '@storybook/angular',
    options: {
      builder: {
        viteConfigPath: '../vite.config.mts',
      },
    },
  },
  staticDirs: ['../src/styles'],
};

export default config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/recipes/storybook/custom-builder-configs
