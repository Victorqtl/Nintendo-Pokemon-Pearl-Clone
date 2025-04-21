import styles from './Footer.module.css';
import LinkBar from './Linkbar/LinkBar';
import LegalBar from './LegalBar/LegalBar';
import NintendoLogo from '/nintendo-logo.png';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
	return (
		<footer className={styles.footer_container}>
			<div className={styles.social_media_wrapper}>
				<div className={styles.social_media_container}>
					<div className={styles.nintendo_logo_content}>
						<img
							src={NintendoLogo}
							alt='Nintendo logo'
							role='presentation'
						/>
					</div>
					<div className={styles.social_media_content}>
						<a
							aria-label='Nintendo on Facebook'
							href='/'>
							<Facebook
								size={35}
								strokeWidth={0}
							/>
						</a>
						<a
							aria-label='Nintendo on Instagram'
							href='/'>
							<Instagram
								size={35}
								color='white'
							/>
						</a>
						<a
							aria-label='Nintendo on Twitter'
							href='/'>
							<Twitter
								size={35}
								color='white'
							/>
						</a>
						<a
							aria-label='Nintendo on Youtube'
							href='/'>
							<Youtube
								size={35}
								color='white'
							/>
						</a>
					</div>
				</div>
			</div>

			<LinkBar />
			<LegalBar />
		</footer>
	);
}
