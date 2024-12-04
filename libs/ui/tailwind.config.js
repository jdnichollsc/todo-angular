const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

const defaultTheme = require('tailwindcss/defaultTheme');
const forms = require('@tailwindcss/forms');
const typography = require('@tailwindcss/typography');
const aspectRatio = require('@tailwindcss/aspect-ratio');
const daisyui = require('daisyui');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    forms,
    typography,
    aspectRatio,
    daisyui,
  ],
};
