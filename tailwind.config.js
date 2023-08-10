/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './mdxs/**/*.mdx'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      typography: () => ({
        DEFAULT: {
          css: {
            // color: theme('colors.gray.600')
          }
        },
        custom: {
          css: {
            a: {
              textDecoration: 'none',
              fontWeight: 400
            },
            blockquote: {
              fontSize: 15,
              fontWeight: 400
            }
          }
        }
      })
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
