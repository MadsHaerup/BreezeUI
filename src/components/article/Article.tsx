import { defaultArticleScheme } from '../../helper/colorScheme';
import { useTheme } from '../../hooks/useTheme';
import SecondaryButton from '../button/SecondaryButton';

interface ArticleProps {
	imgSrc?: string;
	title?: string;
	category?: string;
	author?: string;
	buttonText?: string;
}

const Article: React.FC<ArticleProps> = ({ imgSrc, title, category, author, buttonText }) => {
	const { currentTheme } = useTheme();

	const colorScheme = currentTheme?.components?.article
		? currentTheme?.components?.article?.styleSheet?.style
		: defaultArticleScheme;

	return (
		<div className={`${colorScheme} w-full rounded-lg shadow-md`}>
			{imgSrc && (
				<div
					className="w-full h-40 bg-cover bg-center rounded-t-lg"
					style={{ backgroundImage: `url(${imgSrc})` }}
				></div>
			)}
			<div className="p-4">
				{category && <h5 className="text-md mb-2">{category}</h5>}
				{title && <h3 className="text-lg font-bold mb-2">{title}</h3>}
				{author && <p className=" text-sm mb-4">{author}</p>}
				<SecondaryButton buttonText={buttonText} />
			</div>
		</div>
	);
};

export default Article;
