import { ReactElement } from 'react';

export interface BoardProps {
	children: React.ReactNode;
	tailwindCSS?: string;
}

export const WidgetBoard = (props: BoardProps): ReactElement<HTMLDivElement> => {
	return (
		<div
			className={[
				'grid grid-cols-1 grid-rows-1 sm:grid-cols-autofit w-full grid-flow-dense gap-4',
				props.tailwindCSS,
			].join(' ')}
			// {...props}
		>
			{props.children}
		</div>
	);
};
