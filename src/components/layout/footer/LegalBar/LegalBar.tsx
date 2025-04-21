import styles from './LegalBar.module.css';

export default function LegalBar() {
	return (
		<section className={styles.legalbar_container}>
			<div className={styles.legalbar_wrapper}>
				<div className={styles.legalbar_content}>
					<div className={styles.legalbar_enterprise}>
						<span>© Nintendo. </span>
						<span>Games are property of their respective owners. </span>
						<span>Nintendo of America Inc. </span>
						<span>Headquarters are in Redmond, Washington, USA</span>
					</div>
					<div className={styles.legalbar_links}>
						<a href='/'>Contact us</a>
						<a href='/'>Website feedback</a>
						<a href='/'>Terms of Use</a>
					</div>
					<a
						href=''
						className={styles.legalbar_language}>
						<span>
							<img
								src='https://assets.nintendo.com/image/upload/c_scale,w_24,q_auto/ncom/global/flags-change-region/FlagUsaIconRegionSelect.png'
								alt='Flag of Usa'
							/>
						</span>
						<span>English (United States)</span>
					</a>
				</div>
			</div>
		</section>
	);
}
