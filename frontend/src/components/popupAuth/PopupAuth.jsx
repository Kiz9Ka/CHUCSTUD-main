import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../store/slices/authSlice';
import axios from 'axios';
import styles from './PopupAuth.module.scss';

const loginUser = async (login, password) => {
  try {
    const response = await axios.post('http://178.46.164.244:4444/auth/login', {
      login,
      password,
    });
    return {
      userData: response.data.user,
      token: response.data.token,
    };
  } catch (error) {
    console.error('Ошибка авторизации:', error);
    throw error;
  }
};

function PopupAuth({ isPopupAuthVisible, closePopup }) {
  const dispatch = useDispatch();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { userData, token } = await loginUser(login, password);
      dispatch(loginSuccess({ user: userData, token: token }));

      localStorage.setItem('authToken', token);
      window.location.reload(false);
      closePopup();
    } catch (error) {
      console.error('Ошибка авторизации:', error);
      alert('Ошибка авторизации');
    }
  };

  const popupAuthStyle = isPopupAuthVisible ? '' : styles.popup_auth_hidden;

  return (
    <>
      <div className={`${styles.popup_wrapper} ${popupAuthStyle}`} onClick={closePopup}></div>
      <div className={`${styles.popup_auth} ${popupAuthStyle}`}>
        <div className={styles.popup_auth__top_block}>
          <img className={styles.popup_auth__img_top} src="img/page1/Popup/triangle.svg" alt="Треугольник" />
        </div>
        <div className={styles.popup_auth__bottom_block}>
          <button className={styles.popup_auth__cross_btn} onClick={closePopup}>
            <img src="img/page1/Popup/cross.svg" alt="Иконка крестика" />
          </button>
          <h2 className={styles.popup_auth__text_title}> Авторизация</h2>
          <form onSubmit={handleLogin} className={styles.popup_auth__form_auth}>
            <h3 className={styles.popup_auth__text_input}>Логин</h3>
            <input
              className={styles.popup_auth__input_text}
              type="text"
              minLength="4"
              maxLength="16"
              required
              autoFocus
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
            <h3 className={styles.popup_auth__text_input}>Пароль</h3>
            <input
              className={styles.popup_auth__input_password}
              type="password"
              minLength="5"
              maxLength="16"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input className={styles.popup_auth__input_submit} type="submit" value=" " />
          </form>
          <a href="#" className={styles.popup_auth__link_info}>
            Где взять логин и пароль?
          </a>
        </div>
      </div>
    </>
  );
}

export default PopupAuth;
