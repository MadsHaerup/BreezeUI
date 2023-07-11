import React, { createContext, useEffect, useState } from 'react';

export interface ComponentProps {
	styleSheet?: {
		style?: string;
		active?: string;
	};
}

export interface ThemeContextProps {
	theme: {
		light: {
			baseStyle: string;
			components: {
				[key: string]: ComponentProps;
			};
		};
		dark: {
			baseStyle: string;
			components: {
				[key: string]: ComponentProps;
			};
		};
	};
	currentTheme: {
		baseStyle: string;
		components: {
			[key: string]: ComponentProps;
		};
	};
	toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
	theme: {
		light: {
			baseStyle: '',
			components: {},
		},
		dark: {
			baseStyle: '',
			components: {},
		},
	},
	currentTheme: {
		baseStyle: '',
		components: {},
	},
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	toggleTheme: () => {},
});

interface ThemeProviderProps {
	theme: {
		light: {
			baseStyle: string;
			components: {
				[key: string]: ComponentProps;
			};
		};
		dark: {
			baseStyle: string;
			components: {
				[key: string]: ComponentProps;
			};
		};
	};
	children: React.ReactNode;
	initialTheme: 'light' | 'dark';
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme, initialTheme }) => {
	const isInitialTheme = initialTheme === 'dark' ? theme.dark : theme.light;
	const savedTheme = localStorage.getItem('theme');
	const isTheme = savedTheme === 'dark' ? theme.dark : theme.light;
	const themeObj = savedTheme ? isTheme : isInitialTheme;

	const [currentTheme, setCurrentTheme] = useState(themeObj);

	const [currentThemeStorage, setCurrentThemeStorage] = useState(() => {
		const savedTheme = localStorage.getItem('theme');
		return savedTheme ? savedTheme : initialTheme;
	});

	useEffect(() => {
		localStorage.setItem('theme', currentThemeStorage);

		if (currentThemeStorage === 'dark') {
			document.documentElement.classList.add('dark');
			document.documentElement.classList.remove('lightTheme');
		} else {
			document.documentElement.classList.remove('dark');
			document.documentElement.classList.add('lightTheme');
		}
	}, [currentThemeStorage]);

	const toggleTheme = () => {
		const newTheme = currentThemeStorage === 'light' ? 'dark' : 'light';
		setCurrentTheme(newTheme === 'dark' ? theme.dark : theme.light); // update currentTheme state
		setCurrentThemeStorage(newTheme);
	};

	return <ThemeContext.Provider value={{ currentTheme, theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
