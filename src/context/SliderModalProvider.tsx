import { useState, ReactNode } from 'react';
import { SliderModalContext } from './SliderModalContext';

export const SliderModalProvider = ({ children }: { children: ReactNode }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);

	return (
		<SliderModalContext.Provider value={{ isModalOpen, setIsModalOpen, currentIndex, setCurrentIndex }}>
			{children}
		</SliderModalContext.Provider>
	);
};
