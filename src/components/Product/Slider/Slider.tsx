import styles from './slider.module.css';
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
	return (
		<div className={styles.container}>
			<div className={styles.slider_container}>
				<div className={styles.chevron_left_container}>
					<button className={styles.chevron_button}>
						<ChevronLeft className={styles.chevron_left} />
					</button>
				</div>
				<div className={styles.chevron_right_container}>
					<button className={styles.chevron_button}>
						<ChevronRight className={styles.chevron_right} />
					</button>
				</div>
				{sliderAssets.map((asset, index) =>
					asset.type === 'video' ? (
						<video
							src={asset.src}
							key={index}></video>
					) : (
						<img
							src={asset.src}
							alt={asset.alt}
							key={index}
						/>
					)
				)}
			</div>
		</div>
	);
}
