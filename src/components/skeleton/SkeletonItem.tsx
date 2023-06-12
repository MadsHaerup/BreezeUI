import React from 'react';
import styles from './SkeletonItem.module.css';

interface SkeletonItemProps {
	height?: string;
	width?: string;
	tailwindCSS?: string;
}
const SkeletonItem: React.FC<SkeletonItemProps> = ({ height, width, tailwindCSS }) => {
	return <div className={[styles.reactLoadingSkeleton, height, width, tailwindCSS].join(' ')} />;
};

export default SkeletonItem;
