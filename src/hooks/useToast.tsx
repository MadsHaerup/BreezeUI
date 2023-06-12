import React, { ReactElement } from 'react';
import { useState } from 'react';

export interface ToastProps {
	key?: number;
	title?: string;
	description?: string;
	status?: 'success' | 'error' | 'warning' | 'info';
	duration?: number;
	isClosable?: boolean;
	position?: 'top-right' | 'bottom-right' | 'top-left' | 'bottom-left' | 'top-center' | 'bottom-center';
	icon?: ReactElement;
}

type ShowToast = (toast: ToastProps) => void;

const useToast = (): [ShowToast, ToastProps[], React.Dispatch<React.SetStateAction<ToastProps[]>>] => {
	const [toasts, setToasts] = useState<ToastProps[]>([]);

	const showToast: ShowToast = toast => {
		setToasts(currentToasts => [...currentToasts, toast]);
		setTimeout(() => {
			setToasts(currentToasts => currentToasts.filter(item => item.key !== toast.key));
		}, toast.duration);
	};

	return [showToast, toasts, setToasts];
};

export default useToast;
