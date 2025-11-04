/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        farm: {
          green: '#3B7A57', // deep natural green
          light: '#A8D5BA', // soft pastel green
          brown: '#8B5E3C', // earthy brown
          beige: '#F5E9DA', // background beige tone
          cream: '#FFF8ED', // light cream for cards
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Nunito', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        blob: '40% 60% 55% 45% / 55% 45% 60% 40%', // organic blob feel
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        fadeInUp: 'fadeInUp 1s ease-out forwards',
      },
      boxShadow: {
        soft: '0 8px 20px rgba(59, 122, 87, 0.15)', // soft green glow
      },
    },
  },
  plugins: [],
};
