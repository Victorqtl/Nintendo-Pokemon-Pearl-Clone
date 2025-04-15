import styles from './styles/app.module.css';
import Header from './components/layout/Header/Header';
import Product from './components/Product/Product';
import { Truck } from 'lucide-react';
import { Coins } from 'lucide-react';
import ModalSlider from './components/Product/Slider/ModalSlider';

export default function App() {
	return (
		<div className={styles.container}>
			<Header />
			<main>
				<div className={styles.top_bar_container}>
					<div className={styles.top_bar_shipping}>
						<Truck className={styles.top_bar_truck} />
						<p>
							<span>Free shipping</span> on orders $50 or more.
							<span className={styles.top_bar_span_underline}> Restrictions apply</span>
						</p>
					</div>
					<div className={styles.top_bar_separation}></div>
					<div className={styles.top_bar_points}>
						<Coins className={styles.top_bar_coins} />
						<p>
							Redeem your <span>My Nintendo Platinum Points</span> for
							<span className={styles.top_bar_span_underline}> fun rewards</span>
						</p>
					</div>
				</div>
				<Product />
			</main>
			<ModalSlider />
		</div>
	);
}
