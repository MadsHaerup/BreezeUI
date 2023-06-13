import styles from './Grid.module.css';

export interface GridContainerProps {
	children: React.ReactNode;
	gap?: number;
	fit?: 'autofit' | 'stacked';
}

const GridContainer = ({ children, gap = 8, fit = 'autofit' }: GridContainerProps) => {
	return (
		<div
			style={{ gridGap: gap + 'px' }}
			className={[
				`${styles.gridContainer}`,
				`${fit == 'autofit' ? 'sm:grid-cols-autofit' : 'grid-cols-1 grid-rows-1'}`,
			].join(' ')}
		>
			{children}
		</div>
	);
};

export default GridContainer;
