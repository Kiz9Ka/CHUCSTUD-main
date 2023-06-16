import { body } from 'express-validator';

export const loginValidation = [
	body('login', 'Неверный формат почты').isLength({ min: 3 }),
	body('password', 'Пароль должен быть минимум 5 символов').isLength({ min: 5}),
];

export const registerValidation = [
  body('login', 'Логин должен быть минимум 3 символа').isLength({ min: 3 }),
  body('phoneNumber', 'Неверный формат номера телефона').isMobilePhone(),
  body('password', 'Пароль должен быть минимум 5 символов').isLength({ min: 5 }),
  body('fullName', 'Укажите имя из 3 символов').isLength({ min: 3 }),
  body('avatarUrl', 'Неверный формат ссылки').optional().isURL(),
  body('accessLevel', 'Уровень доступа должен быть числом от 1 до 3').isInt({ min: 1, max: 3 }),
  body('groupNumber', 'Укажите номер группы').if(body('accessLevel').equals('1')).notEmpty(),
  body('groups', 'Укажите номера групп')
  .if(body('accessLevel').equals('2'))
  .isArray({ min: 1 })
  .custom((groups) => {
    return groups.every((group) => typeof group === 'string');
  }),
];


export const postCreateValidation = [
 body('title', 'Введите заголовок статьи').isLength({ min: 3 }).isString(),
 body('text', 'Введите текст статьи').isLength({ min: 3 }).isString(),
 body('imageUrl', 'Неверная ссылка на изображение').optional().isString(),
];