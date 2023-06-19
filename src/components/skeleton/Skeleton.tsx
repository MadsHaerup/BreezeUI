import React from 'react';
import styles from './Skeleton.module.css';
import { useTheme } from '../../hooks/useTheme';

interface SkeletonProps {
	height?: string;
	width?: string;
	tailwindCSS?: string;
	children?: React.ReactNode;
}
const Skeleton: React.FC<SkeletonProps> = ({ height, width, tailwindCSS, children }) => {
	const { currentTheme } = useTheme();

	return (
		<div
			className={[
				styles.skeleton,
				height,
				width,
				tailwindCSS,
				`${
					currentTheme?.components?.skeleton?.styleSheet
						? currentTheme?.components?.skeleton?.styleSheet?.style
						: 'bg-white dark:bg-neutral-900'
				}`,
			].join(' ')}
		>
			{children}
		</div>
	);
};

export default Skeleton;
