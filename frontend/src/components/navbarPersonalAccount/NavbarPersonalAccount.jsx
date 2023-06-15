import { HrNav } from '../ui/hr/HrVariables'
import styles from './NavbarPersonalAccount.module.scss'
import { Link } from 'react-router-dom';

function NavbarPersonalAccount() {
	return (
<nav className={`${styles['navbar']} ${styles['navbar_grid']}`}>
		<ul className={styles.navbar__menu_btn}>
				<li className={styles.navbar__btn}>
						<img src="../img/pers-account/navbar/account.svg" alt="Иконка Личный кабинет" className={`${styles['navbar__svg']} ${styles['navbar__svg_medium']}`}/>
						<Link to="/personalAccount/PanelMain" className={styles.navbar__text}>Личный кабинет</Link>
				</li>
				<li className={styles.navbar__btn}>
						<img src="../img/pers-account/navbar/achevmens.svg" alt="Иконка Успеваемость" className={`${styles['navbar__svg']} ${styles['navbar__svg_medium']}`}/>
						<Link to="/personalAccount/PanelGrade" className={styles.navbar__text}>Успеваемость</Link>
				</li>
				<li className={styles.navbar__btn}>
						<img src="../img/pers-account/navbar/notyfi-setings.svg" alt="Иконка Настройка уведомлений" className={`${styles['navbar__svg']} ${styles['navbar__svg_medium']}`}/>
						<Link to="/personalAccount/PanelNotifications" className={styles.navbar__text}>Уведомления</Link>
				</li>
				<li className={styles.navbar__btn}>
						<img src="../img/pers-account/navbar/achivments.svg" alt="Иконка Список достижений" className={`${styles['navbar__svg']} ${styles['navbar__svg_medium']}`}/>
						<Link to="/personalAccount/PanelAchievement" className={styles.navbar__text}>Достижения</Link>
				</li>
		</ul>
		<HrNav/>
		<ul className={styles.navbar__about_btn}>
				<li className={styles.navbar__text_btn}> <a href="https://vk.com/theevilniga" className={styles.navbar__text_link}>Автор</a></li>
				<li className={styles.navbar__text_btn}> <a href="https://www.chuc.ru/" className={styles.navbar__text_link}>Сайт колледжа</a></li>
				<li className={styles.navbar__text_btn}>
					 <button className={styles.navbar__link_btn}>Ещё
					 <img src="../img/pers-account/navbar/Group.svg" alt="Иконка стрелки вниз"
					  className={`${styles['navbar__svg']} ${styles['navbar__svg_small']}`}/> </button>
				</li>
		</ul>
</nav>
	)
}

export default NavbarPersonalAccount
