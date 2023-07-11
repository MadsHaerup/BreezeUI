import type { Meta, StoryObj } from '@storybook/react';
import Masonry from '../components/masonry/Masonry';
import { MasonFetcher } from '../components/masonry/MasonFetch';

const meta = {
	title: 'Layout/Masonry/Masonry',
	component: Masonry,
	tags: ['autodocs'],
	parameters: {
		layout: 'full',
	},
} satisfies Meta<typeof Masonry>;

export default meta;
type Story = StoryObj<typeof meta>;

const results = MasonFetcher();

export const Primary: Story = {
	render: args => <Masonry images={args.images} />,
	args: {
		images: results,
	},
};
