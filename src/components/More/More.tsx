import styles from './More.module.css';
import { Cross, Heart } from 'lucide-react';

type Games = {
	image: string;
	name: string;
	date: string;
	demo?: boolean;
	price: string;
	type: string;
};

const games: Games[] = [
	{
		image: 'https://assets.nintendo.com/image/fetch/q_auto/f_auto/https://atum-img-lp1.cdn.nintendo.net/i/c/8b3506046aa84e548cb830dd5db106fe_1024',
		name: 'Pokémon Mystery Dungeon™: Rescue Team DX',
		date: '3/6/20',
		demo: true,
		price: '$59.99',
		type: 'Games',
	},
	{
		image: 'https://assets.nintendo.com/image/fetch/q_auto/f_auto/https://atum-img-lp1.cdn.nintendo.net/i/c/41a16db9edea4cb8a3bdcd6114dda560_1024',
		name: 'Detective Pikachu™ Returns',
		date: '10/6/23',
		price: '$49.99',
		type: 'Games',
	},
	{
		image: 'https://assets.nintendo.com/image/fetch/q_auto/f_auto/https://atum-img-lp1.cdn.nintendo.net/i/c/f87f7c9b778547fe953c7b5f035c19ba_1024',
		name: 'Pokémon™ Legends: Arceus',
		date: '1/28/22',
		price: '$59.99',
		type: 'Games',
	},
	{
		image: 'https://assets.nintendo.com/image/fetch/q_auto/f_auto/https://atum-img-lp1.cdn.nintendo.net/i/c/6a40090d342f47a8b34ae66b167cea15_1024',
		name: 'New Pokémon Snap™',
		date: '4/30/21',
		price: '$59.99',
		type: 'Games',
	},
	{
		image: 'https://assets.nintendo.com/image/fetch/q_auto/f_auto/https://atum-img-lp1.cdn.nintendo.net/i/c/c34aa7c693cd4e20bd2f1cd31f42e71c_1024',
		name: 'Pokémon™ Shield',
		date: '11/15/19',
		price: '$59.99',
		type: 'Games',
	},
	{
		image: 'https://assets.nintendo.com/image/fetch/q_auto/f_auto/https://atum-img-lp1.cdn.nintendo.net/i/c/1fc71707124c4264a269404583d3bdfa_1024',
		name: 'Pokémon™: Let’s Go, Eevee!',
		date: '11/16/18',
		demo: true,
		price: '$59.99',
		type: 'Games',
	},
	{
		image: 'https://assets.nintendo.com/image/fetch/q_auto/f_auto/https://atum-img-lp1.cdn.nintendo.net/i/c/b348a28e215a43acbb7a6d61820aa651_1024',
		name: 'Super Mario RPG™',
		date: '11/17/23',
		price: '$59.99',
		type: 'Games',
	},
];

export default function More() {
	return (
		<section className={styles.more_container}>
			<div className={styles.more_content}>
				<h2>More like this</h2>
				<div className={styles.rail_container}>
					<div className={styles.rail_content}>
						{games.map(game => (
							<div className={styles.card_content}>
								<a
									href='/'
									className={styles.card_link}>
									<div className={styles.card_image}>
										<img
											src={game.image}
											alt=''
										/>
									</div>
									<div className={styles.card_details}>
										<div className={styles.card_top}>
											<h3>{game.name}</h3>
											<div className={styles.card_date}>
												<p>{game.date}</p>
											</div>
										</div>

										<div
											className={
												game.demo
													? `${styles.card_demo} ${styles.card_demo_active}`
													: styles.card_demo
											}>
											{game.demo && <p>Free demo</p>}
										</div>

										<div className={styles.card_price}>
											<p>{game.price}</p>
										</div>
										<div className={styles.card_bottom}>
											<div className={styles.card_type}>
												<Cross className={styles.card_cross_icon} />
												<p>{game.type}</p>
											</div>
											<button className={styles.heart_button}>
												<Heart className={styles.card_heart_icon} />
											</button>
										</div>
									</div>
								</a>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
