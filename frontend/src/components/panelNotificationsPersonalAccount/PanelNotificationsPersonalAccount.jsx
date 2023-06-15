import styles from './PanelNotificationsPersonalAccount.module.scss'

function PanelNotificationsPersonalAccount() {
	return (
		<>
		<div className={`${styles['setting_block__panel']} ${styles['setting_block__panel_mod3']}`}>
		<span className={`${styles['setting_block__text']} ${styles['setting_block__text_center']}`}>Настройка уведомлений</span>
	</div>
	<div className={`${styles['setting_block__panel']} ${styles['setting_block__panel_mod4']}`}>
		<div className={`${styles['setting_block__img']} ${styles['setting_block__img_margin']}`}>
			<img src="../img/pers-account/setting-block/telegram.svg" alt="Иконка телеграмма" className={styles.setting_block__svg}/>
		</div>
		<span className={styles.setting_block__text}>Подтвердите номер телефона</span>
		<div className={`${styles['setting_block__img']} ${styles['setting_block__img_margin']}`}>
			<img src="../img/pers-account/setting-block/close-cross.svg" alt="Иконка крестика" className={styles.setting_block__svg}/>
		</div>
	</div>
	<div className={`${styles['setting_block__panel']} ${styles['setting_block__panel_mod5']}`}>
		<div className={`${styles['setting_block__img']} ${styles['setting_block__img_margin']}`}>
			<img src="../img/pers-account/setting-block/pushnotifications.svg" alt="Иконка уведомлений" className={styles.setting_block__svg}/>
		</div>
		<span className={styles.setting_block__text}>PUSH-уведомления</span>
		<div className={`${styles['setting_block__img']} ${styles['setting_block__img_margin']}`}>
			<img src="../img/pers-account/setting-block/Checkmark.svg" alt="Иконка галочки" className={styles.setting_block__svg}/>
		</div>
	</div>
	<div className={`${styles['setting_block__panel']} ${styles['setting_block__panel_mod6']}`}>
		<div className={styles.setting_block__img}>
			<img src="../img/pers-account/setting-block/vk-social.svg" alt="Иконка вконтакте" className={styles.setting_block__svg}/>
		</div>
		<span className={styles.setting_block__text}>ВКонтакте бот</span>
		<div className={`${styles['toggle']} ${styles['toggle_grid1']}`}>
			<input className={`${styles['Public']} ${styles['toggle__checkbox']}`} id="Public" type="checkbox"/>
			<label className={styles.toggle__item} for="Public"></label>
		</div>
		<span className={`${styles['setting_block__text']} ${styles['setting_block__text_add1']}`}>Новые публикации</span>
		<div className={`${styles['toggle']} ${styles['toggle_grid2']}`}>
			<input className={`${styles['Raspis']} ${styles['toggle__checkbox']}`} id="Raspis" type="checkbox"/>
			<label className={styles.toggle__item} for="Raspis"></label>
		</div>
		<span className={`${styles['setting_block__text']} ${styles['setting_block__text_add2']}`}>Изменение в расписании</span>
		<div className={`${styles['toggle']} ${styles['toggle_grid3']}`}>
			<input className={`${styles['Comm']} ${styles['toggle__checkbox']}`} id="Comm" type="checkbox"/>
			<label className={styles.toggle__item} for="Comm"></label>
		</div>
		<span className={`${styles['setting_block__text']} ${styles['setting_block__text_add3']}`}>Ответ на комментарий</span>
		<div className={`${styles['setting_block__img']} ${styles['setting_block__img_grid']}`}>
			<img src="../img/pers-account/setting-block/close-cross.svg" alt="Иконка крестика" className={styles.setting_block__svg}/>
		</div>
		<button className={styles.setting_block__input_btn}>
			<img src="../img/pers-account/setting-block/arrowforward.svg" alt="Иконка отправки" className={styles.setting_block__svg}/>
		</button>
	</div>
		</>
	)
}

export default PanelNotificationsPersonalAccount
