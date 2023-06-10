import styles from './Stay.module.css';

const Stay = props => (
	<div>
		<img className={styles.photo} src={props.photo} alt="Apartment" />
		<div className={styles.info}>
			{props.superHost && <p className={styles['super-host']}>SUPER HOST</p>}
			<p>
				{props.type} {props.beds && `. ${props.beds} beds`}
			</p>
			<div className={styles.stars}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<title>star</title>
					<path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
				</svg>
				<p>{props.rating}</p>
			</div>
		</div>
		<p className={styles.title}>{props.title}</p>
	</div>
);

export default Stay;
