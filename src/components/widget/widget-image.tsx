import { ReactElement } from 'react';
import { useTheme } from '../../hooks/useTheme';
import styles from './Widget.module.css';

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
	const { currentTheme } = useTheme();

	return (
		<div
			onClick={onClick}
			className={[
				'animated-hover-y1 theme-gradient',
				mode,
				height,
				width,
				tailwindCSS,
				`${styles.widget}`,
				`${
					currentTheme?.components?.widget
						? currentTheme?.components?.widget?.style
						: 'bg-gradient-to-r from-white to-slate-100 dark:bg-gradient-to-r dark:from-neutral-900 dark:to-zinc-800'
				}`,
			].join(' ')}
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
