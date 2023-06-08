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
			className={[
				'transition ease-in-out delay-150 bg-gradient-to-r from-white to-slate-100 dark:bg-gradient-to-r dark:from-neutral-900 dark:to-neutral-600 h-full w-full rounded-lg p-4 drop-shadow-md hover:-translate-y-1 duration-300',
				props.tailwindCSS,
			].join(' ')}
			{...props}
		>
			{props.children}
		</div>
	);
};
