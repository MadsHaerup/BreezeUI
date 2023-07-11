import { ReactElement } from 'react';

export interface BoardProps {
	children: React.ReactNode;
	tailwindCSS?: string;
}

export const WidgetBoard = ({ tailwindCSS, children }: BoardProps): ReactElement<HTMLDivElement> => {
	return <div className={['responsive-grid-container', tailwindCSS].join(' ')}>{children}</div>;
};
