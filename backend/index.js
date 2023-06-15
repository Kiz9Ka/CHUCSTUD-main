import express from 'express'
import multer from 'multer'
import cors from 'cors'
import cookieParser from 'cookie-parser';

import { loginValidation, registerValidation, postCreateValidation } from './validations.js'
import { checkAuth, handleValidationErrors } from './utils/index.js'
import { UserController, PostController, connect } from './controllers/index.js'

connect();
const app = express()
app.use(cookieParser());

const corsOptions = { origin: '*' };

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
	destination: (_, __, cb) => {
		cb(null, 'uploads')
	},
	filename: (_, file, cb) => {
		cb(null, file.originalname)
	},
})

const upload = multer({ storage })

app.use(express.json())
app.use('/uploads', express.static('uploads'))

app.post('/auth/login', loginValidation, handleValidationErrors, UserController.login)
app.post('/auth/register', registerValidation, handleValidationErrors, UserController.register)
app.get('/auth/me', checkAuth, UserController.getMe)

app.post('/upload', checkAuth, upload.single('image'), (req, res) => {
	res.json({
		url: `/uploads/${req.file.originalname}`,
	})
})

app.post('/posts', checkAuth, postCreateValidation, handleValidationErrors, PostController.create)
app.get('/posts', PostController.getAll)
app.get('/posts/:id', PostController.getOne)
app.delete('/posts/:id', checkAuth, PostController.remove)
app.patch('/posts/:id', checkAuth, postCreateValidation, handleValidationErrors, PostController.update)
app.put('/posts/:id/like', checkAuth, PostController.like);
app.listen(4444, err => {
	if (err) {
		return console.log(err)
	}
	console.log('Server OK')
})
