import React from 'react';
import styles from './Skeleton.module.css';

interface SkeletonProps {
	height?: string;
	width?: string;
	tailwindCSS?: string;
	children?: React.ReactNode;
}
const Skeleton: React.FC<SkeletonProps> = ({ height, width, tailwindCSS, children }) => {
	return <div className={[styles.skeleton, height, width, tailwindCSS].join(' ')}>{children}</div>;
};

export default Skeleton;
