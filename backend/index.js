import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import multer from 'multer';

import { PostController, UserController, connect } from './controllers/index.js';
import { checkAuth, handleValidationErrors } from './utils/index.js';
import { loginValidation, postCreateValidation, registerValidation } from './validations.js';
import User from './models/User.js'; // Импортируйте User модель

connect();
const app = express();
app.use(cookieParser());

const corsOptions = { origin: '*' };

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, 'uploads');
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Создайте новый роутер для пользователей
const usersRouter = express.Router();

app.use('/api/users', usersRouter);

usersRouter.get('/teachers', async (req, res) => {
  try {
    const teachers = await User.find({ accessLevel: 2 });
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при получении списка преподавателей' });
  }
});


app.post('/auth/login', loginValidation, handleValidationErrors, UserController.login);
app.post('/auth/register', registerValidation, handleValidationErrors, UserController.register);
app.get('/auth/me', checkAuth, UserController.getMe);

app.post('/upload', checkAuth, upload.single('image'), (req, res) => {
  res.json({
    url: `/uploads/${req.file.originalname}`,
  });
});

app.post('/posts', checkAuth, postCreateValidation, handleValidationErrors, PostController.create);
app.get('/posts', PostController.getAll);
app.get('/posts/:id', PostController.getOne);
app.delete('/posts/:id', checkAuth, PostController.remove);
app.patch('/posts/:id', checkAuth, postCreateValidation, handleValidationErrors, PostController.update);
app.put('/posts/:id/like', checkAuth, PostController.like);

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('Server OK');
});
