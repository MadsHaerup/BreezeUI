import React, { createContext, useEffect, useState } from 'react';
import { light, dark } from '../theme/themes';

export interface ThemeContextProps {
	theme: {
		backgroundColor: string;
		textColor: string;
	};
	toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
	theme: light,
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	toggleTheme: () => {},
});

interface ThemeProviderProps {
	children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const [theme, setTheme] = useState(light);

	useEffect(() => {
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme) {
			const parsedTheme = JSON.parse(savedTheme);
			setTheme(parsedTheme);
			document.documentElement.classList.add('dark');
		}
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === light ? dark : light;
		setTheme(newTheme);
		localStorage.setItem('theme', JSON.stringify(newTheme));

		if (newTheme === dark) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	};

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
