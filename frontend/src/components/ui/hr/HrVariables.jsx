import styles from './HrVariables.module.scss'
function HrNav() {
	return (
		<hr className={`${styles['separator']} ${styles['separator_margin']}`}/>
	)
}
function HrRight() {
	return (
		<hr className={`${styles['separator']} ${styles['separator_right']}`}/>
	)
}
function HrCourse() {
	return (
		<hr className={`${styles['separator']} ${styles['separator__course']}`}/>
	)
}
export {HrNav, HrRight, HrCourse}
