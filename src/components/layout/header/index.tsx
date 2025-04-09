import styles from './header.module.css';
import NintendoLogo from '/nintendo-logo.png';
import NintendoStoreLogo from '/nintendo-store-logo.png';
import UsaFlag from '/usa-flag.png';
import { Compass } from 'lucide-react';
import { Briefcase } from 'lucide-react';
import { ShieldQuestion } from 'lucide-react';
import { Search } from 'lucide-react';
import { Heart } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';

export default function Header() {
	return (
		<nav className={styles.container}>
			<header className={styles.header}>
				<div className={styles.header_left_content}>
					<div className={styles.logo_container}>
						<img
							src={NintendoLogo}
							alt='Nintendo logo'
							className={styles.logo}
						/>
					</div>
					<div className={styles.left_buttons_container}>
						<button className={styles.left_button}>
							<Compass
								strokeWidth={2.5}
								color='rgb(230, 0, 18)'
								size={16}
							/>
							<span>Explore</span>
						</button>
						<button className={styles.left_button}>
							<Briefcase
								strokeWidth={2.5}
								color='rgb(230, 0, 18)'
								size={16}
							/>
							<span>Shop</span>
						</button>
						<button className={styles.left_button}>
							<ShieldQuestion
								strokeWidth={2.5}
								color='rgb(230, 0, 18)'
								size={16}
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
					<search>
						<button className={styles.right_button}>
							<Search
								className={styles.right_search_icon}
								size={16}
								strokeWidth={3}
							/>
							<span>Search</span>
						</button>
					</search>
					<button className={styles.right_button}>
						<Heart
							className={styles.right_icon}
							size={16}
							strokeWidth={2.5}
						/>
					</button>
					<button className={styles.right_button}>
						<ShoppingCart
							className={styles.right_icon}
							size={16}
							strokeWidth={2.5}
						/>
					</button>
					<button className={styles.connect_button}>
						<span>Log in / Sign up</span>
					</button>
					<img
						src={UsaFlag}
						alt='Usa flag'
						className={styles.flag}
					/>
				</div>
			</header>
		</nav>
	);
}
