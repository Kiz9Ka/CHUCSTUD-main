import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header';
import MainContainer from '../../components/mainContainer/MainContainer';
import PopupAuth from '../../components/popupAuth/PopupAuth';

function Main() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
	
  useEffect(() => {
		const token = localStorage.getItem('authToken');
    if (token) {
			setIsAuthenticated(true);
    }
  }, []);
	
	const [isPopupAuthVisible, setIsPopupAuthVisible] = useState(!isAuthenticated);
  const openPopupAuth = () => {
		if (!isAuthenticated) {
			setIsPopupAuthVisible(true);
		} else {
			navigate('/personalAccount');
		}	
  };
	const closePopup = () => {
		setIsPopupAuthVisible(false);
	};
  return (
    <>
      <Header openPopupAuth={openPopupAuth} />
      {!isAuthenticated && <PopupAuth isPopupAuthVisible={isPopupAuthVisible} closePopup={closePopup}/>}
      <MainContainer />
    </>
  );
}

export default Main;