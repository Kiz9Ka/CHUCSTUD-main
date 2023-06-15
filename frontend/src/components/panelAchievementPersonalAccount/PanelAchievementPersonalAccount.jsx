import styles from './PanelAchievementPersonalAccount.module.scss'

function PanelAchievementPersonalAccount() {
	return (
<>
	<div className={`${styles['setting_block__panel']} ${styles['setting_block__panel_mod8']}`}>
		<div className={`${styles['setting_block__img']} ${styles['setting_block__img_active']}`}>
			<img src="../img/pers-account/header/logo.png" alt="Логотип"/>
		</div>
		<span className={`${styles['setting_block__text']} ${styles['setting_block__text_margin']}`}>Страница в работе, возвращайтесь позже:)</span>
	</div>
</>
	)
}

export default PanelAchievementPersonalAccount
