export interface DividerProps {
	orientation?: string;
	spacing?: number;
}
const Divider = ({ orientation, spacing = 2 }: DividerProps) => {
	const getClasses = () => {
		if (orientation === 'horizontal') {
			return `border-t ${'my-' + spacing}`;
		}
		if (orientation === 'vertical') {
			return `border-l h-full inline-block ${'px-' + spacing}`;
		}
		if (orientation === 'vertical-center') {
			return `border-l h-full inline-block ${'mx-' + spacing}`;
		}
		return ' ';
	};
	return <div className={getClasses()} />;
};

export default Divider;
