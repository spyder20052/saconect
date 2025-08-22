import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        saco: {
          blue: '#131D68',
          turquoise: '#1BDEDE',
          yellow: '#F8C630',
          orange: '#FF6542',
          gray: '#DDDDDD',
          light: '#F0F5FC',
        },
      },
      fontFamily: {
        rubik: ['var(--font-rubik)'],
      },
    },
  },
  plugins: [],
}
export default config