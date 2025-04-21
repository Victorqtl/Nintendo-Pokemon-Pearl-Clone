import styles from './Warning.module.css';

export default function Warning() {
	return (
		<section className={styles.warning_container}>
			<div className={styles.warning_content}>
				<p>
					WARNING: If you have epilepsy or have had seizures or other unusual reactions to flashing lights or
					patterns, consult a doctor before playing video games. All users should read the Health and Safety
					Information available in the system settings before using this software.
				</p>
				<p>
					**Nintendo Switch Online membership (sold separately) and Nintendo Account required for online play.
					This game does not support Save Data Cloud backup. Not available in all countries. Internet access
					required for online features. Terms apply. nintendo.com/switch-online
				</p>
				<p>
					*Additional games and systems required. Sold separately. **Software update required to use certain
					features while playing with others, such as communication, trading and battles. Any Nintendo Switch
					Online membership (sold separately) and Nintendo Account required for online features. Not available
					in all countries. Internet access required for online features. Terms apply.
					nintendo.com/switch-online The in-game language choice for Spanish is Español (España).
				</p>
				<p>
					©2021 Pokémon. ©1995–2021 Nintendo / Creatures Inc. / GAME FREAK inc. Developed by ILCA, Inc.
					Pokémon and Nintendo Switch are trademarks of Nintendo. ©Nintendo.
				</p>
			</div>
		</section>
	);
}
