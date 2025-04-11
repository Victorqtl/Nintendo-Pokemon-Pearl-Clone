import styles from './rail.module.css';
import pokemonPearlDialgaAndPalkia from '@/assets/images/pokemon-pearl-dialga&palkia.jpeg';
import pokemonPearlDialgaVsPalkia from '@/assets/images/pokemon-pearl-diagavspalkia.jpeg';
import pokemonPearlPalkia from '@/assets/images/pokemon-pearl-palkia.jpeg';
import pokemonPearlPokeball from '@/assets/images/pokemon-pearl-pokeball.jpeg';
import pokemonPearlBeach from '@/assets/images/pokemon-pearl-beach.jpeg';
import pokemonPearlBattle from '@/assets/images/pokemon-pearl-fight.jpeg';
import pokemonPearlPachirisu from '@/assets/images/pokemon-pearl-pachirisu.jpeg';
import pokemonPearlMagma from '@/assets/images/pokemon-pearl-magma.jpeg';
import pokemonPearlLove from '@/assets/images/pokemon-pearl-love.jpeg';

interface RailItem {
	src: string;
	alt?: string;
	button?: boolean;
}

const railAssets: RailItem[] = [
	{ src: pokemonPearlPalkia, alt: 'Pokemon Shining Pearl logo with Palkia' },
	{ src: pokemonPearlDialgaAndPalkia, alt: 'Pokemon Shining Pearl logo, Dialga and Palkia', button: true },
	{ src: pokemonPearlDialgaVsPalkia, alt: 'Pokemon Shining Pearl, Dialga vs Palkia', button: false },
	{ src: pokemonPearlPokeball, alt: 'Pokemon Shining Pearl, Pokeballs in a suitcase' },
	{ src: pokemonPearlBeach, alt: 'Pokemon Shining Pearl, beach' },
	{ src: pokemonPearlBattle, alt: 'Pokemon Shining Pearl, battle' },
	{ src: pokemonPearlPachirisu, alt: 'Pokemon Shining Pearl, Pachirisu' },
	{ src: pokemonPearlMagma, alt: 'Pokemon Shining Pearl, magma decor' },
	{ src: pokemonPearlLove, alt: 'Pokemon Shining Pearl, Pikachu and Hoothoot send love' },
];

export default function Rail() {
	return (
		<div className={styles.rail_container}>
			{railAssets.map((asset, index) => (
				<button
					key={index}
					className={`${styles.rail_button} ${asset.button ? styles.rail_button_logo : ''}`}>
					<img
						src={asset.src}
						alt={asset.alt}
						className={styles.rail_image}
					/>
				</button>
			))}
		</div>
	);
}
