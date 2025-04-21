import styles from './Linkbar.module.css';
import ESRBPrivacyLogo from '/ESRB-privacy-certfied-logo.svg';

export default function LinkBar() {
	return (
		<section className={styles.linkbar_container}>
			<div className={styles.linkbar_wrapper}>
				<div className={styles.linkbar_content}>
					<div className={`${styles.linkbar} ${styles.row2}`}>
						<h2>
							<a href='/'>About Nintendo</a>
						</h2>
						<ul>
							<li>
								<a href='/'>Careers</a>
							</li>
							<li>
								<a href='/'>Corporate Social Responsibility</a>
							</li>
						</ul>
					</div>
					<div className={`${styles.linkbar} ${styles.row2}`}>
						<h2>
							<a href='/'>Shop</a>
						</h2>
						<ul>
							<li>
								<a href='/'>Games</a>
							</li>
							<li>
								<a href='/'>Hardware</a>
							</li>
							<li>
								<a href='/'>Merchandise</a>
							</li>
							<li>
								<a href='/'>Sales & deads</a>
							</li>
							<li>
								<a href='/'>Exclusives</a>
							</li>
							<li>
								<a href='/'>Online</a>
							</li>
							<li>
								<a href='/'>Nintendo Retail Locations</a>
							</li>
						</ul>
					</div>
					<div className={`${styles.linkbar} ${styles.row2}`}>
						<h2>
							<a href='/'>Order</a>
						</h2>
						<ul>
							<li>
								<a href='/'>Order details</a>
							</li>
							<li>
								<a href='/'>Shipping info</a>
							</li>
							<li>
								<a href='/'>Refunds and returns</a>
							</li>
							<li>
								<a href='/'>FAQ</a>
							</li>
						</ul>
					</div>
					<div className={`${styles.linkbar} ${styles.row2}`}>
						<h2>
							<a href='/'>Support</a>
						</h2>
						<ul>
							<li>
								<a href='/'>Nintendo Switch</a>
							</li>
							<li>
								<a href='/'>Nintendo Account</a>
							</li>
							<li>
								<a href='/'>Other Systems</a>
							</li>
							<li>
								<a href='/'>Repairs</a>
							</li>
							<li>
								<a href='/'>Nintendo product recycling</a>
							</li>
							<li>
								<a href='/'>Warranty</a>
							</li>
							<li>
								<a href='/'>Licensed product information</a>
							</li>
						</ul>
					</div>
					<div className={styles.linkbar}>
						<h2>
							<a href='/'>Parents</a>
						</h2>
						<ul>
							<li>
								<a href='/'>Info for parents</a>
							</li>
							<li>
								<a href='/'>Parental controls</a>
							</li>
						</ul>
					</div>
					<div className={styles.linkbar}>
						<h2>
							<a href='/'>Privacy</a>
						</h2>
						<ul>
							<li>
								<a href='/'>Privacy policy</a>
							</li>
							<li>
								<a href='/'>Cookies and interest-based ads</a>
							</li>
						</ul>
					</div>
					<div className={styles.linkbar}>
						<h2>
							<a href='/'>Community</a>
						</h2>
						<ul>
							<li>
								<a href='/'>Community guidelines</a>
							</li>
							<li>
								<a href='/'>Online safety</a>
							</li>
						</ul>
					</div>
					<div className={`${styles.linkbar} ${styles.row2}`}>
						<h2>
							<a href='/'>Documents & policies</a>
						</h2>
						<ul>
							<li>
								<a href='/'>Health & safety precautions</a>
							</li>
							<li>
								<a href='/'>Wireless regulatory Info</a>
							</li>
							<li>
								<a href='/'>Supply chain transparency</a>
							</li>
						</ul>
					</div>
				</div>
				<div className={styles.esrb_container}>
					<a
						href='/'
						title='ESRB Privacy Certified'
						aria-label='ESRB Privacy Certified'>
						<img
							src={ESRBPrivacyLogo}
							alt=''
						/>
					</a>
				</div>
			</div>
		</section>
	);
}
