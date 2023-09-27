import plugin from 'tailwindcss/plugin';

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/views/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    // MEDIA QUERIES
    screens: {
      md: '744px',
      xl: '1280px',

      smOnly: { max: '743.98px' },
      mdOnly: { min: '744px', max: '1279.98px' },
      mediaHover: { raw: '(hover: hover)' },
    },

    boxShadow: {
      button: '0px 0px 35px 0px #AB40FF',
      input: '0px 5.36364px 25.47727px 0px rgba(171, 64, 255, 0.46)',
    },

    extend: {
      fontFamily: {
        open_sans: ['var(----font-open-sans)'],
        dela_gothic: ['var(--font-dela-gothic)'],
      },
      fontSize: {
        xs: ['12px', '1.27'],

        s_small: ['16px', '1.4'],
        s_middle: ['16px', '1.5'],
        s_big: ['16px', '1.6'],

        l: ['18px', '1.4'],
        l_small: ['18px', '1.27'],
        l_middle: ['18px', '1.5'],
        l_big: ['18px', '1.6'],

        xl_mobile_small: ['20px', '1.27'],
        xl_mobile: ['20px', '1.4'],

        xxl: ['32px', '1.4'],
        xxl_small: ['24px', '1.5'],
        xxl_middle: ['30px', '1.2'],
        xxl_big: ['30px', '1.4'],

        timer_small: ['32px', '1.2'],
        timer: ['39px', '1.2'],

        xxxl_small: ['48px', '1.2'],
        xxxl_middle: ['48px', '1.44'],
        xxxl_big: ['60px', '1.2'],
      },
      // text-shadow
      textShadow: {
        text: '0px 0px 14.859999656677246px rgba(171, 64, 255, 0.92)',
        title: '0px 0px 12.859999656677246px #FF00C7',
      },
      colors: {
        body: '#131313',
        black: {
          base: '#1F1F1F',
          middleL: '#40455F',
          light: '#141414',
        },
        white: '#FFF',
        purple: {
          base: '#8430AC',
          middle: '#B454FF',
          light: '#AB40FF',
        },

        grey: '#D3D3D3',
      },
      backgroundImage: {
        grad_100:
          'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)',
        grad_200:
          'linear-gradient(0deg, rgba(20, 20, 20, 0.49) 29.34%, rgba(20, 20, 20, 0.00) 43.69%)',
      },
      // CONTAINER
      container: {
        center: true,
        padding: {
          DEFAULT: '16px',
          md: '32px',
          xl: '50px',
        },
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': value => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') },
      );
    }),
  ],
};
export default config;
