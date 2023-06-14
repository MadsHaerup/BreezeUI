import type { Meta, StoryObj } from '@storybook/react';
import GridContainer from '../components/grid/GridContainer';
import { GridItem } from '../components/grid/GridItem';
import Divider from '../components/divider/Divider';

const meta = {
	title: 'Components/Divider/Divider',
	component: Divider,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
	render: args => (
		<GridContainer fit="stacked" gap={0}>
			<Divider orientation={args.orientation} spacing={args.spacing} />
		</GridContainer>
	),
	args: {
		orientation: 'horizontal',
		spacing: 8,
	},
};

export const HorizontalWithItems: Story = {
	render: args => (
		<GridContainer fit="stacked" gap={0}>
			<GridItem tailwindCSS="bg-slate-500 p-4">Item 1</GridItem>
			<Divider orientation={args.orientation} spacing={args.spacing} />
			<GridItem tailwindCSS="bg-slate-500 p-4">Item 2</GridItem>
			<Divider orientation={args.orientation} spacing={args.spacing} />
			<GridItem tailwindCSS="bg-slate-500 p-4">Item 3</GridItem>
			<Divider orientation={args.orientation} spacing={args.spacing} />
			<GridItem tailwindCSS="bg-slate-500 p-4">Item 4</GridItem>
		</GridContainer>
	),
	args: {
		orientation: 'horizontal',
		spacing: 4,
	},
};

export const Vertical: Story = {
	render: args => (
		<GridContainer fit="stacked" gap={0}>
			<GridItem tailwindCSS="bg-slate-500 p-4 flex">
				<Divider orientation={args.orientation} spacing={args.spacing} />
				<p>Breeze UI</p>
			</GridItem>
		</GridContainer>
	),
	args: {
		orientation: 'vertical',
		spacing: 1,
	},
};

export const VerticalCenter: Story = {
	render: args => (
		<div style={{ display: 'flex', height: '100px' }}>
			<GridItem tailwindCSS="bg-slate-500 p-4 w-1/2" />
			<Divider orientation={args.orientation} spacing={args.spacing} />
			<GridItem tailwindCSS="bg-slate-500 p-4 w-1/2" />
		</div>
	),
	args: {
		orientation: 'vertical-center',
		spacing: 2,
	},
};
