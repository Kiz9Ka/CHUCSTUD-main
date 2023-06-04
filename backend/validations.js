import { body } from 'express-validator';

export const loginValidation = [
	body('email', 'Неверный формат почты').isEmail(),
	body('password', 'Пароль должен быть минимум 5 символов').isLength({ min: 5}),
];

export const registerValidation = [
	body('email', 'Неверный формат почты').isEmail(),
	body('password', 'Пароль должен быть минимум 5 символов').isLength({ min: 5}),
	body('fullName', 'Укажите имя из 3 символов').isLength({ min: 3}),
	body('avatarUrl', 'Неверный формат ссылки').optional().isURL(),
];

export const postCreateValidation = [
 body('title', 'Введите заголовок статьи').isLength({ min: 3 }).isString(),
 body('text', 'Введите текст статьи').isLength({ min: 3 }).isString(),
 body('tags', 'Неверный формат тэгов').optional().isString(),
 body('imageUrl', 'Неверная ссылка на изображение').optional().isString(),
];