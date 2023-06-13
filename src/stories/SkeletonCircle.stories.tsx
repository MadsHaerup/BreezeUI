import type { Meta, StoryObj } from '@storybook/react';
import SkeletonCircle from '../components/skeleton/SkeletonCircle';

const meta = {
	title: 'Components/Skeleton/SkeletonCircle',
	component: SkeletonCircle,
	tags: ['autodocs'],
	argTypes: {},
	parameters: {
		layout: 'centered',
		controls: { expanded: true },
	},
} satisfies Meta<typeof SkeletonCircle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
	args: {
		size: 'sm',
	},
};

export const Medium: Story = {
	args: {
		size: 'md',
	},
};

export const Large: Story = {
	args: {
		size: 'lg',
	},
};
