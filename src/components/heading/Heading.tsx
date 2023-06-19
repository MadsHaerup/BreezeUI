import React from 'react';

export interface HeadingProps {
	level: 1 | 2 | 3 | 4 | 5 | 6;
	children?: React.ReactNode;
	tailwindCSS?: string;
}

const Heading = ({ level, children, tailwindCSS }: HeadingProps) => {
	const fontSizeClasses = {
		1: 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl',
		2: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl',
		3: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl',
		4: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl',
		5: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl',
		6: 'text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl',
	};

	const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

	return (
		<HeadingTag className={`font-bold leading-tight ${tailwindCSS} ${fontSizeClasses[level]}`}>{children}</HeadingTag>
	);
};

export default Heading;
