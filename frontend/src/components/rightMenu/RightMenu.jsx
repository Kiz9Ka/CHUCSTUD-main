import React from 'react';
import styles from './RightMenu.module.scss'
import { HrRight } from '../ui/hr/HrVariables'

function RightMenu({ togglePostCreateShow }) {

	return (
	<div className={styles.right_menu} >
		<div className={styles.right_menu__text_wrapper}>
				<h3 className={styles.right_menu__text}>Публикации</h3>
				<button className={styles.right_menu__plus_btn} onClick={togglePostCreateShow} ><img src="img/page1/Right-menu/plus.svg" alt="Иконка плюса"
								className={styles.right_menu__img}/> </button>
		</div>
		<ul className={styles.right_menu__list}>
				<li className={styles.right_menu__list_item}>Преподаватели</li>
				<li className={styles.right_menu__list_item}>Мероприятия</li>
		</ul>
		<HrRight/>
		<div className={styles.right_menu__bottom_menu}>
				<h3 className={styles.right_menu__text_list}>Список преподавателей</h3>
				<ul className={styles.right_menu__list_teacher}>
						<li className={styles.right_menu__item_teacher}> <img src="img/page1/Right-menu/avatar.svg" alt="Иконка преподавателя" className={styles.right_menu__teacher_img}/>Звягинцев К.А.</li>
						<li className={styles.right_menu__item_teacher}> <img src="img/page1/Right-menu/avatar.svg" alt="Иконка преподавателя" className={styles.right_menu__teacher_img}/>Юдина А.А.</li>
						<li className={styles.right_menu__item_teacher}> <img src="img/page1/Right-menu/avatar.svg" alt="Иконка преподавателя" className={styles.right_menu__teacher_img}/>Попов А.Э.</li>
						<li className={styles.right_menu__item_teacher}> <img src="img/page1/Right-menu/avatar.svg" alt="Иконка преподавателя" className={styles.right_menu__teacher_img}/>Мальцев А.П.</li>
						<li className={styles.right_menu__item_teacher}> <img src="img/page1/Right-menu/avatar.svg" alt="Иконка преподавателя" className={styles.right_menu__teacher_img}/>Баранов К.О.</li>
				</ul>
		</div>
	</div>
	)
}

export default RightMenu
