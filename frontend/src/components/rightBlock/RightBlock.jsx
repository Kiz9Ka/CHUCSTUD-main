import React from 'react';
import styles from './RightBlock.module.scss'
import RightMenu from '../rightMenu/RightMenu'
import RightFilter from '../rightFilter/RightFilter'

function RightBlock({ togglePostCreateShow }) {
	return (
		<div className={styles.right_block}>
			<RightMenu togglePostCreateShow={togglePostCreateShow} />
			<RightFilter/>
		</div>
	)
}

export default RightBlock
