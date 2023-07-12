import { defaultButtonScheme } from '../../helper/colorScheme';
import { useTheme } from '../../hooks/useTheme';

interface ButtonProps {
	buttonText?: string;
	buttonOnClick?: () => void;
}
const PrimaryButton = ({ buttonOnClick, buttonText }: ButtonProps) => {
	const { currentTheme } = useTheme();

	const colorScheme = currentTheme?.components?.primaryButton?.styleSheet?.style ?? defaultButtonScheme;

	return (
		<button className={`${colorScheme} font-bold py-2 px-4 rounded mt-8`} onClick={buttonOnClick}>
			{buttonText}
		</button>
	);
};

export default PrimaryButton;
