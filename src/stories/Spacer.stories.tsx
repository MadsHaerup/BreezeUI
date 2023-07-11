import type { Meta, StoryObj } from '@storybook/react';
import Spacer from '../components/spacer/Spacer';

const meta = {
	title: 'Layout/Spacer/Spacer',
	component: Spacer,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Spacer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
	render: args => <Spacer y={args.y}>{args.children}</Spacer>,
	args: {
		y: 8,
		children: [
			<>
				<div style={{ height: '50px', width: '200px', backgroundColor: 'white' }}></div>
				<div style={{ height: '50px', width: '200px', backgroundColor: 'white' }}></div>
			</>,
		],
	},
};

export const Horizontal: Story = {
	render: args => <Spacer x={args.x}>{args.children}</Spacer>,
	args: {
		x: 8,
		children: [
			<>
				<div style={{ height: '50px', width: '200px', backgroundColor: 'white' }}>01</div>
				<div style={{ height: '50px', width: '200px', backgroundColor: 'white' }}>02</div>
				<div style={{ height: '50px', width: '200px', backgroundColor: 'white' }}>03</div>
			</>,
		],
	},
};
