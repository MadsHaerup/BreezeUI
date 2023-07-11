import React, { ReactNode } from 'react';

interface BlogLayoutProps {
	featured?: ReactNode;
	articles?: ReactNode[];
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ featured, articles }) => {
	return (
		<div className="w-full h-full  px-4 py-8 flex flex-col items-center">
			<div className="w-full md:w-3/4 lg:w-1/2 mb-8">
				{featured && <div className="mb-8">{featured}</div>}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{articles &&
						articles.map((article, index) => (
							<div key={index} className="mb-8">
								{article}
							</div>
						))}
				</div>
			</div>
		</div>
	);
};

export default BlogLayout;
