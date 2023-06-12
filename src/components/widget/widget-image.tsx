import { ReactElement } from 'react';

export interface ImageProps {
	filter?: boolean;
	backgroundImage?: string;
	onClick?: () => void;
	children?: React.ReactNode;
	tailwindCSS?: string;
	style?: React.CSSProperties;
	height?: string;
	width?: string;
}

export const WidgetImage = ({
	filter,
	backgroundImage,
	onClick,
	children,
	tailwindCSS,
	style,
	height = 'h-full',
	width = 'w-full',
}: ImageProps): ReactElement<HTMLDivElement> => {
	const mode = filter ? 'grayscale' : 'grayscale-0';

	return (
		<div
			onClick={onClick}
			className={['animated-hover-y1 theme-gradient widget', mode, height, width, tailwindCSS].join(' ')}
			style={{ ...style }}
		>
			<div
				className="bg-image-contain"
				style={{
					backgroundImage: `url(${backgroundImage})`,
				}}
			>
				{children}
			</div>
		</div>
	);
};
