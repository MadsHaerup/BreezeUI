import MasonryCard, { MasonryCardProps } from './MasonryCard';

type LayoutProps = {
	cards: MasonryCardProps[];
	columns: number;
};

const MasonryLayout = ({ cards, columns }: LayoutProps) => {
	const baseHeight = 300;

	for (let i = 0; i < 10; i++) {
		cards.forEach((card, index) => {
			const totalIndex = index + i * cards.length;
			const newHeight = baseHeight + (totalIndex % 11) * 10;
			card.size = newHeight;
		});
	}

	return (
		<div className="gap-4" style={{ columnCount: columns }}>
			{cards.map(card => (
				<MasonryCard key={card.id} card={card} />
			))}
		</div>
	);
};

export default MasonryLayout;
