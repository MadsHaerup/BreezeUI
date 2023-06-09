import { ReactElement } from 'react';

export interface ItemProps {
	onClick?: () => void;
	children?: React.ReactNode;
	tailwindCSS?: string;
}

export const WidgetItem = (props: ItemProps): ReactElement<HTMLDivElement> => {
	return (
		<div
			onClick={props.onClick}
			className={['animated-hover-y1 theme-gradient widget ', props.tailwindCSS].join(' ')}
			{...props}
		>
			{props.children}
		</div>
	);
};
