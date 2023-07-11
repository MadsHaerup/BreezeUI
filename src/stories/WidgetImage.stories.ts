import type { Meta, StoryObj } from '@storybook/react';
import Widget from '../components/widget/index';

const meta = {
	title: 'Components/Widget/Widget Image',
	component: Widget.Image,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Widget.Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Original: Story = {
	args: {
		filter: false,
		backgroundImage: 'src/stories/assets/colors.svg',
		height: 'h-80',
		width: 'w-80',
		tailwindCSS:
			'bg-gradient-to-r from-white to-slate-100 dark:bg-gradient-to-r dark:from-neutral-900 dark:to-zinc-800;',
	},
};

export const Filter: Story = {
	args: {
		filter: true,
		backgroundImage: 'src/stories/assets/colors.svg',
		height: 'h-80',
		width: 'w-80',
		tailwindCSS:
			'bg-gradient-to-r from-white to-slate-100 dark:bg-gradient-to-r dark:from-neutral-900 dark:to-zinc-800;',
	},
};
