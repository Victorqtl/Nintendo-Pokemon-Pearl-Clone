import { createContext } from 'react';

interface SliderModalContextProps {
	isModalOpen: boolean;
	setIsModalOpen: (open: boolean) => void;
	currentIndex: number;
	setCurrentIndex: (index: number) => void;
}

export const SliderModalContext = createContext<SliderModalContextProps | undefined>(undefined);
