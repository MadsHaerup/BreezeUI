import './App.css';
import Widget from './components/widget/index';
import { useTheme } from './hooks/useTheme';

function App() {
	const { theme, toggleTheme } = useTheme();
	return (
		<main
			className="rounded-xl p-8 dark:bg-slate-800 w-screen h-screen"
			style={{ backgroundColor: theme.backgroundColor, color: theme.textColor }}
		>
			{/* <p tailwindCSSName="text-xl font-medium">Breeze UI</p>
			<p>It's never been easier!</p>
			<Widget.Item />
			<button onClick={() => toggleTheme()}>Toggle</button> */}
			<Widget.Board>
				<Widget.Item tailwindCSS="sm:col-span-2 sm:row-span-2 bg-gray-200">Item 1</Widget.Item>
				<Widget.Item tailwindCSS="bg-gray-200">Item 2</Widget.Item>
				<Widget.Item tailwindCSS="bg-gray-200">Item 3</Widget.Item>
				<Widget.Item tailwindCSS="bg-gray-200">Item 4</Widget.Item>
				<Widget.Item tailwindCSS="bg-gray-200">Item 5</Widget.Item>
				<Widget.Item tailwindCSS="sm:col-span-2 bg-gray-200">Item 6</Widget.Item>
				<Widget.Item tailwindCSS="sm:col-span-2 sm:row-span-2 bg-gray-200">Item 7</Widget.Item>
				<Widget.Item tailwindCSS="bg-gray-200">Item 8</Widget.Item>
				<Widget.Item tailwindCSS="bg-gray-200">Item 9</Widget.Item>
				<Widget.Item tailwindCSS="bg-gray-200">Item 10</Widget.Item>
				<Widget.Item tailwindCSS="bg-gray-200">Item 11</Widget.Item>
				<Widget.Item tailwindCSS="bg-gray-200">Item 12</Widget.Item>
				<Widget.Item tailwindCSS="sm:col-span-3 bg-gray-200">Item 13</Widget.Item>
				<Widget.Item tailwindCSS="bg-gray-200">Item 14</Widget.Item>
				<Widget.Item tailwindCSS="bg-gray-200">Item 15</Widget.Item>
			</Widget.Board>
		</main>
	);
}

export default App;
