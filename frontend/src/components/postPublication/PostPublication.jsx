import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addArticle } from '../../store/slices/createSlice.js';
import styles from './PostPublication.module.scss';

function PostPublication({ show }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        title: title,
        text: text,
      };
      if (file) {
        data.file = file;
      }

      const authToken = localStorage.getItem('authToken');
      const response = await axios.post('http://178.46.164.244:4444/posts', data, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-Type': 'application/json',
        },
      });

      dispatch(addArticle(response.data));
      alert('Публикация успешно создана');
			window.location.reload(false);
    } catch (error) {
      console.error('Ошибка при публикации поста:', error.response.data);
      alert('Не удалось создать публикацию');
    }
  };

  const textareaRef = useRef();
  const handleInput = () => {
    const textarea = textareaRef.current;
    textarea.style.height = 0;
    textarea.style.height = textarea.scrollHeight + 'px';
  };
  const fileInputRef = useRef();

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const fileName = e.target.value.split('\\').pop();
    setFile(e.target.files[0]);
    alert(`Вы выбрали файл: ${fileName}`);
  };

	return (
		<div
			className={`${styles.post_publication} ${
				!show ? styles.post_publication__hidden : ''
			}`}
		>
			<div className={styles.post_publication__header}>
				<div className={styles.post_publication__header_icon}>
					<img
						src='img/page1/Main/avatar.svg'
						alt='Иконка Автора'
						className={styles.post_publication__svg}
					/>
				</div>
				<h3 className={styles.publication__avtor_name}>Имя</h3>
			</div>
			<form onSubmit={handleSubmit}>
				<textarea
					className={styles.post_publication__input}
					value={title}
					maxLength={100}
					placeholder='Заголовок'
					onChange={e => setTitle(e.target.value)}
				></textarea>
				<textarea
					className={styles.post_publication__input}
					value={text}
					onInput={handleInput}
					ref={textareaRef}
					placeholder='Текст'
					onChange={e => setText(e.target.value)}
				></textarea>
				<div className={styles.post_publication__footer}>
					<button className={styles.post_publication__clip}>
						<img
							src='img/page1/Main/clip.svg'
							alt='Иконка скрепки'
							className={styles.post_publication__svg}
							onClick={handleUploadClick}
						/>
						<input
							type='file'
							ref={fileInputRef}
							onChange={handleFileChange}
							style={{ display: 'none' }}
						/>
					</button>
					<button
						type="submit"
						className={styles.post_publication__input_btn}
					>
						<img
							src='../img/pers-account/setting-block/arrowforward.svg'
							alt='Иконка отправки'
							className={styles.post_publication__input_btn}
						/>
					</button>
				</div>
			</form>
		</div>
	);
}	

export default PostPublication
