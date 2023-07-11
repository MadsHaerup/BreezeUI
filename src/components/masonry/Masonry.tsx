import { useState, useEffect } from 'react';
import MasonryLayout from './MasonryLayout';

interface Image {
	id?: number;
	title?: string;
	url: string;
	size: number;
}

interface ImagesProps {
	images: Image[];
}

const Masonry = ({ images }: ImagesProps) => {
	let columnCount = 1;

	switch (true) {
		case window.innerWidth >= 1200:
			columnCount = 5;
			break;
		case window.innerWidth >= 1000:
			columnCount = 4;
			break;
		case window.innerWidth >= 768:
			columnCount = 3;
			break;
		case window.innerWidth >= 389:
			columnCount = 2;
			break;
		default:
			columnCount = 1;
			break;
	}

	const [columns, setColumns] = useState<number>(columnCount);

	useEffect(() => {
		const handleResize = () => {
			switch (true) {
				case window.innerWidth >= 1200:
					setColumns(5);
					break;
				case window.innerWidth >= 1000:
					setColumns(4);
					break;
				case window.innerWidth >= 768:
					setColumns(3);
					break;
				case window.innerWidth >= 389:
					setColumns(2);
					break;
				default:
					setColumns(1);
					break;
			}
		};

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="h-full max-w-screen-2xl mx-auto">
			{images && <MasonryLayout cards={images} columns={columns} />}
		</div>
	);
};

export default Masonry;
