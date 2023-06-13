import type { Meta, StoryObj } from '@storybook/react';
import Widget from '../components/widget/index';

const meta = {
	title: 'Components/Widget/Widget Item',
	component: Widget.Item,

	tags: ['autodocs'],
	argTypes: {},
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Widget.Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		height: 'h-80',
		width: 'w-80',
		tailwindCSS:
			'bg-gradient-to-r from-white to-slate-100 dark:bg-gradient-to-r dark:from-neutral-900 dark:to-zinc-800;',
	},
	render: args => <Widget.Item {...args} />,
};
