import { ReactElement } from 'react';
import { useTheme } from '../../hooks/useTheme';
import styles from './Widget.module.css';
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
	const { currentTheme } = useTheme();
	return (
		<div
			onClick={onClick}
			className={[
				'animated-hover-y1',
				height,
				width,
				tailwindCSS,
				`${styles.widget}`,
				`${
					currentTheme?.components?.widget
						? currentTheme?.components?.widget?.styleSheet?.style
						: 'bg-gradient-to-r from-white to-slate-100 dark:bg-gradient-to-r dark:from-neutral-900 dark:to-zinc-800'
				}`,
			].join(' ')}
			style={{ ...style }}
		>
			{children}
		</div>
	);
};
