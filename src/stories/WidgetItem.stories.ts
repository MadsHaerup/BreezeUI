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

export const Default: Story = {
	args: {
		height: 'h-80',
		width: 'w-80',
	},
};
