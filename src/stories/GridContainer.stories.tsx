import type { Meta, StoryObj } from '@storybook/react';
import GridContainer from '../components/grid/GridContainer';
import { GridItem } from '../components/grid/GridItem';

const meta = {
	title: 'Components/Grid/Grid Container',
	component: GridContainer,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
} satisfies Meta<typeof GridContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Stacked: Story = {
	render: args => (
		<GridContainer fit={args.fit} gap={args.gap}>
			{args.children}
		</GridContainer>
	),
	args: {
		gap: 4,
		fit: 'stacked',
		children: [
			<>
				<GridItem tailwindCSS="bg-neutral-500">Item 1</GridItem>
				<GridItem tailwindCSS="bg-neutral-500">Item 2</GridItem>
				<GridItem tailwindCSS="bg-neutral-500">Item 3</GridItem>
				<GridItem tailwindCSS="bg-neutral-500">Item 4</GridItem>
				<GridItem tailwindCSS="bg-neutral-500">Item 5</GridItem>
				<GridItem tailwindCSS="bg-neutral-500">Item 6</GridItem>
				<GridItem tailwindCSS="bg-neutral-500">Item 7</GridItem>
				<GridItem tailwindCSS="bg-neutral-500">Item 8</GridItem>
				<GridItem tailwindCSS="bg-neutral-500">Item 9</GridItem>
				<GridItem tailwindCSS="bg-neutral-500">Item 10</GridItem>
				<GridItem tailwindCSS="bg-neutral-500">Item 11</GridItem>
				<GridItem tailwindCSS="bg-neutral-500">Item 12</GridItem>
				<GridItem tailwindCSS="bg-neutral-500">Item 13</GridItem>
			</>,
		],
	},
};

export const AutoFit: Story = {
	render: args => (
		<GridContainer fit={args.fit} gap={args.gap}>
			{args.children}
		</GridContainer>
	),
	args: {
		gap: 4,
		fit: 'autofit',
		children: [
			<>
				<GridItem tailwindCSS="bg-neutral-500">Item 1</GridItem>
				<GridItem tailwindCSS="bg-neutral-500">Item 2</GridItem>
				<GridItem tailwindCSS="bg-neutral-500">Item 3</GridItem>
				<GridItem tailwindCSS="bg-neutral-500">Item 4</GridItem>
				<GridItem tailwindCSS="bg-neutral-500">Item 5</GridItem>
				<GridItem tailwindCSS="bg-neutral-500">Item 6</GridItem>
				<GridItem tailwindCSS="bg-neutral-500">Item 7</GridItem>
				<GridItem tailwindCSS="bg-neutral-500">Item 8</GridItem>
				<GridItem tailwindCSS="bg-neutral-500">Item 9</GridItem>
				<GridItem tailwindCSS="bg-neutral-500">Item 10</GridItem>
				<GridItem tailwindCSS="bg-neutral-500">Item 11</GridItem>
				<GridItem tailwindCSS="bg-neutral-500">Item 12</GridItem>
				<GridItem tailwindCSS="bg-neutral-500">Item 13</GridItem>
			</>,
		],
	},
};

export const SpanningColumns: Story = {
	render: args => <GridContainer gap={args.gap}>{args.children}</GridContainer>,
	args: {
		gap: 4,
		children: [
			<>
				<GridItem tailwindCSS="bg-neutral-500" colSpan="sm:col-span-2" rowSpan="sm:row-span-3">
					Item 1
				</GridItem>
				<GridItem tailwindCSS="bg-neutral-500">Item 2</GridItem>
				<GridItem tailwindCSS="bg-neutral-500">Item 3</GridItem>
				<GridItem tailwindCSS="bg-neutral-500">Item 4</GridItem>
				<GridItem tailwindCSS="bg-neutral-500">Item 5</GridItem>
				<GridItem tailwindCSS="bg-neutral-500" colSpan="sm:col-span-2">
					Item 6
				</GridItem>
				<GridItem tailwindCSS="bg-neutral-500" colSpan="sm:col-span-2" rowSpan="sm:row-span-2">
					Item 7
				</GridItem>
				<GridItem tailwindCSS="bg-neutral-500">Item 8</GridItem>
				<GridItem tailwindCSS="bg-neutral-500">Item 9</GridItem>
				<GridItem tailwindCSS="bg-neutral-500">Item 10</GridItem>
				<GridItem tailwindCSS="bg-neutral-500">Item 11</GridItem>
				<GridItem tailwindCSS="bg-neutral-500">Item 12</GridItem>
				<GridItem tailwindCSS="bg-neutral-500" colSpan="sm:col-span-3">
					Item 13
				</GridItem>
			</>,
		],
	},
};
