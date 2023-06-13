import React, { createContext, useEffect, useState } from 'react';

export interface ComponentProps {
	style?: string;
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
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
	const [currentTheme, setCurrentTheme] = useState(theme.light);
	useEffect(() => {
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme) {
			const parsedTheme = JSON.parse(savedTheme);
			setCurrentTheme(parsedTheme);
			document.documentElement.classList.add('dark');
		}
	}, []);

	const toggleTheme = () => {
		const newTheme = currentTheme === theme.light ? theme.dark : theme.light;
		setCurrentTheme(newTheme);
		localStorage.setItem('theme', JSON.stringify(newTheme));

		if (newTheme === theme.dark) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	};

	return <ThemeContext.Provider value={{ currentTheme, theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
