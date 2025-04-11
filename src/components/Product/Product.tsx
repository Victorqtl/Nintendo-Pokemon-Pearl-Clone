import styles from './Product.module.css';
import Slider from './Slider/Slider';
import Rail from './Rail/Rail';
import { ChevronRight } from 'lucide-react';

export default function Product() {
	return (
		<section>
			<div>
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
			</div>
			<Slider />
			<Rail />
		</section>
	);
}
