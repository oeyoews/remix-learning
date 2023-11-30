import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  // disable tailwind preset
  corePlugins: {
    preflight: false,
  },
} satisfies Config;
