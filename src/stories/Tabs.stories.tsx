import type { Meta, StoryObj } from '@storybook/react';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '../components/tabs/Tabs';

const meta = {
	title: 'Components/Tabs/Tabs',
	component: Tabs,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = () => {
	return (
		<>
			<TabList>
				<Tab>One</Tab>
				<Tab>Two</Tab>
				<Tab>Three</Tab>
			</TabList>

			<TabPanels>
				<TabPanel>
					<p>one!</p>
				</TabPanel>
				<TabPanel>
					<p>two!</p>
				</TabPanel>
				<TabPanel>
					<p>three!</p>
				</TabPanel>
			</TabPanels>
		</>
	);
};

export const TabsUnderlined: Story = {
	render: args => <Tabs variant="underlined">{args.children}</Tabs>,
	args: {
		children: [<Template />],
	},
};

export const TabsEnclosed: Story = {
	render: args => <Tabs variant="enclosed">{args.children}</Tabs>,
	args: {
		children: [<Template />],
	},
};

export const TabsRounded: Story = {
	render: args => <Tabs variant="rounded">{args.children}</Tabs>,
	args: {
		children: [<Template />],
	},
};
