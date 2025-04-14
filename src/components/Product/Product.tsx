import styles from './Product.module.css';
import Slider from './Slider/Slider';
import { ChevronRight, Heart } from 'lucide-react';
import ESRB from '/public/ESRB-logo.png';
import Dropdown from './Dropdown/Dropdown';

export default function Product() {
	return (
		<section className={styles.product_section}>
			<nav>
				<ol className={styles.list_container}>
					<li className={styles.list_content}>
						<a href='/'>Store</a>
						<ChevronRight
							size={14}
							strokeWidth={3}
							color='#dadada'
						/>
					</li>
					<li className={styles.list_content}>
						<a href='/'>Games</a>
						<ChevronRight
							size={14}
							strokeWidth={3}
							color='#dadada'
						/>
					</li>
					<li className={styles.list_content}>
						<span>Pokémon™ Shining Pearl</span>
					</li>
				</ol>
			</nav>
			<div className={styles.first_container}>
				<Slider />

				<div className={styles.esrb_container}>
					<img
						src={ESRB}
						alt='ESRB logo'
					/>
					<div>
						<div className={styles.esrb_text_container}>
							<p>Mild Cartoon Violence</p>
							<p>Users Interact, In-Game Purchases</p>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.second_container}>
				<div>
					<h1>Pokémon™ Shining Pearl</h1>
				</div>
				<div className={styles.version_container}>
					<div className={styles.version_text}>
						<p>Version</p>
					</div>
					<div className={styles.console_text}>
						<p>Nintendo Switch</p>
					</div>
				</div>
				<Dropdown />
				<div className={styles.price}>
					<span>$59.99</span>
					<Heart
						color='#e60012'
						strokeWidth={3}
					/>
				</div>
			</div>
		</section>
	);
}
