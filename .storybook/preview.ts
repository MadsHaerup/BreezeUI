import '../src/index.css';
import type { Preview } from '@storybook/react';

const preview: Preview = {
	globalTypes: {
		darkMode: {
			defaultValue: true, // Enable dark mode by default on all stories
		},
		// Optional (Default: 'dark')
		className: {
			defaultValue: 'dark', // Set your custom dark mode class name
		},
	},
};

export default preview;
