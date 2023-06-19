import type { Meta, StoryObj } from '@storybook/react';
import Heading from '../components/heading/Heading';

const meta = {
	title: 'Typography/Heading/Heading',
	component: Heading,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllHeadings: Story = {
	render: args => (
		<>
			<Heading level={args.level}>Main Heading 1</Heading>
			<Heading level={2}>Subheading 2</Heading>
			<Heading level={3}>Subheading 3</Heading>
			<Heading level={4}>Subheading 4</Heading>
			<Heading level={5}>Subheading 5</Heading>
			<Heading level={6}>Subheading 6</Heading>
		</>
	),
	args: {
		level: 1,
	},
};

export const H1: Story = {
	render: args => <Heading level={args.level}>Main Heading</Heading>,
	args: {
		level: 1,
	},
};
export const H2: Story = {
	render: args => <Heading level={args.level}>Subheading 2</Heading>,
	args: {
		level: 2,
	},
};

export const H3: Story = {
	render: args => <Heading level={args.level}>Subheading 3</Heading>,
	args: {
		level: 3,
	},
};

export const H4: Story = {
	render: args => <Heading level={args.level}>Subheading 4</Heading>,
	args: {
		level: 4,
	},
};
export const H5: Story = {
	render: args => <Heading level={args.level}>Subheading 5</Heading>,
	args: {
		level: 5,
	},
};
export const H6: Story = {
	render: args => <Heading level={args.level}>Subheading 6</Heading>,
	args: {
		level: 6,
	},
};
