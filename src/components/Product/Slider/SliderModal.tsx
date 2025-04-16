import styles from './SliderModal.module.css';
import { useEffect } from 'react';
import Rail from '../Rail/Rail';
import { useSliderModal } from '../../../hook/useSliderModal';
import { ChevronRight, ChevronLeft, X } from 'lucide-react';

import pokemonPearlFirstTrailer from '@/assets/videos/pokemon-pearl-first-trailer.mp4';
import pokemonPearlSecondTrailer from '@/assets/videos/pokemon-pearl-second-trailer.mp4';
import pokemonPearlPalkia from '@/assets/images/pokemon-pearl-palkia.jpeg';
import pokemonPearlPokeball from '@/assets/images/pokemon-pearl-pokeball.jpeg';
import pokemonPearlBeach from '@/assets/images/pokemon-pearl-beach.jpeg';
import pokemonPearlBattle from '@/assets/images/pokemon-pearl-fight.jpeg';
import pokemonPearlPachirisu from '@/assets/images/pokemon-pearl-pachirisu.jpeg';
import pokemonPearlMagma from '@/assets/images/pokemon-pearl-magma.jpeg';
import pokemonPearlLove from '@/assets/images/pokemon-pearl-love.jpeg';

const sliderAssets = [
	{ type: 'image', src: pokemonPearlPalkia, alt: 'Pokemon Shining Pearl logo with Palkia' },
	{ type: 'video', src: pokemonPearlFirstTrailer },
	{ type: 'video', src: pokemonPearlSecondTrailer },
	{ type: 'image', src: pokemonPearlPokeball, alt: 'Pokemon Shining Pearl, Pokeballs in a suitcase' },
	{ type: 'image', src: pokemonPearlBeach, alt: 'Pokemon Shining Pearl, beach' },
	{ type: 'image', src: pokemonPearlBattle, alt: 'Pokemon Shining Pearl, battle' },
	{ type: 'image', src: pokemonPearlPachirisu, alt: 'Pokemon Shining Pearl, Pachirisu' },
	{ type: 'image', src: pokemonPearlMagma, alt: 'Pokemon Shining Pearl, magma decor' },
	{ type: 'image', src: pokemonPearlLove, alt: 'Pokemon Shining Pearl, Pikachu and Hoothoot send love' },
];

export default function ModalSlider() {
	const { isModalOpen, setIsModalOpen, currentIndex, setCurrentIndex } = useSliderModal();

	const nextSlide = () => {
		setCurrentIndex(currentIndex === sliderAssets.length - 1 ? 0 : currentIndex + 1);
	};
	const prevSlide = () => {
		setCurrentIndex(currentIndex === 0 ? sliderAssets.length - 1 : currentIndex - 1);
	};

	useEffect(() => {
		if (!isModalOpen) return;

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				setIsModalOpen(false);
			}
		};

		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [isModalOpen, setIsModalOpen]);

	if (!isModalOpen) return null;

	return (
		<div
			className={styles.modal_container}
			onClick={() => setIsModalOpen(false)}>
			<div
				onClick={e => e.stopPropagation()}
				className={styles.modal_content}>
				<button
					className={styles.modal_close_button}
					aria-label='Close gallery'
					onClick={() => setIsModalOpen(false)}>
					<X
						size={40}
						strokeWidth={2.5}
					/>
				</button>
				<div
					aria-label='Pokémon™ Shining Pearl gallery'
					aria-roledescription='carousel'
					className={styles.modal_medias_wrapper}>
					<div className={styles.chevron_left_container}>
						<button
							onClick={prevSlide}
							aria-label='Previous'
							className={styles.chevron_button}>
							<ChevronLeft className={styles.chevron_left} />
						</button>
					</div>
					<div
						className={styles.modal_medias_container}
						style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
						{sliderAssets.map((asset, index) => (
							<div
								key={index}
								className={styles.modal_media_content}
								aria-label={`Slide ${index + 1}`}>
								{asset.type === 'video' ? (
									<video
										src={asset.src}
										controls
									/>
								) : (
									<img
										src={asset.src}
										alt={asset.alt}
									/>
								)}
							</div>
						))}
					</div>
					<div className={styles.chevron_right_container}>
						<button
							onClick={nextSlide}
							aria-label='Next'
							className={styles.chevron_button}>
							<ChevronRight className={styles.chevron_right} />
						</button>
					</div>
				</div>
				<Rail />
			</div>
		</div>
	);
}
