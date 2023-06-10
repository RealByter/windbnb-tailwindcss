import styles from './Stays.module.css';
import stays from '../assets/stays.json';
import Stay from './Stay';

const Stays = () => (
	<div className={styles.container}>
		<div className={styles.general}>
			<h2>Stays in Finland</h2>
			<p>12+ stays</p>
		</div>
		<div className={styles.stays}>
			{stays.map((stay, index) => (
				<Stay key={index} {...stay} />
			))}
		</div>
	</div>
);

export default Stays;
