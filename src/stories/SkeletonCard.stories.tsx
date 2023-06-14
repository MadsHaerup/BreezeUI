import type { Meta, StoryObj } from '@storybook/react';
import SkeletonCard from '../components/skeleton/SkeletonCard';

const meta = {
	title: 'Components/Skeleton/SkeletonCard',
	component: SkeletonCard,

	tags: ['autodocs'],
	argTypes: {},
	parameters: {
		layout: 'fullscreen',
		controls: { expanded: true },
	},
} satisfies Meta<typeof SkeletonCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Card: Story = {
	args: {
		size: 'md',
		rows: 5,
	},
};
