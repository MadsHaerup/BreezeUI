import { ReactElement } from 'react';

export interface ItemProps {
	onClick?: () => void;
	children?: React.ReactNode;
	tailwindCSS?: string;
	style?: React.CSSProperties;
	height?: string;
	width?: string;
}

export const WidgetItem = ({
	onClick,
	children,
	tailwindCSS,
	style,
	height = 'h-full',
	width = 'w-full',
}: ItemProps): ReactElement<HTMLDivElement> => {
	return (
		<div
			onClick={onClick}
			className={['animated-hover-y1 theme-gradient widget ', height, width, tailwindCSS].join(' ')}
			style={{ ...style }}
		>
			{children}
		</div>
	);
};
