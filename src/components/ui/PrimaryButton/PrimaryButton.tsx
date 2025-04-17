import styles from './PrimaryButton.module.css';
import { ReactNode } from 'react';

type Props = {
	text: string;
	icon?: ReactNode;
	size: string;
};

export default function PrimaryButton({ text, icon, size }: Props) {
	return (
		<div
			className={
				size === 'md' ? `${styles.button_container} ${styles.button_container_md}` : styles.button_container
			}>
			<button
				className={
					size === 'xl'
						? `${styles.button_content} ${styles.button_content_xl}`
						: `${styles.button_content} ${styles.button_content_md}`
				}>
				{icon && icon}
				<span>{text}</span>
			</button>
		</div>
	);
}
