import SkeletonItem from './SkeletonItem';

export interface SkeletonCircleProps {
	size?: 'sm' | 'md' | 'lg';
	tailwindCSS?: string;
}
const SkeletonCircle = ({ size = 'md', tailwindCSS }: SkeletonCircleProps) => {
	let circleSize;

	switch (size) {
		case 'sm':
			circleSize = '12';
			break;
		case 'md':
			circleSize = '16';
			break;
		case 'lg':
			circleSize = '20';
			break;
		default:
			circleSize = ' ';
	}
	return (
		<SkeletonItem
			width={`w-${circleSize}`}
			height={`h-${circleSize}`}
			tailwindCSS={`${'rounded-full'} ${tailwindCSS} w-${circleSize} h-${circleSize}`}
		/>
	);
};

export default SkeletonCircle;
