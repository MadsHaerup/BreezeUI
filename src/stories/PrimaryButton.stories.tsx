import type { Meta, StoryObj } from '@storybook/react';
import PrimaryButton from '../components/button/PrimaryButton';

const meta = {
	title: 'Components/Buttons/PrimaryButton',
	component: PrimaryButton,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: args => <PrimaryButton buttonOnClick={args.buttonOnClick} buttonText={args.buttonText} />,
	args: {
		buttonText: 'Click',
		buttonOnClick: () => alert('Clicked'),
	},
};
