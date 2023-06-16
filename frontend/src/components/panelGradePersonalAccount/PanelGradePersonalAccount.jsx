import styles from './PanelGradePersonalAccount.module.scss'
import { HrCourse } from '../ui/hr/HrVariables'
function PanelGradePersonalAccount() {
	return (
<>
				<div className={`${styles['setting_block__panel']} ${styles['setting_block__panel_mod7']}`}>
					<div className={styles.setting_block__panel_title}>
						<span className={styles.setting_block__title}>Оценка успеваемости</span>
					</div>
					<div className={styles.setting_block__panel_course}>
						<span className={`${styles['setting_block__course']} ${styles['setting_block__course1']}`}>1 курс</span>
						<span className={`${styles['setting_block__course']} ${styles['setting_block__course2']}`}>2 курс</span>
						<span className={`${styles['setting_block__course']} ${styles['setting_block__course3']}`}>3 курс</span>
						<span className={`${styles['setting_block__course']} ${styles['setting_block__course4']}`}>4 курс</span>
					</div>
					<div className={styles.setting_block__hr_block}>
						<HrCourse/>
					</div>

					<div className={styles.setting_block__panel_score}>
						<div className={`${styles['setting_block__block_lesson']} ${styles['setting_block__block_lesson_small']}`}>
							<div className={`${styles['setting_block__block_color']} ${styles['setting_block__block_color_green']}`}></div>
							<span className={styles.setting_block__lesson}>Математика</span>
							<span className={`${styles['setting_block__average_score']} ${styles['setting_block__average_score_green']}`}>4.9</span>
							<span className={`${styles['setting_block__percentage_visits']} ${styles['setting_block__percentage_visits_green']}`}>95%</span>
						</div>
						<div className={`${styles['setting_block__block_lesson']} ${styles['setting_block__block_lesson_small']}`}>
							<div className={`${styles['setting_block__block_color']} ${styles['setting_block__block_color_yellow']}`}></div>
							<span className={styles.setting_block__lesson}>Физика</span>
							<span className={`${styles['setting_block__average_score']} ${styles['setting_block__average_score_red']}`}>2.9</span>
							<span className={`${styles['setting_block__percentage_visits']} ${styles['setting_block__percentage_visits_green']}`}>76%</span>
						</div>						<div className={`${styles['setting_block__block_lesson']} ${styles['setting_block__block_lesson_small']}`}>
							<div className={`${styles['setting_block__block_color']} ${styles['setting_block__block_color_red']}`}></div>
							<span className={styles.setting_block__lesson}>Информатика</span>
							<span className={`${styles['setting_block__average_score']} ${styles['setting_block__average_score_red']}`}>2.5</span>
							<span className={`${styles['setting_block__percentage_visits']} ${styles['setting_block__percentage_visits_red']}`}>35%</span>
						</div>
						<div className={`${styles['setting_block__block_lesson']} ${styles['setting_block__block_lesson_medium']}`}>
							<div className={`${styles['setting_block__block_color']} ${styles['setting_block__block_color_green']}`}></div>
							<span className={styles.setting_block__lesson}>Информационные технологии</span>
							<span className={`${styles['setting_block__average_score']} ${styles['setting_block__average_score_green']}`}>4.7</span>
							<span className={`${styles['setting_block__percentage_visits']} ${styles['setting_block__percentage_visits_green']}`}>85%</span>
						</div>
						<div className={`${styles['setting_block__block_lesson']} ${styles['setting_block__block_lesson_medium']}`}>
							<div className={`${styles['setting_block__block_color']} ${styles['setting_block__block_color_yellow']}`}></div>
							<span className={styles.setting_block__lesson}>Правовая деятельность</span>
							<span className={`${styles['setting_block__average_score']} ${styles['setting_block__average_score_green']}`}>4.3</span>
							<span className={`${styles['setting_block__percentage_visits']} ${styles['setting_block__percentage_visits_red']}`}>25%</span>
						</div>
						<div className={`${styles['setting_block__block_lesson']} ${styles['setting_block__block_lesson_large']}`}>
							<div className={`${styles['setting_block__block_color']} ${styles['setting_block__block_color_red']}`}></div>
							<span className={styles.setting_block__lesson}>Правовое обеспечение профессиональной деятельности</span>
							<span className={`${styles['setting_block__average_score']} ${styles['setting_block__average_score_red']}`}>2.9</span>
							<span className={`${styles['setting_block__percentage_visits']} ${styles['setting_block__percentage_visits_red']}`}>32%</span>
						</div>
					</div>
				</div>	
</>
	)
}

export default PanelGradePersonalAccount
