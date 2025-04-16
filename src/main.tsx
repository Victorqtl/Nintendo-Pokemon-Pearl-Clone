import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './App.tsx';
import { SliderModalProvider } from './context/SliderModalProvider.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<SliderModalProvider>
			<App />
		</SliderModalProvider>
	</StrictMode>
);
