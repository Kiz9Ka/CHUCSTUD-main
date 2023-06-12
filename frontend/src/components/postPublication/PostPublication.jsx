import React from 'react';
import { useRef } from 'react';
import styles from './PostPublication.module.scss'

function PostPublication({ show }) {
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

	const handleFileChange = () => {
		const fileName = fileInputRef.current.value.split('\\').pop();
		alert(`Вы выбрали файл: ${fileName}`);
	}

	return (
		<div className={`${styles.post_publication} ${!show ? styles.post_publication__hidden : ''}`}>
			<div className={styles.post_publication__header_icon}>
					<img src="img/page1/Main/avatar.svg" alt="Иконка Автора" className={styles.post_publication__svg}/>
			</div>
			<textarea className={styles.post_publication__input} onInput={handleInput} ref={textareaRef} placeholder="Текст вашей публикации..."></textarea>
				<button className={styles.post_publication__clip}>
						<img src="img/page1/Main/clip.svg" alt="Иконка скрепки" className={styles.post_publication__svg} onClick={handleUploadClick}/>
						<input type="file" ref={fileInputRef} onChange={handleFileChange} style={{ display: 'none' }} />
				</button>
			<button class={styles.post_publication__input_btn}>
						<img src="../img/pers-account/setting-block/arrowforward.svg" alt="Иконка отправки" class={styles.post_publication__input_btn}/>
			</button>
		</div>
	)
}

export default PostPublication
