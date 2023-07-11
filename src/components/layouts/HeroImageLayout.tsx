import React, { ReactNode } from 'react';
import { useTheme } from '../../hooks/useTheme';
import PrimaryButton from '../button/PrimaryButton';

interface HeroImageLayoutProps {
	height?: string;
	imageUrl: string;
	children: ReactNode;
	buttonText?: string;
	buttonOnClick?: () => void;
	placement?: 'center' | 'right' | 'left';
	overlay?: boolean;
}

const HeroImageLayout: React.FC<HeroImageLayoutProps> = ({
	height = '100vh',
	imageUrl,
	children,
	buttonText,
	buttonOnClick,
	placement = 'center',
	overlay = true,
}) => {
	const { currentTheme } = useTheme();

	const colorScheme = currentTheme.components.heroImageContent
		? currentTheme?.components?.heroImageContent?.styleSheet?.style
		: 'text-white';

	let overlayStyle = {};
	if (overlay) {
		overlayStyle = {
			backgroundColor: 'rgba(0, 0, 0, 0.5)',
			opacity: '0.5',
			position: 'absolute',
			top: 0,
			left: 0,
			height: '100%',
			width: '100%',
		};
	}

	return (
		<div
			className={`w-full bg-cover bg-no-repeat bg-center relative flex justify-center items-center`}
			style={{
				height,
				backgroundImage: `url(${imageUrl})`,
			}}
		>
			{overlay && <div style={overlayStyle}></div>}
			{children && (
				<div className={`${colorScheme} w-3/4 mx-auto text-center z-10`} style={{ textAlign: placement }}>
					{children}
					{buttonText && <PrimaryButton buttonOnClick={buttonOnClick} buttonText={buttonText} />}
				</div>
			)}
		</div>
	);
};

export default HeroImageLayout;
