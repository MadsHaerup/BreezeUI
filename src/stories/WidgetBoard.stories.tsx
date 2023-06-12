import type { Meta, StoryObj } from '@storybook/react';
import Widget from '../components/widget/index';

const meta = {
	title: 'Components/Widget/Widget Board',
	component: Widget.Board,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
} satisfies Meta<typeof Widget.Board>;

export default meta;
type Story = StoryObj<typeof meta>;

// This story uses a render function to fully control how the component renders.
export const OneWidget: Story = {
	render: args => <Widget.Board>{args.children}</Widget.Board>,
	args: {
		children: (
			<Widget.Item height="h-80" width="w-80">
				Item
			</Widget.Item>
		),
	},
};

export const ManyWidgets: Story = {
	render: args => <Widget.Board>{args.children}</Widget.Board>,
	args: {
		children: [
			<>
				<Widget.Image backgroundImage="src/stories/assets/colors.svg" tailwindCSS="sm:col-span-2 sm:row-span-2">
					Item 1
				</Widget.Image>
				<Widget.Item>Item 2</Widget.Item>
				<Widget.Item>Item 3</Widget.Item>
				<Widget.Item>Item 4</Widget.Item>
				<Widget.Item>Item 5</Widget.Item>
				<Widget.Item tailwindCSS="sm:col-span-2">Item 6</Widget.Item>
				<Widget.Image backgroundImage="src/stories/assets/colors.svg" filter tailwindCSS="sm:col-span-2 sm:row-span-2">
					Item 7
				</Widget.Image>
				<Widget.Item>Item 8</Widget.Item>
				<Widget.Item>Item 9</Widget.Item>
				<Widget.Item>Item 10</Widget.Item>
				<Widget.Item>Item 11</Widget.Item>
				<Widget.Item>Item 12</Widget.Item>
				<Widget.Item tailwindCSS="sm:col-span-3">Item 13</Widget.Item>
				<Widget.Item>Item 14</Widget.Item>
				<Widget.Item>Item 15</Widget.Item>
			</>,
		],
	},
};
