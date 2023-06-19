import type { Meta, StoryObj } from '@storybook/react';
import SkeletonItem from '../components/skeleton/SkeletonItem';

const meta = {
	title: 'Feedback/Skeleton/SkeletonItem',
	component: SkeletonItem,

	tags: ['autodocs'],
	argTypes: {},
	parameters: {
		layout: 'centered',
		controls: { expanded: true },
	},
} satisfies Meta<typeof SkeletonItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OneItem: Story = {
	args: {
		height: 'h-6',
		width: 'w-80',
		tailwindCSS: 'rounded-md',
	},
};

export const ManyItems: Story = {
	args: {
		height: 'h-4',
		width: 'w-80',
		tailwindCSS: 'rounded-md',
	},
	render: args => (
		<div className="grid gap-2">
			{Array.from({ length: 4 }).map((_, i) => (
				<SkeletonItem tailwindCSS="rounded-md" width={args.width} height={args.height} key={i} />
			))}
		</div>
	),
};
