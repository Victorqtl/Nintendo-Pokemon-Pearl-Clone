import { useState } from 'react';
import styles from './Description.module.css';
import PrimaryButton from '../ui/PrimaryButton/PrimaryButton';
import { Plus } from 'lucide-react';

export default function Description() {
	const [expandedParagraph, setExpandedParagraph] = useState(false);
	return (
		<section className={styles.description_container}>
			<div className={styles.description_content}>
				<div className={styles.description_text}>
					<h2 className={styles.description_title}>
						Catch, train, and battle with your Pokémon on a journey to try to become the Pokémon League
						Champion!
					</h2>
					<div className={styles.description_paragraph_container}>
						<div
							className={
								expandedParagraph
									? `${styles.description_paragraph_content} ${styles.description_paragraph_content_expanded}`
									: `${styles.description_paragraph_content} ${styles.description_paragraph_content_collapsed}`
							}>
							<p className={styles.description_paragraph}>
								Welcome to the Sinnoh region! Rich in nature and with mighty Mount Coronet at its heart,
								Sinnoh is a land of many myths passed down through the ages. You’ll choose either
								Turtwig, Chimchar, or Piplup to be your first partner Pokémon and then set off on your
								journey to try to become the Champion of the Pokémon League. Along the way, you’ll run
								into the mysterious organization Team Galactic, and be able to encounter the Legendary
								Pokémon Palkia.
								<br />
								<br />
								Explore the Grand Underground, connect with friends, and find rare Pokémon!
								<br />
								<br />
								Use the Explorer Kit you’ll receive during your adventure to visit the Grand
								Underground! Here, dig up Pokémon Fossils and valuable treasure, including statues for
								your very own Secret Base. You can also visit places called Pokémon Hideaways, where you
								can find Pokémon that live in a variety of different environments—there are some Pokémon
								that can only be found in these Pokémon Hideaways. Embark on a Grand Underground
								adventure with other players through the local* or online communication** of your
								Nintendo Switch system!
								<br />
								<br />
								Put on a performance with Pokémon in Super Contest Shows
								<br />
								<br />
								Super Contest Shows are popular events in the Sinnoh region, each put on by four
								performers and their partner Pokémon, who work together to dance and show off their
								performance skills. You can prepare your Pokémon for your grand performance by giving
								them snacks, called Poffins, and teaching them impressive moves. Using Capsule
								Decoration, you can place Stickers to customize the effects that appear when your
								Pokémon comes out of its Poké Ball™ for battles or Super Contest Shows. Choose a
								category like coolness, cuteness, or cleverness, and then tap along to the beat and put
								on a show!
							</p>
						</div>
						<button
							onClick={() => setExpandedParagraph(!expandedParagraph)}
							className={styles.paragraph_button}>
							<Plus
								size={26}
								strokeWidth={4}
							/>
							{!expandedParagraph ? 'Read more' : 'Read less'}
						</button>
						<p className={styles.button_under_line}>Software description provided by the publisher.</p>
					</div>
					<PrimaryButton
						text={'Explore this games official website'}
						size='md'
					/>
				</div>
				<div className={styles.description_image}>
					<img
						src='https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_400/ncom/en_US/games/switch/p/pokemon-shining-pearl-switch/description-char'
						alt='Turtwig, Chimchar and Piplup'
					/>
				</div>
			</div>
		</section>
	);
}
