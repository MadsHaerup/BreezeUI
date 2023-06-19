import type { Meta, StoryObj } from '@storybook/react';
import Pagination from '../components/pagination/Pagination';

const meta = {
	title: 'Navigation/Pagination/Pagination',
	component: Pagination,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

const showAlert = () => alert('page change');

export const Default: Story = {
	args: {
		totalPages: 20,
		initialPage: 10,
		tabCount: 5,
		onPageChange: showAlert,
	},
};
