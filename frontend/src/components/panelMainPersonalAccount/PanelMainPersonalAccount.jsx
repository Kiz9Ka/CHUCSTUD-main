import styles from './PanelMainPersonalAccount.module.scss'

function PanelMainPersonalAccount() {
	return (
	<>
		<div className={`${styles['setting_block__panel']} ${styles['setting_block__panel_mod0']}`}>
		<div className={styles.setting_block__img}>
			<img src="../img/pers-account/setting-block/avatar.svg" alt="Иконка профиля" className={`${styles['setting_block__svg']} ${styles['setting_block__svg_big']}`}/>
		</div>
		<span className={`${styles['setting_block__text']} ${styles['setting_block__text_small']}`}>Кирилл Алексеевич Звягинцев</span>
		<span className={styles.setting_block__text_telephone}>+7(996)2320114</span>
		<button className={styles.setting_block__btn_panel}>Обновить фотографию</button>
	</div>
	<div className={`${styles['setting_block__panel']} ${styles['setting_block__panel_mod1']}`}>
		<div className={styles.setting_block__img}>
			<img src="../img/pers-account/setting-block/telephone.svg" alt="Иконка телефона" className={styles.setting_block__svg}/>
		</div>
		<span className={styles.setting_block__text}>Подтвердите номер телефона</span>
		<button className={styles.setting_block__btn_panel}>Подтвердить номер тел.</button>
	</div>
	<div className={`${styles['setting_block__panel']} ${styles['setting_block__panel_mod2']}`}>
		<div className={styles.setting_block__img}>
			<img src="../img/pers-account/setting-block/key.svg" alt="Иконка ключа" className={styles.setting_block__svg}/>
		</div>
		<span className={styles.setting_block__text}>Обновить пароль</span>
		<div className={styles.input}>
			<input className={styles.input__text} type="text" placeholder="Новый пароль"/>
			<input className={styles.input__text} type="text" placeholder="Повторите пароль"/>
		</div>
		<button className={styles.setting_block__input_btn}>
			<img src="../img/pers-account/setting-block/arrowforward.svg" alt="Иконка отправки" className={styles.setting_block__svg}/>
		</button>
	</div>
	</>
	)
}

export default PanelMainPersonalAccount
