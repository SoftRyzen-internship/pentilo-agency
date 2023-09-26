import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/views/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    // THEME
    extend: {
      // ALL COLORS
      colors: {
        body: '#131313',
      },
      // CONTAINER
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
export default config;
