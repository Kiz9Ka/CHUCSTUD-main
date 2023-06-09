import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserModel from '../models/User.js';
import mongoose from 'mongoose';
const { ObjectId } = mongoose.Types;


export const register = async (req, res) => {
  try {
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

		const doc = new UserModel({
			login: req.body.login,
			phoneNumber: req.body.phoneNumber,
			groupNumber: req.body.groupNumber,
			passwordHash: hash,
			avatarUrl: req.body.avatarUrl,
			fullName: req.body.fullName,
			accessLevel: req.body.accessLevel,
			groups: req.body.groups,
		});
		

    const user = await doc.save();

    const token = jwt.sign(
      {
        _id: user._id,
      },
      'secret123',
      {
        expiresIn: '30d',
      }
    );
    const { passwordHash, ...userData } = user._doc;
    res.json({
      ...userData,
      token,
    });
	} catch (error) {
		console.log(error);
		if (error.code === 11000) {
			res.status(409).json({
				message: 'Логин или номер телефона уже зарегистрирован',
			});
		} else {
			res.status(500).json({
				message: 'Не удалось зарегистрироваться',
			});
		}
	}
};

export const login = async (req, res) => {
	try {
		const user = await UserModel.findOne({ login: req.body.login });
		if(!user){
			return res.status(404).json({
				message: 'Пользователь не найден',
			})
		}
		const isValidPass = await bcrypt.compare(req.body.password, user._doc.passwordHash)
		if (!isValidPass) {
			return res.status(400).json({
				message: 'Неверный логин или пароль',
			})
		}
		const token = jwt.sign(
			{
				_id: user._id,
			},
			'secret123',
			{
				expiresIn: '30d',
			}
		)

		const { passwordHash, ... userData } = user._doc
		res.json({
			... userData,
			token,
		})

	} catch (error) {
				console.log(error)
		res.status(500).json({
			message: 'Не удалось авторизоваться',
		})
	}
}

export const getMe = async (req, res) => {
	try {
		const user = await UserModel.findById(req.userId)
		if (!user) {
			return res.status(404).json({
				message: 'Пользователь не найден'
			})
		}

		const { passwordHash, ... userData } = user._doc
		res.json(userData)
		
	} catch (error) {
		console.log(error)
		res.status(500).json({
			message: 'Нет доступа',
		})
	}
}