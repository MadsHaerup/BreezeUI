import type { Meta, StoryObj } from '@storybook/react';
import Widget from '../components/widget/index';

const meta = {
	title: 'Widget/Widget Item',
	component: Widget.Item,

	tags: ['autodocs'],
	argTypes: {},
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Widget.Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		tailwindCSS: 'h-80 w-80',
	},
};
