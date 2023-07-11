export const getTabClassNames = (
	index: number,
	activeIndex: number,
	variant?: 'enclosed' | 'rounded' | 'underlined' | null | 'undefined' | undefined
) => {
	let classNames = 'p-2';

	if (index === activeIndex) {
		switch (variant) {
			case 'enclosed':
				classNames += ' border-[1px] border-current border-b-transparent rounded-t-md border-current';
				break;
			case 'rounded':
				classNames += ' border-[1px] rounded-full';
				break;
			case 'underlined':
				classNames += ' border-b-2 border-current';
				break;
			default:
				classNames += ' ';
				break;
		}
	} else {
		switch (variant) {
			case 'enclosed':
				classNames += ' border-[1px] border-b-current border-transparent border-b border-b-0';
				break;
			case 'rounded':
				classNames += ' border-[1px] border-transparent rounded-full';
				break;
			case 'underlined':
				classNames += ' border-b-2 border-transparent';
				break;
			default:
				classNames += ' ';
				break;
		}
	}
	return classNames;
};
