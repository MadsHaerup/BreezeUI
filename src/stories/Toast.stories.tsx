import { Toast } from '../components/toast/Toast';
import useToast from '../hooks/useToast';
import { Meta, StoryObj } from '@storybook/react';
import Info from '../icons/Info';

const meta: Meta<typeof Toast> = {
	title: 'Components/Toast/Toast',
	tags: ['autodocs'],
	component: Toast,
	parameters: {
		layout: 'fullscreen',
		controls: { expanded: true, key: false },
	},
};
export default meta;

type Story = StoryObj<typeof Toast>;

const ToastWithHooks = (...args: any[]) => {
	const [showToast, toasts, setToasts] = useToast();

	const handleButtonClick = () => {
		showToast({
			key: Date.now(),
			title: args[0].title,
			description: args[0].description,
			status: args[0].status,
			duration: args[0].duration,
			isClosable: args[0].isClosable,
			position: args[0].position,
			icon: args[0].icon,
		});
	};
	return (
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
					icon={<Info />}
				/>
			))}
		</div>
	);
};

export const Primary: Story = {
	args: {
		title: 'Account created.',
		description: "We've created your account for you.",
		status: 'success',
		duration: 9000,
		isClosable: true,
		position: 'top-right',
	},
	render: args => <ToastWithHooks {...args} />,
};
