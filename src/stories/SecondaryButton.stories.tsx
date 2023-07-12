import type { Meta, StoryObj } from '@storybook/react';
import SecondaryButton from '../components/button/SecondaryButton';

const meta = {
	title: 'Components/Buttons/SecondaryButton',
	component: SecondaryButton,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof SecondaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: args => <SecondaryButton buttonOnClick={args.buttonOnClick} buttonText={args.buttonText} />,
	args: {
		buttonText: 'Click',
		buttonOnClick: () => alert('Clicked'),
	},
};
