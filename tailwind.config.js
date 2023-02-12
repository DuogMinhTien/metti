module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-sans)'
      },
      backgroundColor: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        grey: 'var(--grey-text)',
        'ligth-gray': 'var(--light-gray)',
        'green-base': 'var(--green-base)'
      },
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        greyText: 'var(--grey-text)',
        'green-base': 'var(--green-base)'
      },
      maxWidth: {
        'screen-xl': '1413px',
        'screen-2xl': '1660px'
      },
      fontSize: {
        8: ['0.5rem', '0.58625rem'],
        10: ['0.625rem', '0.75rem'],
        17: ['1.0625rem', '1.25rem'],
        19: ['1.1875rem', '1.75rem'],
        25: ['1.5625rem', '1,875rem'],
        28: ['1.75rem', '2.1875rem'],
        40: ['2.5rem', '3,125rem']
      },
      flex: {
        '1/2': '0 0 calc(50% - 10px)',
        '1/3': '0 0 calc(33.333% - 10px)'
      },
      boxShadow: {
        base: '0px 2px 10px var(--box-shadow)',
        second: '0px 2px 10px var(--box-shadow-2)'
      },
      padding: {
        '4/7': '56%',
        '2/7': '28%',
        '3/4': '75%'
      },
      borderRadius: {
        '4xl': '2.5rem'
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
};
