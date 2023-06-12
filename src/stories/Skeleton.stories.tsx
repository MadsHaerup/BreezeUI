import type { Meta, StoryObj } from '@storybook/react';
import Skeleton from '../components/skeleton/Skeleton';
import SkeletonItem from '../components/skeleton/SkeletonItem';

const meta = {
	title: 'Components/Skeleton/Skeleton',
	component: Skeleton,

	tags: ['autodocs'],
	argTypes: {},
	parameters: {
		layout: 'fullscreen',
		controls: { expanded: true },
	},
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

const LoadingCard = ({ ...args }) => {
	return (
		<>
			<Skeleton width={args.width} height={args.height} tailwindCSS={args.tailwindCSS}>
				{args.children}
			</Skeleton>
		</>
	);
};

export const Card: Story = {
	args: {
		height: 'h-auto',
		width: 'w-auto',
		tailwindCSS: 'bg-white dark:bg-neutral-600 rounded',
		children: [
			<div>
				<SkeletonItem width="w-12" height="h-12" tailwindCSS="rounded-full mb-4" />
				{Array.from({ length: 4 }).map((_, i) => (
					<SkeletonItem tailwindCSS="rounded-md" width="w-full" height="h-6" key={i} />
				))}
			</div>,
		],
	},
	render: args => <LoadingCard {...args} />,
};
