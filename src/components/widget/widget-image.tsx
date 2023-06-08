import { ReactElement } from 'react';

export interface ImageProps {
	filter?: boolean;
	backgroundImage: string;
	onClick?: () => void;
	children?: React.ReactNode;
	tailwindCSS?: string;
}

export const WidgetImage = (props: ImageProps): ReactElement<HTMLDivElement> => {
	const mode = props.filter ? 'grayscale' : 'grayscale-0';

	return (
		<div
			onClick={props.onClick}
			className={[
				'transition ease-in-out delay-150 bg-white dark:bg-neutral-900 h-full w-full rounded-lg object-cover bg-no-repeat bg-contain bg-center p-4 drop-shadow-md hover:-translate-y-1 duration-300',
				mode,
				props.tailwindCSS,
			].join(' ')}
			{...props}
			style={{
				backgroundImage: `url(${props.backgroundImage})`,
			}}
		>
			{props.children}
		</div>
	);
};
