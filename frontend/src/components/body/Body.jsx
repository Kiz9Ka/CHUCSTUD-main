import styles from './Header.module.scss'

function Header({ openPopupAuth }) {

	return (
		<header className={styles.header}>
			<div className={styles.header__logo}>
				<a href='#' className={styles.header__link}>
					<img src='img/page1/Header/logo.png' alt='CHUCSTUD лого' />
				</a>
			</div>
			<div className={`${styles['search']} ${styles['search_margin']}`}>
				<span className={styles.search__icon}>
					<img src='img/page1/Header/scope.svg' alt='Иконка лупы' />
				</span>
				<input className={styles.search__input} type='text' placeholder='Поиск' />
			</div>
			<button className={styles.header__notify_btn}>
				<img
					src='img/page1/Header/notifications.svg'
					alt='Иконка уведомлений'
					className={styles.header__svg_notify}
				/>
			</button>
			<button className={`${styles['header__profile_btn']} ${styles['header__profile_btn_margin']}`} onClick={openPopupAuth}>
				<img
					src='img/page1/Header/avatar.svg'
					alt='Иконка профиля'
					className={styles.header__svg_profile}
				/>
			</button>
		</header>
	)
}

export default Header
