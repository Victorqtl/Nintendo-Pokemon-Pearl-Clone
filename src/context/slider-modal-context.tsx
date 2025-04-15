import { createContext, useContext, useState, ReactNode } from 'react';

interface SliderModalContextProps {
	isModalOpen: boolean;
	setIsModalOpen: (open: boolean) => void;
	currentIndex: number;
	setCurrentIndex: (index: number) => void;
}

const SliderModalContext = createContext<SliderModalContextProps | undefined>(undefined);

export const SliderModalProvider = ({ children }: { children: ReactNode }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);

	return (
		<SliderModalContext.Provider value={{ isModalOpen, setIsModalOpen, currentIndex, setCurrentIndex }}>
			{children}
		</SliderModalContext.Provider>
	);
};

export const useSliderModal = () => {
	const context = useContext(SliderModalContext);
	if (!context) {
		throw new Error('useSliderModal doit être utilisé dans un SliderModalProvider');
	}
	return context;
};
