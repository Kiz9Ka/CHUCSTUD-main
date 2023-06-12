import React, { useState } from 'react';
import styles from './MainContainer.module.scss'
import Navbar from '../../components/navbar/Navbar'
import MainСonveyor from '../../components/mainСonveyor/MainСonveyor'
import RightBlock from '../../components/rightBlock/RightBlock'

function MainContainer() {
	
	const [show, setShow] = useState(false);
	function togglePostCreateShow() {
    setShow(!show);
  }
	return (
		<div className={styles.main_container}>
			<Navbar/>
			<MainСonveyor showPostPublication={show} />
			<RightBlock togglePostCreateShow={togglePostCreateShow} />
		</div>
	)
}

export default MainContainer
