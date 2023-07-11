export type MasonryCardProps = {
	id?: number;
	title?: string;
	url: string;
	size: number;
};
type CardProps = { card: MasonryCardProps };

const MasonryCard = ({ card }: CardProps) => (
	<div className="relative mb-4" style={{ height: card.size, minHeight: '288px' }}>
		<div
			style={{ backgroundImage: `url(${card.url})` }}
			className={`relative rounded-md shadow-md break-inside-avoid-column h-full w-full bg-cover bg-center transition-all duration-500`}
		></div>
		{card.title && (
			<div className="z-10 absolute bottom-5 left-5">
				<h1 className="text-2xl font-bold text-white mb-2">{card.title}</h1>
			</div>
		)}
		<div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-500 z-0"></div>
	</div>
);

export default MasonryCard;
