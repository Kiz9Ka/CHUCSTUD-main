import styles from './Navbar.module.scss'
import { HrNav } from '../ui/hr/HrVariables'

function Navbar() {
	return (
			<nav className={styles.navbar}>
			<ul className={styles.navbar__menu_btn}>
					<li className={styles.navbar__btn}>
							<img src="img/page1/Left-nav/newspaper.svg" alt="Иконка Публикации" className={styles.navbar__svg}/>
							<a href="#" className={styles.navbar__text}> Публикации</a>
					</li>
					<li className={styles.navbar__btn}>
							<img src="img/page1/Left-nav/leaderboard.svg" alt="Иконка Доска лидеров" className={styles.navbar__svg}/>
							<a href="#" className={styles.navbar__text}> Доска лидеров</a>
					</li>
					<li className={styles.navbar__btn}>
							<img src="img/page1/Left-nav/gamepad.svg" alt="Иконка Мини-игры" className={styles.navbar__svg}/>
							<a href="#" className={styles.navbar__text}> Мини-игры</a>
					</li>
					<li className={styles.navbar__btn}>
							<img src="img/page1/Left-nav/bookmark.svg" alt="Иконка Избранное" className={styles.navbar__svg}/>
							<a href="#" className={styles.navbar__text}> Избранное</a>
					</li>
			</ul>
			<HrNav/>
			<ul className={styles.navbar__about_btn}>
					<li className={styles.navbar__text_btn}><a href="https://vk.com/theevilniga" className={styles.navbar__text_link}>Автор</a>
					</li>
					<li className={styles.navbar__text_btn}><a href="https://www.chuc.ru/" className={styles.navbar__text_link}>Сайт колледжа</a>
					</li>
					<li className={styles.navbar__text_btn}>
						<button className={styles.navbar__link_btn}>Ещё <img src="img/page1/Left-nav/downarrow.svg" alt="Иконка стрелки вниз" className={`${styles['navbar__svg']} ${styles['navbar__svg_small']}`}/></button>
					</li>
			</ul>
		</nav>
	)
}

export default Navbar
