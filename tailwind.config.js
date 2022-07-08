/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mainGradient: '#e7e7e7',
        white: '#ffffff',
        brandOrange: '#f97537',
      },
      spacing: {
        3.5: '0.875rem',
        3.75: '0.9375rem',
        15: '3.75rem',
      },
      gridTemplateColumns: {
        autoFill: 'repeat(auto-fill, minmax(60px, 1fr))',
        autoFillMd: 'repeat(auto-fill, minmax(80px, 1fr))',
      },
      boxShadow: {
        matrix: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      borderRadius: {
        matrix: '0.6875rem',
      },
      borderWidth: {
        0.5: '0.5px',
      },
      fontSize: {
        flagCaption: [
          '9px',
          {
            lineHeight: '8px',
          },
        ],
        buttonText: [
          '12px',
          {
            lineHeight: '13px',
          },
        ],
      },
    },
  },
  plugins: [],
};
