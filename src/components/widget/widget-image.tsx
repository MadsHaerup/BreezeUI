import { ReactElement } from 'react';

export interface ImageProps {
	filter?: boolean;
	backgroundImage: string;
	onClick?: () => void;
	children?: React.ReactNode;
	tailwindCSS?: string;
}

export const WidgetImage = (props: ImageProps): ReactElement<HTMLDivElement> => {
	const mode = props.filter ? 'grayscale' : 'grayscale-0';

	return (
		<div
			onClick={props.onClick}
			className={['animated-hover-y1 theme-gradient widget', mode, props.tailwindCSS].join(' ')}
			{...props}
		>
			<div
				className="bg-image-contain"
				style={{
					backgroundImage: `url(${props.backgroundImage})`,
				}}
			>
				{props.children}
			</div>
		</div>
	);
};
