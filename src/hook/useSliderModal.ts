import { useContext } from 'react';
import { SliderModalContext } from '../context/SliderModalContext';

export const useSliderModal = () => {
	const context = useContext(SliderModalContext);
	if (!context) {
		throw new Error('useSliderModal doit être utilisé dans un SliderModalProvider');
	}
	return context;
};
