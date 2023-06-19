import type { Meta, StoryObj } from '@storybook/react';
import BlogLayout from '../components/layouts/BlogLayout';
import Article from '../components/article/Article';
import FeaturedArticle from '../components/article/FeaturedArticle';

const meta = {
	title: 'Layout/page/BlogLayout',
	component: BlogLayout,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
} satisfies Meta<typeof BlogLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	render: args => <BlogLayout articles={args.articles} featured={args.featured} />,
	args: {
		featured: (
			<FeaturedArticle
				imgSrc="https://picsum.photos/800/300"
				title="Lorem ipsum dolor sit amet"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet consequat sem. Pellentesque vitae vulputate nulla, vel placerat nunc."
				buttonText="Read more"
			/>
		),
		articles: [
			<Article
				imgSrc="https://picsum.photos/500/400"
				title="Lorem ipsum dolor sit amet"
				category="Category"
				author="Author"
				buttonText="Read more"
			/>,
			<Article
				imgSrc="https://picsum.photos/500/400"
				title="Lorem ipsum dolor sit amet"
				category="Category"
				author="Author"
				buttonText="Read more"
			/>,
			<Article
				imgSrc="https://picsum.photos/500/400"
				title="Lorem ipsum dolor sit amet"
				category="Category"
				author="Author"
				buttonText="Read more"
			/>,
			<Article
				imgSrc="https://picsum.photos/500/400"
				title="Lorem ipsum dolor sit amet"
				category="Category"
				author="Author"
				buttonText="Read more"
			/>,
			<Article
				imgSrc="https://picsum.photos/500/400"
				title="Lorem ipsum dolor sit amet"
				category="Category"
				author="Author"
				buttonText="Read more"
			/>,
			<Article
				imgSrc="https://picsum.photos/500/400"
				title="Lorem ipsum dolor sit amet"
				category="Category"
				author="Author"
				buttonText="Read more"
			/>,
		],
	},
};
