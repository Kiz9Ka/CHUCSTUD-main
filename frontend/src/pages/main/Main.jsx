import React, { useState, useEffect } from 'react';
import Header from '../../components/header/Header'
import MainContainer from '../../components/mainContainer/MainContainer'
import PopupAuth from '../../components/popupAuth/PopupAuth'
function Main() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);
	return (
		<>
		<Header />
		{!isAuthenticated && <PopupAuth />}
		<MainContainer/>
		</>
	)
}

export default Main
