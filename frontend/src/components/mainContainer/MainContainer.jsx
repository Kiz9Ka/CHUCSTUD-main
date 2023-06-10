import styles from './MainContainer.module.scss'
import Navbar from '../../components/navbar/Navbar'
import MainСonveyor from '../../components/mainСonveyor/MainСonveyor'
import RightBlock from '../../components/rightBlock/RightBlock'

function MainContainer() {
	return (
		<div className={styles.main_container}>
			<Navbar/>
			<MainСonveyor/>
			<RightBlock/>
		</div>
	)
}

export default MainContainer
