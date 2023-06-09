import { ReactElement } from 'react';

export interface BoardProps {
	children: React.ReactNode;
	tailwindCSS?: string;
}

export const WidgetBoard = (props: BoardProps): ReactElement<HTMLDivElement> => {
	return <div className={['responsive-grid-container', props.tailwindCSS].join(' ')}>{props.children}</div>;
};
