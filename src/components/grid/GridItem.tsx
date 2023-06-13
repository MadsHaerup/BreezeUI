import { ReactElement } from 'react';

export interface ItemProps {
	children?: React.ReactNode;
	tailwindCSS?: string;
	rowSpan?: string;
	colSpan?: string;
}

export const GridItem = ({ children, tailwindCSS, rowSpan, colSpan }: ItemProps): ReactElement<HTMLDivElement> => {
	return <div className={[rowSpan, colSpan, tailwindCSS].join(' ')}>{children}</div>;
};
