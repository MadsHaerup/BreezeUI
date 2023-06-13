import SkeletonItem from './SkeletonItem';

export interface SkeletonCircleProps {
	size?: 'sm' | 'md' | 'lg';
	tailwindCSS?: string;
}
const SkeletonCircle = ({ size = 'md', tailwindCSS }: SkeletonCircleProps) => {
	const circleSize = size == 'sm' ? '12' : size == 'md' ? '16' : size == 'lg' ? '20' : ' ';
	return (
		<SkeletonItem
			width={'w-' + circleSize}
			height={'h-' + circleSize}
			tailwindCSS={`${'rounded-full'} ${tailwindCSS}`}
		/>
	);
};

export default SkeletonCircle;
