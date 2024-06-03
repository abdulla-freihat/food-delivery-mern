/** @type {import('tailwindcss').Config} */
export default {
	content: [
	  "./index.html",
	  "./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  extend: {
		animation: {
		  fade: 'fadeIn 1s ease-in-out',
		  rotate: 'rotate 1s infinite linear',
		},
		keyframes: {
		  fadeIn: {
			from: { opacity: 0 },
			to: { opacity: 1 },
		  },
		  rotate: {
			'0%': { transform: 'rotate(0deg)' },
			'100%': { transform: 'rotate(360deg)' },
		  },
		},
	  },
	},
	plugins: [],
  }
  