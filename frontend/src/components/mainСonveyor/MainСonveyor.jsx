import styles from './MainСonveyor.module.scss'
import PostPublication from '../postPublication/PostPublication'
import Publication from '../../components/publication/Publication'

function MainСonveyor() {
	return (
		<div className={styles.main_conveyor}>
			<PostPublication/>
			<Publication/>
		</div>
	)
}

export default MainСonveyor
