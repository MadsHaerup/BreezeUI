import './App.css';
import { useTheme } from './hooks/useTheme';
import Widget from './components/widget';
import useToast from './hooks/useToast';
import { Toast } from './components/toast/Toast';
import SkeletonCard from './components/skeleton/SkeletonCard';
import GridContainer from './components/grid/GridContainer';
import { GridItem } from './components/grid/GridItem';
import Spacer from './components/spacer/Spacer';
import Divider from './components/divider/Divider';

function App() {
	const { currentTheme, toggleTheme } = useTheme();
	const [showToast, toasts, setToasts] = useToast();

	const handleButtonClick = () => {
		showToast({
			key: Date.now(),
			title: 'Account Created',
			description: "We've created your account for you.",
			status: 'success',
			duration: 8000,
			isClosable: true,
			position: 'bottom-right',
		});
	};

	return (
		<main className={`${currentTheme.baseStyle} rounded-xl p-8 w-screen h-screen`}>
			<button onClick={() => toggleTheme()}>Toggle</button>
			<div className="flex justify-center py-4">
				<div className="w-1/2 mr-4">
					<Divider orientation="horizontal" spacing={4} />
				</div>

				<div className="w-1/2 flex">
					<Divider orientation="vertical" spacing={4} />
					<p className="pl-4">HEY</p>
				</div>
			</div>
			<Spacer x={8}>
				<div style={{ height: '50px', width: '200px', backgroundColor: 'white' }}>01</div>
				<div style={{ height: '50px', width: '200px', backgroundColor: 'white' }}>02</div>
				<div style={{ height: '50px', width: '200px', backgroundColor: 'white' }}>03</div>
			</Spacer>
			,
			<Widget.Item
				style={{ backgroundColor: '#1C1C1E' }}
				tailwindCSS="hover:rounded-xl h-80 w-80"
				height="h-80"
				width="w-80"
			/>
			<GridContainer gap={2}>
				<GridItem tailwindCSS="bg-white" colSpan="sm:col-span-2" rowSpan="sm:row-span-2">
					Item 1
				</GridItem>
				<GridItem tailwindCSS="bg-white">Item 2</GridItem>
				<GridItem tailwindCSS="bg-white">Item 3</GridItem>
				<GridItem tailwindCSS="bg-white">Item 4</GridItem>
				<GridItem tailwindCSS="bg-white">Item 5</GridItem>
				<GridItem tailwindCSS="bg-white" colSpan="sm:col-span-2">
					Item 6
				</GridItem>
				<GridItem tailwindCSS="bg-white" colSpan="sm:col-span-2" rowSpan="sm:row-span-2">
					Item 7
				</GridItem>
				<GridItem tailwindCSS="bg-white">Item 8</GridItem>
				<GridItem tailwindCSS="bg-white">Item 9</GridItem>
				<GridItem tailwindCSS="bg-white">Item 10</GridItem>
				<GridItem tailwindCSS="bg-white">Item 11</GridItem>
				<GridItem tailwindCSS="bg-white">Item 12</GridItem>
				<GridItem tailwindCSS="bg-white" colSpan="sm:col-span-3">
					Item 13
				</GridItem>
			</GridContainer>
			<SkeletonCard />
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
