import './App.css';
// import Widget from './components/widget/index';
import { useTheme } from './hooks/useTheme';
import Widget from './components/widget';
import useToast from './hooks/useToast';
import { Toast } from './components/toast/Toast';
import Skeleton from './components/skeleton/Skeleton';
import SkeletonItem from './components/skeleton/SkeletonItem';

function App() {
	const { currentTheme, toggleTheme } = useTheme();
	console.log(currentTheme);

	const [showToast, toasts, setToasts] = useToast();

	const handleButtonClick = () => {
		showToast({
			key: Date.now(),
			title: 'Account Created',
			description: "We've created your account for you.",
			status: 'success',
			duration: 9000,
			isClosable: true,
			position: 'bottom-right',
		});
	};

	return (
		<main className={`${currentTheme.style} rounded-xl p-8 w-screen h-screen`}>
			<p className="text-xl font-medium">Breeze UI</p>
			<p>It's never been easier!</p>
			<button onClick={() => toggleTheme()}>Toggle</button>

			<Widget.Item
				style={{ backgroundColor: '#1C1C1E' }}
				tailwindCSS="hover:rounded-xl h-80 w-80"
				height="h-80"
				width="w-80"
			/>

			<>
				<Skeleton tailwindCSS="bg-white rounded">
					<>
						{Array.from({ length: 4 }).map((_, i) => (
							<SkeletonItem width="w-full" height="h-8" key={i} />
						))}
					</>
				</Skeleton>
			</>

			<div>
				<button onClick={handleButtonClick}>Show Toast</button>
				{toasts.map(toast => (
					<Toast
						key={toast.key}
						title={toast.title}
						description={toast.description}
						status={toast.status}
						duration={toast.duration}
						isClosable={toast.isClosable}
						position={toast.position}
						onClose={() => setToasts(currentToasts => currentToasts.filter(item => item.key !== toast.key))}
					/>
				))}
			</div>
		</main>
	);
}

export default App;
