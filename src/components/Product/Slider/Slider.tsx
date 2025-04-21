import styles from './Slider.module.css';
import Rail from '../Rail/Rail';
import { useSliderModal } from '../../../hook/useSliderModal';
import { ChevronRight, ChevronLeft, Play } from 'lucide-react';
import pokemonPearlDialgaAndPalkia from '@/assets/images/pokemon-pearl-dialga&palkia.jpeg';
import pokemonPearlDialgaVsPalkia from '@/assets/images/pokemon-pearl-diagavspalkia.jpeg';
import pokemonPearlPalkia from '@/assets/images/pokemon-pearl-palkia.jpeg';
import pokemonPearlPokeball from '@/assets/images/pokemon-pearl-pokeball.jpeg';
import pokemonPearlBeach from '@/assets/images/pokemon-pearl-beach.jpeg';
import pokemonPearlBattle from '@/assets/images/pokemon-pearl-fight.jpeg';
import pokemonPearlPachirisu from '@/assets/images/pokemon-pearl-pachirisu.jpeg';
import pokemonPearlMagma from '@/assets/images/pokemon-pearl-magma.jpeg';
import pokemonPearlLove from '@/assets/images/pokemon-pearl-love.jpeg';

interface SlideItem {
	src: string;
	alt: string;
	button?: boolean;
}

const sliderAssets: SlideItem[] = [
	{ src: pokemonPearlPalkia, alt: 'Pokemon Shining Pearl logo with Palkia' },
	{ src: pokemonPearlDialgaAndPalkia, alt: 'Pokemon Shining Pearl logo, Dialga and Palkia', button: true },
	{ src: pokemonPearlDialgaVsPalkia, alt: 'Pokemon Shining Pearl, Dialga vs Palkia', button: true },
	{ src: pokemonPearlPokeball, alt: 'Pokemon Shining Pearl, Pokeballs in a suitcase' },
	{ src: pokemonPearlBeach, alt: 'Pokemon Shining Pearl, beach' },
	{ src: pokemonPearlBattle, alt: 'Pokemon Shining Pearl, battle' },
	{ src: pokemonPearlPachirisu, alt: 'Pokemon Shining Pearl, Pachirisu' },
	{ src: pokemonPearlMagma, alt: 'Pokemon Shining Pearl, magma decor' },
	{ src: pokemonPearlLove, alt: 'Pokemon Shining Pearl, Pikachu and Hoothoot send love' },
];

export default function Slider() {
	const { setIsModalOpen, currentIndex, setCurrentIndex } = useSliderModal();

	const nextSlide = () => {
		setCurrentIndex(currentIndex === sliderAssets.length - 1 ? 0 : currentIndex + 1);
	};

	const prevSlide = () => {
		setCurrentIndex(currentIndex === 0 ? sliderAssets.length - 1 : currentIndex - 1);
	};
	return (
		<>
			<div className={styles.container}>
				<div
					className={styles.slider_container}
					aria-label='Pokémon™ Shining Pearl gallery'
					aria-roledescription='carousel'>
					<div
						className={styles.medias_container}
						style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
						{sliderAssets.map((asset, index) => (
							<div
								key={index}
								onClick={() => setIsModalOpen(true)}
								className={styles.media_content}
								aria-label={`Slide ${index + 1}`}>
								<img
									src={asset.src}
									alt={asset.alt}
								/>
								{asset.button && (
									<button
										aria-label='Play Video'
										aria-disabled='false'
										className={styles.play_container}>
										<Play
											aria-hidden='true'
											className={styles.play_icon}
										/>
									</button>
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
				<Rail />
				<div className={styles.voucher_container}>
					<p className={styles.voucher_text}>Game Voucher eligible</p>
				</div>
			</div>
		</>
	);
}
