import styles from './PostPublication.module.scss'

function PostPublication() {
	return (
		<div className={styles.post_publication}>
			<div className={styles.post_publication__header_icon}>
					<img src="img/page1/Main/avatar.svg" alt="Иконка Автора" className={styles.post_publication__svg}/>
			</div>
			<textarea id="post-text" className={styles.post_publication__input} placeholder="Текст вашей публикации..."></textarea>
				<button className={styles.post_publication__clip}>
						<img src="img/page1/Main/clip.svg" alt="Иконка крестика" className={styles.post_publication__clip_svg}/>
				</button>
		</div>
	)
}

export default PostPublication
