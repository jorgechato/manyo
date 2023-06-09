const colors = require('tailwindcss/colors')


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      md: '800px',
    },
    extend: {
      fontFamily: {
        logo: ['logo', 'var(--font-display)'],
        h1: ['h1', 'var(--font-display)'],
      },
      colors: {
        bg: 'var(--colors-bg)',
        accent: 'var(--colors-accent)',
        body: 'var(--colors-body)',
        headings: 'var(--colors-headings)',
        primary: 'var(--colors-primary)',
        'primary-light': 'var(--colors-primary-light)',
        'primary-lightest': 'var(--colors-primary-lightest)',
        secondary: 'var(--colors-secondary)',
        tertiary: 'var(--colors-tertiary)',
        quaternary: 'var(--colors-quaternary)',
        black: 'var(--colors-black)',
        white: 'var(--colors-white)',
        'active-link': 'var(--colors-active-link)',
        grey: {
          lightest: 'var(--colors-grey-lightest)',
          light: 'var(--colors-grey-light)',
          medium: 'var(--colors-grey-medium)',
          dark: 'var(--colors-grey-dark)',
          darker: 'var(--colors-grey-darker)',
          darkest: 'var(--colors-grey-darkest)',
        },
        code: {
          bg: 'var(--colors-code-bg)',
          color: 'var(--colors-code)',
        }
      },
      borderColor: (theme) => ({
        default: theme('colors.grey-light'),
      }),
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '*,*::before,*::after': {
              borderColor: theme('colors.grey.light'),
            },
            color: theme('colors.body'),
            h1: {
              color: theme('colors.headings'),
              fontSize: theme('fontSize.2xl'),
              fontWeight: theme('fontWeight.medium'),
            },
            h2: {
              color: theme('colors.headings'),
              fontSize: theme('fontSize.xl'),
              fontWeight: theme('fontWeight.medium'),
            },
            h3: {
              color: theme('colors.headings'),
              fontSize: theme('fontSize.lg'),
              fontWeight: theme('fontWeight.medium'),
            },
            h4: {
              color: theme('colors.headings'),
              fontSize: theme('fontSize.base'),
              fontWeight: theme('fontWeight.medium'),
            },
            h5: {
              color: theme('colors.headings'),
              fontSize: theme('fontSize.sm'),
              fontWeight: theme('fontWeight.medium'),
            },
            h6: {
              color: theme('colors.headings'),
              fontSize: theme('fontSize.sm'),
              fontWeight: theme('fontWeight.medium'),
            },
            'ul > li::before': {
              content: '""',
              position: 'absolute',
              backgroundColor: theme('colors.grey.dark'),
              borderRadius: '50%',
            },
            a: {
              color: theme('colors.current'),
              fontWeight: theme('fontWeight.medium'),
              textDecoration: 'underline',
              textDecorationColor: theme('colors.grey.light'),
              textDecorationThickness: '3px',
              transitionProperty: 'all',
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
              transitionDuration: '300ms',
              '&:hover': {
                textDecorationColor: theme('colors.accent'),
                textUnderlineOffset: '4px',
              },
            },
            pre: {
              backgroundColor: theme('colors.code.bg'),
              color: theme('colors.body'),
              fontFamily: theme('fontFamily.mono'),
            },
            'pre code': {
              fontSize: theme('text.sm'),
            },
            '.nohighlight': {
              backgroundColor: theme('colors.code.bg'),
              color: theme('colors.code.color'),
              padding: '0.2rem',
              borderRadius: '3px',
            },
            code: {
              color: theme('colors.body'),
              fontFamily: theme('fontFamily.mono'),
            },
            strong: {
              color: theme('colors.body'),
              fontWeight: theme('fontWeight.medium'),
            },
            thead: {
              borderBottomColor: theme('colors.grey.light'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.grey.light'),
              },
            },
            figure: {
              figcaption: {
                color: theme('colors.grey.darkest'),
                fontFamily: theme('fontFamily.display'),
              },
            },
            blockquote: {
              color: theme('colors.grey.darkest'),
            },
          },
        },
      }),
    },
  },
  variants: {
    borderStyle: ['responsive', 'hover', 'focus'],
    display: ['dark', 'responsive'],
    opacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    scale: ['responsive', 'hover', 'focus', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    translate: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
