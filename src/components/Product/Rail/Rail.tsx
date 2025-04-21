import styles from './rail.module.css';
import { useSliderModal } from '../../../hook/useSliderModal';
import pokemonPearlDialgaAndPalkia from '@/assets/images/pokemon-pearl-dialga&palkia.jpeg';
import pokemonPearlDialgaVsPalkia from '@/assets/images/pokemon-pearl-diagavspalkia.jpeg';
import pokemonPearlPalkia from '@/assets/images/pokemon-pearl-palkia.jpeg';
import pokemonPearlPokeball from '@/assets/images/pokemon-pearl-pokeball.jpeg';
import pokemonPearlBeach from '@/assets/images/pokemon-pearl-beach.jpeg';
import pokemonPearlBattle from '@/assets/images/pokemon-pearl-fight.jpeg';
import pokemonPearlPachirisu from '@/assets/images/pokemon-pearl-pachirisu.jpeg';
import pokemonPearlMagma from '@/assets/images/pokemon-pearl-magma.jpeg';
import pokemonPearlLove from '@/assets/images/pokemon-pearl-love.jpeg';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface RailItem {
	src: string;
	alt?: string;
	button?: boolean;
}

const railAssets: RailItem[] = [
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

export default function Rail() {
	const { currentIndex, setCurrentIndex } = useSliderModal();

	const railRef = useRef<HTMLDivElement>(null);
	const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
	const [isAtStart, setIsAtStart] = useState(true);
	const [isAtEnd, setIsAtEnd] = useState(false);

	const checkScrollPosition = () => {
		const el = railRef.current;
		if (!el) return;
		setIsAtStart(el.scrollLeft === 0);
		setIsAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
	};

	useEffect(() => {
		checkScrollPosition();
	}, []);

	const handleScroll = () => {
		checkScrollPosition();
	};

	const scrollToStart = () => {
		railRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
	};

	const scrollToEnd = () => {
		railRef.current?.scrollTo({ left: railRef.current.scrollWidth, behavior: 'smooth' });
	};

	const handleButtonClick = (index: number) => {
		setCurrentIndex(index);
		const button = buttonRefs.current[index];
		if (button) {
			button.scrollIntoView({
				behavior: 'smooth',
				block: 'nearest',
				inline: 'center',
			});
		}
	};

	return (
		<div className={styles.rail_wrapper}>
			{!isAtStart && (
				<button
					onClick={scrollToStart}
					aria-label='Previous Page'
					className={styles.rail_previous_button}>
					<ChevronLeft className={styles.rail_chevron} />
				</button>
			)}
			<div
				ref={railRef}
				onScroll={handleScroll}
				className={styles.rail_container}>
				{railAssets.map((asset, index) => (
					<button
						aria-label={`See Slide ${index + 1}`}
						ref={el => {
							buttonRefs.current[index] = el;
						}}
						onClick={() => handleButtonClick(index)}
						key={index}
						className={`${styles.rail_button} ${asset.button ? styles.rail_button_logo : ''} ${
							currentIndex === index ? styles.active : ''
						}`}>
						<img
							src={asset.src}
							alt={asset.alt}
							className={styles.rail_image}
						/>
						{asset.button && (
							<div className={styles.play_container}>
								<Play className={styles.play_icon} />
							</div>
						)}
					</button>
				))}
			</div>
			{!isAtEnd && (
				<button
					onClick={scrollToEnd}
					aria-label='Next Page'
					className={styles.rail_next_button}>
					<ChevronRight className={styles.rail_chevron} />
				</button>
			)}
		</div>
	);
}
