import styles from './Tag.module.css';

type Props = {
	text: string;
};

export default function Tag({ text }: Props) {
	return (
		<a
			href='/'
			title={text}
			className={styles.tag_content}>
			<span className={styles.tag_text}>{text}</span>
			<span className={styles.tag_background}></span>
		</a>
	);
}
