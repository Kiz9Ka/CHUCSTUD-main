import styles from './RightFilter.module.scss'

function RightFilter() {
	return (
	<div className={styles.right_filter}>
		<button className={styles.filter_btn}>
				<img src="img/page1/Right-menu/fire.svg" alt="Иконка огня" className={styles.filter_btn__icon}/>
				<span className={styles.filter_btn__text}>Сначала актуальное</span>
				<img src="img/page1/Right-menu/downarrow.svg" alt="Иконка стрелки вниз"	className={styles.filter_btn__icon_drop}/>
		</button>
	</div>
	)
}

export default RightFilter
