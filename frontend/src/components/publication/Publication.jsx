import styles from './Publication.module.scss'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAllArticles } from '../../store/slices/FeedSlice.js'

function Publication() {
	const dispatch = useDispatch()
	const posts = useSelector(state => state.feed.posts)
	useEffect(() => {
		
		axios.get('http://178.46.164.244:4444/posts').then(response => {
			dispatch(setAllArticles(response.data))
		})
	}, [dispatch])
	return (
		<>
		{posts.map((post) => (
		<div className={styles.publication} key={post.id} >
			<section className={styles.publication__header}>
					<div className={styles.publication__header_icon}>
							<img src="img/page1/Main/avatar.svg" alt="Иконка Автора" className={styles.publication__svg}/>
					</div>
					<div className={styles.publication__info}>
							<h1 className={styles.publication__avtor_name}>{post.user.fullName}</h1>
							<h2 className={styles.publication__data}>{post.createdAt}</h2>
					</div>
			</section>
			<section className={styles.publication__body}>
					<h2 className={styles.publication__avtor_text_title}>{post.title}</h2>
					<h3 className={styles.publication__avtor_text}>{post.text}</h3>
					{post.imageUrl && (
					<div className={styles.publication__img_container}>
							<img src={post.imageUrl} alt="Изображение" className={styles.publication__img}/>
					</div>
					)}
			</section>
			<section className={styles.publication__footer}>
					<button className={styles.publication__like_btn}>
							<img src="img/page1/Main/heart.svg" alt="Иконка сердца" className={styles.publication__svg_icon}/>
							<h4 className={styles.publication__text}>{post.commentsCount}</h4>
					</button>
					<button className={styles.publication__comment_btn}>
							<img src="img/page1/Main/comment.svg" alt="Иконка комментария" className={styles.publication__svg_icon}/>
							<h4 className={styles.publication__text}>{post.likesCount}</h4>
					</button>
					<button className={styles.publication__favorites_btn}>
							<img src="img/page1/Main/bookmark.svg" alt="Иконка избранное" className={styles.publication__svg_icon}/>
					</button>
					<div className={styles.publication__counter}>
							<img src="img/page1/Main/eye.svg" alt="Иконка глаза" className={styles.publication__svg_icon}/>
							<h4 className={`${styles['publication__text']} ${styles['publication__text_small']}`}>{post.viewsCount}</h4>
					</div>
			</section>
		</div>
		))}
		</>
	)
}

export default Publication
