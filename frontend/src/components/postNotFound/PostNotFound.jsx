import styles from './PostNotFound.module.scss'

function PostNotFound() {
	return (
		<div className={`${styles['setting_block__panel']} ${styles['setting_block__panel_mod8']}`}>
			<div>
				<img src="../img/pers-account/header/logo.png" alt="Логотип"/>
			</div>
			<span className={`${styles['setting_block__text']} ${styles['setting_block__text_margin']}`}>Вам необходимо авторизоваться</span>
	</div>
	)
}

export default PostNotFound
