import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAllArticles } from './store/slices/FeedSlice'

const AppS = () => {
	const dispatch = useDispatch()

	const posts = useSelector(state => state.feed.posts)

	useEffect(() => {
		axios.get('http://178.46.164.244:4444/posts').then(response => {
			dispatch(setAllArticles(response.data))
		})
	}, [dispatch])

	return (
		<>
			<h1>Origato</h1>
			<ul>
				{posts.map((post, index) => (
					<li key={index}>
						<h2>{post.title}</h2>
						<p>{post.content}</p>
					</li>
				))}
			</ul>
		</>
	);
	
}
export default AppS
