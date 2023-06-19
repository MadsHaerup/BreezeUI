import { defaultSecondaryButtonScheme } from '../../helper/colorScheme';
import { useTheme } from '../../hooks/useTheme';

interface ButtonProps {
	buttonText?: string;
	buttonOnClick?: () => void;
}

const SecondaryButton = ({ buttonText, buttonOnClick }: ButtonProps) => {
	const { currentTheme } = useTheme();

	const colorScheme = currentTheme.components.secondaryButton
		? currentTheme?.components?.secondaryButton?.styleSheet?.style
		: defaultSecondaryButtonScheme;

	return (
		<button
			className={`${colorScheme} bg-transparent font-semibold py-2 px-4 border hover:border-transparent rounded`}
			onClick={buttonOnClick}
		>
			{buttonText}
		</button>
	);
};

export default SecondaryButton;
