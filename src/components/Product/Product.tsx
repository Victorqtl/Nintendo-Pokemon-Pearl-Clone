import styles from './Product.module.css';
import Slider from './Slider/Slider';
import Dropdown from './Dropdown/Dropdown';
import PrimaryButton from '../ui/PrimaryButton/PrimaryButton';
import { ChevronRight, Heart, Tags, Download } from 'lucide-react';
import ESRB from '/ESRB-logo.png';

export default function Product() {
	return (
		<section className={styles.product_section}>
			<div className={styles.product_container}>
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
				<div className={styles.presentation_container}>
					<div className={styles.first_container}>
						<Slider />
						<div className={styles.esrb_container}>
							<img
								src={ESRB}
								alt='ESRB logo'
							/>
							<div className={styles.esrb_text_container}>
								<div>Mild Cartoon Violence</div>
								<div>Users Interact, In-Game Purchases</div>
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
								className={styles.heart_icon}
							/>
						</div>
						<PrimaryButton
							text={'Direct download'}
							icon={
								<Download
									color='white'
									strokeWidth={2.5}
								/>
							}
							size='xl'
						/>
						<a
							href='/'
							className={styles.redeem_content}>
							<Tags className={styles.tags_icon} />
							<p>Redeem a Nintendo Switch Game Voucher</p>
						</a>
						<p className={styles.learn_more_content}>
							<span>
								This item will be sent to your system automatically after purchase or Nintendo Switch
								Game Voucher redemption.
							</span>
							<a href=''>Learn more about vouchers</a>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
