import styles from './slider.module.css';
import Rail from '../Rail/Rail';
import { useState } from 'react';

import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import pokemonPearlFirstTrailer from '@/assets/videos/pokemon-pearl-first-trailer.mp4';
import pokemonPearlSecondTrailer from '@/assets/videos/pokemon-pearl-second-trailer.mp4';
import pokemonPearlPalkia from '@/assets/images/pokemon-pearl-palkia.jpeg';
import pokemonPearlPokeball from '@/assets/images/pokemon-pearl-pokeball.jpeg';
import pokemonPearlBeach from '@/assets/images/pokemon-pearl-beach.jpeg';
import pokemonPearlBattle from '@/assets/images/pokemon-pearl-fight.jpeg';
import pokemonPearlPachirisu from '@/assets/images/pokemon-pearl-pachirisu.jpeg';
import pokemonPearlMagma from '@/assets/images/pokemon-pearl-magma.jpeg';
import pokemonPearlLove from '@/assets/images/pokemon-pearl-love.jpeg';

type MediaType = 'image' | 'video';

interface SlideItem {
	type: MediaType;
	src: string;
	alt?: string;
}

const sliderAssets: SlideItem[] = [
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

export default function Slider() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextSlide = () => {
		setCurrentIndex(prevIndex => (prevIndex === sliderAssets.length - 1 ? 0 : prevIndex + 1));
	};

	const prevSlide = () => {
		setCurrentIndex(prevIndex => (prevIndex === 0 ? sliderAssets.length - 1 : prevIndex - 1));
	};
	console.log(currentIndex);
	return (
		<div className={styles.container}>
			<div className={styles.slider_container}>
				<div
					className={styles.medias_container}
					style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
					{sliderAssets.map((asset, index) => (
						<div
							key={index}
							className={styles.media_content}>
							{asset.type === 'video' ? (
								<video
									src={asset.src}
									controls
									autoPlay></video>
							) : (
								<img
									src={asset.src}
									alt={asset.alt}
								/>
							)}
						</div>
					))}
				</div>
				<div className={styles.chevron_left_container}>
					<button
						onClick={() => prevSlide()}
						aria-label='Previous'
						className={styles.chevron_button}>
						<ChevronLeft className={styles.chevron_left} />
					</button>
				</div>
				<div className={styles.chevron_right_container}>
					<button
						onClick={() => nextSlide()}
						aria-label='Next'
						className={styles.chevron_button}>
						<ChevronRight className={styles.chevron_right} />
					</button>
				</div>
			</div>
			<Rail
				setCurrentIndex={setCurrentIndex}
				currentIndex={currentIndex}
			/>
		</div>
	);
}
