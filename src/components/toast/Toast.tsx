import { ToastProps } from '../../hooks/useToast';
import Close from '../../icons/Close';
import styles from './Toast.module.css';

interface ToastCompProps extends ToastProps {
	onClose: () => void;
}

export const Toast: React.FC<ToastCompProps> = ({
	title,
	description,
	status,
	isClosable,
	position,
	onClose,
	icon,
}) => {
	return (
		<div className={`${styles.toast} ${styles[`toast--${status}`]} ${styles[`toast--${position}`]}`}>
			<button className={`${styles.closeButton}`} onClick={onClose} style={{ display: isClosable ? 'block' : 'none' }}>
				<Close />
			</button>
			<div className={styles.toastHeading}>
				{icon}
				<p className={`${styles.title}`}>{title}</p>
			</div>
			<p className={`${styles.description}`}>{description}</p>
		</div>
	);
};
