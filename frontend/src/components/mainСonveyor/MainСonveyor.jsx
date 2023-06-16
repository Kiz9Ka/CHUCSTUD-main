import React, { useState, useEffect } from 'react';
import styles from './MainСonveyor.module.scss'
import PostPublication from '../postPublication/PostPublication'
import Publication from '../../components/publication/Publication'
import PostNotFound from '../postNotFound/PostNotFound';
function MainСonveyor({ showPostPublication }) {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);
	return (
		<div className={styles.main_conveyor}>
			<PostPublication show={showPostPublication} />
			{isAuthenticated ? <Publication /> : <PostNotFound />} 
		</div>
	)
}

export default MainСonveyor
