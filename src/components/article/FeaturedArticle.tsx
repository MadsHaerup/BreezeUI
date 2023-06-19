import { defaultArticleScheme } from '../../helper/colorScheme';
import { useTheme } from '../../hooks/useTheme';
import PrimaryButton from '../button/PrimaryButton';

interface FeaturedArticleProps {
	imgSrc?: string;
	title?: string;
	description?: string;
	buttonText?: string;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ imgSrc, title, description, buttonText }) => {
	const { currentTheme } = useTheme();

	const colorScheme = currentTheme?.components?.article
		? currentTheme?.components?.article?.styleSheet?.style
		: defaultArticleScheme;

	return (
		<div className={`${colorScheme} w-ful rounded-lg shadow-md`}>
			{imgSrc && (
				<div
					className="w-full h-64 bg-cover bg-center rounded-t-lg"
					style={{ backgroundImage: `url(${imgSrc})` }}
				></div>
			)}
			<div className="p-4">
				{title && <h3 className="text-2xl font-bold mb-2">{title}</h3>}
				{description && <p className="mb-4">{description}</p>}
				<PrimaryButton buttonText={buttonText} />
			</div>
		</div>
	);
};

export default FeaturedArticle;
