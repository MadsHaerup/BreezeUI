export const theme = {
	light: {
		baseStyle: 'text-slate-950 bg-slate-100',
		components: {
			skeleton: { styleSheet: { style: 'bg-gradient-to-r from-white to-slate-100' } },
			widget: { styleSheet: { style: 'bg-gradient-to-r from-white to-slate-100' } },
			pagination: { styleSheet: { style: 'bg-white text-gray-700', active: 'bg-blue-200 font-bold' } },
		},
	},
	dark: {
		baseStyle: 'text-white bg-slate-950',
		components: {
			widget: { styleSheet: { style: 'dark:bg-gradient-to-r dark:from-neutral-900 dark:to-zinc-800' } },
			skeleton: { styleSheet: { style: 'dark:bg-gradient-to-r dark:from-neutral-900 dark:to-zinc-800' } },
			pagination: { styleSheet: { style: 'dark:bg-zinc-800 text-white', active: 'dark:bg-neutral-500' } },
		},
	},
};
