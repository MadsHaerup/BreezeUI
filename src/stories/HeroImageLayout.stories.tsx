import type { Meta, StoryObj } from '@storybook/react';
import HeroImageLayout from '../components/layouts/HeroImageLayout';
import Heading from '../components/heading/Heading';

const meta = {
	title: 'Layout/page/HeroImage',
	component: HeroImageLayout,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
} satisfies Meta<typeof HeroImageLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

const handleClick = () => {
	alert('Button clicked!');
};

export const Primary: Story = {
	render: args => (
		<HeroImageLayout
			height={args.height}
			placement={args.placement}
			buttonText={args.buttonText}
			buttonOnClick={args.buttonOnClick}
			imageUrl={args.imageUrl}
			overlay={args.overlay}
		>
			{args.children}
		</HeroImageLayout>
	),
	args: {
		height: '90vh',
		overlay: true,
		placement: 'left',
		buttonText: 'Learn More',
		buttonOnClick: handleClick,
		imageUrl: 'https://picsum.photos/1920/1080',
		children: [
			<>
				<Heading level={1}>Hero Title</Heading>
				<Heading level={4}>Hero Subtitle</Heading>
			</>,
		],
	},
};
