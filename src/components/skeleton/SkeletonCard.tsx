import Skeleton from './Skeleton';
import SkeletonCircle from './SkeletonCircle';
import SkeletonItem from './SkeletonItem';

export interface SkeletonCardProps {
	rows?: number;
	size?: 'sm' | 'md' | 'lg';
}

const SkeletonCard = ({ rows = 4, size = 'md' }: SkeletonCardProps) => {
	return (
		<Skeleton>
			<div className="flex items-center">
				<SkeletonCircle size={size} tailwindCSS="mb-4 mr-2" />
				<SkeletonItem tailwindCSS="rounded-md" width="w-14" height="h-2" />
			</div>
			{Array.from({ length: rows }).map((_, i) => (
				<SkeletonItem tailwindCSS="rounded-md" width="w-full" height="h-4" key={i} />
			))}
		</Skeleton>
	);
};

export default SkeletonCard;
