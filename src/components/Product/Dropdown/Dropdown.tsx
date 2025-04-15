import { useState, useEffect, useRef } from 'react';
import styles from './Dropdown.module.css';
import { ChevronDown } from 'lucide-react';

export default function Dropdown() {
	const [openDropdown, setOpenDropdwon] = useState(false);
	const dropdownDivRef = useRef<HTMLDivElement>(null);
	const dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (openDropdown && dropdownDivRef.current) {
			dropdownDivRef.current.focus();
		}
	}, [openDropdown]);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setOpenDropdwon(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [openDropdown]);

	return (
		<div className={styles.container}>
			<div className={styles.label_container}>
				<p>Select an edition</p>
			</div>
			<div className={styles.dropdown_relative}>
				<div
					ref={dropdownRef}
					onClick={() => setOpenDropdwon(!openDropdown)}
					className={`${styles.dropdown_container} ${openDropdown ? styles.dropdown_open : ''}`}>
					<div className={styles.dropdown_close_content}>
						<div className={styles.version_container}>
							<div className={styles.version_text_content}>
								<p className={styles.version_text}>Digital</p>
								<p className={styles.game_name}>Pokémon™ Shining Pearl</p>
							</div>
							<button className={styles.dropdown_button}>
								<ChevronDown
									strokeWidth={3}
									className={`${styles.chevron} ${openDropdown ? styles.rotate_chevron : ''}`}
								/>
							</button>
						</div>
					</div>
					{openDropdown && (
						<div className={styles.dropdown_open_content}>
							<div
								tabIndex={0}
								className={styles.open_version_container}
								ref={dropdownDivRef}
								onMouseEnter={e => e.currentTarget.focus()}>
								<div>
									<p className={styles.version_text}>Digital - $59.99</p>
									<p className={styles.game_name}>Pokémon™ Shining Pearl</p>
								</div>
								<div>
									<p className={styles.version_price}>$59.99</p>
								</div>
							</div>
							<div
								tabIndex={0}
								className={`${styles.open_version_container} ${styles.border_radius}`}
								onMouseEnter={e => e.currentTarget.focus()}>
								<div>
									<p className={styles.version_text}>Physical - $59.99</p>
									<p className={styles.game_name}>Pokémon™ Shining Pearl</p>
								</div>
								<div>
									<p className={styles.version_price}>$59.99</p>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
