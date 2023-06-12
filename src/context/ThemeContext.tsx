import React, { createContext, useEffect, useState } from 'react';

export interface ThemeContextProps {
	theme: {
		light: {
			style: string;
		};
		dark: {
			style: string;
		};
	};
	currentTheme: {
		style: string;
	};
	toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
	theme: {
		light: {
			style: '',
		},
		dark: {
			style: '',
		},
	},
	currentTheme: {
		style: '',
	},
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	toggleTheme: () => {},
});

interface ThemeProviderProps {
	theme: {
		light: {
			style: string;
		};
		dark: {
			style: string;
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
