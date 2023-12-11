import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mystic': "url('/image/mystic.avif')",
        'clear': "url('/image/clear.jpg')",
        'deer': "url('/image/deer.jpg')",
        'bike': "url('/image/bike.jpg')",
        'paperCraft': "url('/image/paperCraft.jpeg')",
        'structure': "url('/image/structure.jpg')",
        'design': "url('/image/design.jpg')",
        'clouds': "url('/image/clouds.jpg')",
        'freelance': "url('/image/freelance.jpg')",
        'space': "url('/image/space.jpg')",
        'mountains': "url('/image/mountains.jpg')",
        'earth': "url('/image/earth.jpg')",
        'sphere': "url('/image/sphere.jpg')",
        'solo': "url('/image/solo.jpg')",
      },
    },
  },
  plugins: [],
}
export default config
