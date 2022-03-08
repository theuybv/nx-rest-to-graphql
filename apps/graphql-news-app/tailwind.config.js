const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

module.exports = {

  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname)
  ],
  theme: {
    extend: {
      // that is animation class
      animation: {
        fade: 'fadeOut 0.4s ease-out'
      },

      // that is actual animation
      keyframes: theme => ({
        fadeOut: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      })
    }
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/line-clamp')
  ]
};
