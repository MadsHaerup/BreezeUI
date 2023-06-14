/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	safelist: [{ pattern: /^gap-/ }, { pattern: /^space-x-\d+$/ }, { pattern: /^space-y-\d+$/ }],
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
