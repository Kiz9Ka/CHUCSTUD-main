import styles from './RightBlock.module.scss'
import RightMenu from '../rightMenu/RightMenu'
import RightFilter from '../rightFilter/RightFilter'

function RightBlock() {
	return (
		<div className={styles.right_block}>
			<RightMenu/>
			<RightFilter/>
		</div>
	)
}

export default RightBlock
