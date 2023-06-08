import type { Meta, StoryObj } from '@storybook/react';
import Widget from '../components/widget/index';

const meta = {
	title: 'BreezeUI/Widget with background image',
	component: Widget.Image,
	tags: ['autodocs'],
	argTypes: {},
	parameters: {
		layout: 'fullscreen',
	},
} satisfies Meta<typeof Widget.Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Original: Story = {
	args: {
		filter: false,
		backgroundImage: '',
	},
};

export const Filter: Story = {
	args: {
		filter: true,
		backgroundImage: '',
	},
};
