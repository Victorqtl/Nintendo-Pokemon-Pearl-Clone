import styles from './header.module.css';
import NintendoLogo from '/nintendo-logo.png';
import NintendoStoreLogo from '/nintendo-store-logo.png';
import { Compass, Briefcase, ShieldQuestion, Search, Heart, ShoppingCart } from 'lucide-react';

export default function Header() {
	return (
		<nav
			className={styles.container}
			aria-label='Main navigation'>
			<header className={styles.header}>
				<div className={styles.header_left_content}>
					<div className={styles.logo_container}>
						<a
							href='/'
							aria-label='Nintendo Home'>
							<img
								src={NintendoLogo}
								alt='Nintendo logo'
								className={styles.logo}
							/>
						</a>
					</div>
					<div
						className={styles.left_buttons_container}
						role='navigation'
						aria-label='Main menu'>
						<button
							className={styles.left_button}
							aria-label='Explore'>
							<Compass
								strokeWidth={2.5}
								color='rgb(230, 0, 18)'
								size={16}
								aria-hidden='true'
							/>
							<span>Explore</span>
						</button>
						<button
							className={styles.left_button}
							aria-label='Shop'>
							<Briefcase
								strokeWidth={2.5}
								color='rgb(230, 0, 18)'
								size={16}
								aria-hidden='true'
							/>
							<span>Shop</span>
						</button>
						<button
							className={styles.left_button}
							aria-label='Support'>
							<ShieldQuestion
								strokeWidth={2.5}
								color='rgb(230, 0, 18)'
								size={16}
								aria-hidden='true'
							/>
							<span>Support</span>
						</button>
					</div>
				</div>

				<div className={styles.header_right_content}>
					<img
						src={NintendoStoreLogo}
						alt='Nintendo store logo'
						className={styles.store_logo}
					/>
					<div role='search'>
						<button
							className={styles.right_button}
							aria-label='Search'>
							<Search
								className={styles.right_search_icon}
								size={16}
								strokeWidth={3}
								aria-hidden='true'
							/>
							<span>Search</span>
						</button>
					</div>
					<button
						className={styles.right_button}
						aria-label='Favorites'>
						<Heart
							className={styles.right_icon}
							size={16}
							strokeWidth={2.5}
							aria-hidden='true'
						/>
					</button>
					<button
						className={styles.right_button}
						aria-label='Shopping cart'>
						<ShoppingCart
							className={styles.right_icon}
							size={16}
							strokeWidth={2.5}
							aria-hidden='true'
						/>
					</button>
					<button
						className={styles.connect_button}
						aria-label='Log in or sign up'>
						<span>Log in / Sign up</span>
					</button>
					<button
						aria-label='Change region'
						className={styles.region_selector}>
						<img
							src='https://assets.nintendo.com/image/upload/c_scale,w_24,q_auto/ncom/global/flags-change-region/FlagUsaIconRegionSelect.png'
							alt='Flag of Usa'
							className={styles.flag}
						/>
					</button>
				</div>
			</header>
		</nav>
	);
}
