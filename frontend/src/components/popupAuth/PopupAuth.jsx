import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../store/slices/authSlice.js';
import axios from 'axios';
import styles from './PopupAuth.module.scss'

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post('http://178.46.164.244:4444/auth/login', {
      email,
      password,
    });

    // Верните данные пользователя и токен из ответа сервера
    return {
      userData: response.data.user,
      token: response.data.token,
    };
  } catch (error) {
    // Обработайте ошибки, возникшие при авторизации
    console.error('Ошибка авторизации:', error);
    throw error;
  }
};

function PopupAuth() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isVisible, setIsVisible] = useState(true); // Добавьте состояние isVisible
  
    const handleLogin = async (e) => {
      e.preventDefault();
  
      try {
        const { userData, token } = await loginUser(email, password);
        dispatch(loginSuccess({ user: userData, token: token }));
  
        // Сохраните токен в localStorage и закройте окно PopupAuth
        localStorage.setItem('authToken', token);
        setIsVisible(false);
      } catch (error) {
        // Обработайте ошибки, возникшие при авторизации, например, показывая сообщ об ошибке
      }
    };
  
    // Используйте состояние isVisible для управления видимостью компонента PopupAuth
    const popupAuthStyle = isVisible ? '' : styles.popup_auth_hidden;
return (
<>
    <div className={`${styles.popup_wrapper} ${popupAuthStyle}`}></div>
    <div className={`${styles.popup_auth} ${popupAuthStyle}`}>
        <div className={styles.popup_auth__top_block}>
            <img className={styles.popup_auth__img_top} src="img/page1/Popup/triangle.svg" alt="Треугольник"/>
        </div>
     <div className={styles.popup_auth__bottom_block}>
        <button className={styles.popup_auth__cross_btn}>
            <img src="img/page1/Popup/cross.svg" alt="Иконка крестика" class="popup_auth__cross_svg"/>
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <h3 className={styles.popup_auth__text_input}>Пароль</h3>
        <input
          className={styles.popup_auth__input_password}
          type="password"
          minLength="4"
          maxLength="16"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input className={styles.popup_auth__input_submit} type="submit" value=" " />
      </form>
        <a href="#" className={styles.popup_auth__link_info}>Где взять логин и пароль?</a>
        </div>
    </div>
</>
    )
}

export default PopupAuth
