import styles from './Publication.module.scss'

function Publication() {
	return (
		<div className={styles.publication}>
			<section className={styles.publication__header}>
					<div className={styles.publication__header_icon}>
							<img src="img/page1/Main/avatar.svg" alt="Иконка Автора" className={styles.publication__svg}/>
					</div>
					<div className={styles.publication__info}>
							<h1 className={styles.publication__avtor_name}>Яковец Никита Владимирович</h1>
							<h2 className={styles.publication__data}>26.04.2023</h2>
					</div>
			</section>
			<section className={styles.publication__body}>
					<h3 className={styles.publication__avtor_text}>
						Дополнительный курс по изучение C++ с нуля
					</h3>
					<div className={styles.publication__img_container}>
							<img src="img/page1/Main/Post6.png" alt="Изображение" className={styles.publication__img}/>
					</div>
			</section>
			<section className={styles.publication__footer}>
					<button className={styles.publication__like_btn}>
							<img src="img/page1/Main/heart.svg" alt="Иконка сердца" className={styles.publication__svg_icon}/>
							<h4 className={styles.publication__text}>37</h4>
					</button>
					<button className={styles.publication__comment_btn}>
							<img src="img/page1/Main/comment.svg" alt="Иконка комментария" className={styles.publication__svg_icon}/>
							<h4 className={styles.publication__text}>21</h4>
					</button>
					<button className={styles.publication__favorites_btn}>
							<img src="img/page1/Main/bookmark.svg" alt="Иконка избранное" className={styles.publication__svg_icon}/>
					</button>
					<div className={styles.publication__counter}>
							<img src="img/page1/Main/eye.svg" alt="Иконка глаза" className={styles.publication__svg_icon}/>
							<h4 className={`${styles['publication__text']} ${styles['publication__text_small']}`}>357</h4>
					</div>
			</section>
		</div>
	)
}

export default Publication
