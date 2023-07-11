import './App.css';
import { useTheme } from './hooks/useTheme';
import Masonry from './components/masonry/Masonry';
import { MasonFetcher } from './components/masonry/MasonFetch';

function App() {
	const { currentTheme, toggleTheme } = useTheme();

	const results = MasonFetcher();

	return (
		<main className={`${currentTheme.baseStyle} rounded-xl p-8 w-screen`}>
			<button onClick={() => toggleTheme()}>Toggle</button>
			<Masonry images={results} />
		</main>
	);
}

export default App;
