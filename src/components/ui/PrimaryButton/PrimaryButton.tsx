import styles from './PrimaryButton.module.css';
import { Download } from 'lucide-react';

export default function PrimaryButton() {
	return (
		<div className={styles.button_container}>
			<button className={styles.button_content}>
				<Download
					strokeWidth={2.5}
					className={styles.download_icon}
				/>
				<span>Direct download</span>
			</button>
		</div>
	);
}
