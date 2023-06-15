import styles from './HeaderPersonalAccount.module.scss'
import { useNavigate } from 'react-router-dom';


function HeaderPersonalAccount() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
	
	return (
		<header className={`${styles['header']} ${styles['header_grid']}`}>
		<button className={styles.header__back_btn} onClick={handleGoBack}>
			<img src="../img/pers-account/header/back.svg" alt="Иконка назад" className={styles.header__svg_back}/>
		</button>
			<div className={`${styles['header__logo']} ${styles['header__logo_margin']}`}>
					<a href="http://178.46.164.244:3000/">
							<img src="../img/page1/Header/logo.png" alt="CHUCSTUD лого"/>
					</a>
			</div>
			<button className={styles.header__profile_btn}>
					<img src="../img/pers-account/header/Avatar.svg" alt="Иконка профиля" className={styles.header__svg_profile}/>
			</button>
	</header>
	)
}

export default HeaderPersonalAccount
