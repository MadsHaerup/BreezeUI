/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			gridTemplateColumns: {
				autofit: 'repeat(auto-fit, minmax(200px, 1fr))',
			},
		},
	},
	plugins: [],
};
