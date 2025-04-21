import styles from './MobileNav.module.css';
import { Search, Heart, ShoppingCart, User, Menu } from 'lucide-react';

export default function MobileNav() {
	return (
		<div className={styles.mobile_nav_container}>
			<div className={styles.mobile_nav_wrapper}>
				<nav className={styles.mobile_nav_content}>
					<button
						aria-label='Main menu'
						className={styles.side_buttons}>
						<Menu strokeWidth={3} />
					</button>
					<a
						href='/'
						aria-label='Wish list'
						className={styles.side_buttons}>
						<Heart />
					</a>
					<button
						aria-label='Search'
						className={styles.main_button}>
						<Search strokeWidth={3} />
					</button>
					<a
						href='/'
						aria-label='Shopping cart'
						className={styles.side_buttons}>
						<ShoppingCart />
					</a>
					<button
						aria-label='Account'
						className={styles.side_buttons}>
						<User />
					</button>
				</nav>
			</div>
		</div>
	);
}
