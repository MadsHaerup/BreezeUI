import React from 'react';
import styles from './Skeleton.module.css';
import { useTheme } from '../../hooks/useTheme';
import { defaultBgScheme } from '../../helper/colorScheme';

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
						: defaultBgScheme
				}`,
			].join(' ')}
		>
			{children}
		</div>
	);
};

export default Skeleton;
