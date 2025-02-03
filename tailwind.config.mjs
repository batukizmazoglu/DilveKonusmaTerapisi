/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: '#f5f7ed',
          100: '#e9eeda',
          200: '#d4ddb6',
          300: '#b8c48d',
          400: '#96a65b',
          500: '#7d8c4a',
          600: '#64713b',
          700: '#4b542c',
          800: '#32381d',
          900: '#191c0f',
        },
        secondary: {
          50: '#f7f9f2',
          100: '#eff2e5',
          200: '#dfe5cc',
          300: '#c9d3ad',
          400: '#b3bf88',
          500: '#9aa670',
          600: '#7d8659',
          700: '#5e6542',
          800: '#3f432c',
          900: '#1f2216',
        },
        accent: {
          50: '#fefbea',
          100: '#fdf7d5',
          200: '#f9edaa',
          300: '#f6e47f',
          400: '#f2d43d',
          500: '#d9bc36',
          600: '#ac962b',
          700: '#7f7020',
          800: '#544b15',
          900: '#2a250b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              color: 'var(--tw-prose-links)',
              '&:hover': {
                color: 'var(--tw-prose-links-hover)',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
