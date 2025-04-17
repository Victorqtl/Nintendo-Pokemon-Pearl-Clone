import styles from './About.module.css';
import Tag from '../ui/Tag/Tag';
import ESRB from '/ESRB-logo.png';

import {
	Database,
	Gamepad,
	UsersRound,
	Cross,
	Joystick,
	Building,
	Wrench,
	Globe,
	CalendarDays,
	Settings,
} from 'lucide-react';

type TagsProps = { name: string }[];
type DetailsItem = {
	icon: React.ReactNode;
	name: string;
	description?: string;
	link?: string[];
	learnMore?: boolean;
	esrb?: boolean;
};

const tags: TagsProps = [
	{ name: 'Role playing' },
	{ name: 'Character customization' },
	{ name: 'Raise your stats' },
	{ name: 'Compete online' },
	{ name: 'Meet up & play together' },
	{ name: 'Play together on multiple consoles' },
];

const detailsItems: DetailsItem[] = [
	{
		icon: <Database className={styles.details_icon} />,
		name: 'Game fil size',
		description: '6.9 GB',
	},
	{
		icon: <Gamepad className={styles.details_icon} />,
		name: 'Supported play modes',
		description: 'TV mode Tabletop mode, Handheld mode',
	},
	{
		icon: <UsersRound className={styles.details_icon} />,
		name: 'No. of players',
		link: ['Single System (1)', 'Local wireless (2-8)', 'Online (1-16)'],
	},
	{
		icon: <Cross className={styles.details_icon} />,
		name: 'Genre',
		link: ['Role playing'],
	},
	{
		icon: (
			<img
				src='/nintendo_switch_logo.svg'
				aria-hidden='true'
				role='presentation'></img>
		),
		name: 'Nintendo Switch Online',
		link: ['Online play'],
		description:
			'Play online, access classic NES™ and Super NES™ games, and more with a Nintendo Switch Online membership.',
		learnMore: true,
	},
	{
		icon: <Joystick className={styles.details_icon} />,
		name: 'System',
		link: ['Nintendo Switch'],
		description: 'Which system(s) will play this game?',
		learnMore: true,
	},
	{
		icon: <Building className={styles.details_icon} />,
		name: 'Publisher',
		link: ['Nintendo'],
	},
	{
		icon: <Wrench className={styles.details_icon} />,
		name: 'Developer',
		link: ['ILCA'],
	},
	{
		icon: <Globe className={styles.details_icon} />,
		name: 'Supported languages',
		description:
			'English, French, German, Italian, Japanese, Korean, Simplified Chinese, Spanish, Traditional Chinese',
	},
	{
		icon: <CalendarDays className={styles.details_icon} />,
		name: 'Release date',
		description: 'November 19, 2021',
	},
	{
		icon: <Settings className={styles.details_icon} />,
		name: 'ESRB rating',
		esrb: true,
	},
];

export default function About() {
	return (
		<section className={styles.about_container}>
			<div className={styles.about_content}>
				<div className={styles.tags_container}>
					<h2>Related tags</h2>
					<div className={styles.tags_list}>
						{tags.map(tag => (
							<Tag text={`${tag.name}`} />
						))}
					</div>
				</div>
				<div className={styles.details_container}>
					<div className={styles.details_title}>
						<h2>About this item</h2>
					</div>
					<div className={styles.details_content}>
						{detailsItems.map((item, index) => (
							<div
								key={index}
								className={styles.details_item}>
								{item.icon}
								<h3>{item.name}</h3>
								{(item.link || item.description || item.learnMore) && (
									<div className={styles.details_description}>
										{item.link && (
											<div className={styles.details_link}>
												{item.link.map((desc, i) => (
													<a key={i}>{desc}</a>
												))}
											</div>
										)}
										{(item.description || item.learnMore) && (
											<p className={styles.details_description_paragraph}>
												{item.description && <span>{item.description}</span>}
												{item.learnMore && <a>Learn more</a>}
											</p>
										)}
									</div>
								)}
								{item.esrb && (
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
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
