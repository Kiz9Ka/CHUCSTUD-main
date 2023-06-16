import { v4 as uuidv4 } from 'uuid';
import PostModel from '../models/Post.js';
import UserModel from '../models/User.js';

export const getAll = async (req, res) => {
	try {
		let userId = req.cookies.userId
		if (!userId) {
				userId = uuidv4()
				res.cookie('userId', userId, { maxAge: 365 * 24 * 60 * 60 * 1000 }) // Устанавливаем cookie на 1 год
		}

		const allPosts = await PostModel.find().populate('user').exec()

		if (!allPosts) {
			return res.status(404).json({ message: 'Статьи не найдены' })
		}

		const updatedPosts = await Promise.all(
			allPosts.map(async post => {
				if (!post.viewedBy.includes(userId)) {
					// Если пользователь еще не просматривал эту статью, то засчитываем его просмотр
					const updatedPost = await PostModel.findOneAndUpdate(
						{
							_id: post._id,
						},
						{
							$inc: { viewsCount: 1 },
							$push: { viewedBy: userId },
						},
						{
							new: true,
						}
					)
						.populate('user')
						.exec()
					return updatedPost
				} else {
					// Если пользователь уже просмотрел эту статью, то не засчитываем его просмотр
					return post
				}
			})
		)

		return res.json(updatedPosts)
	} catch (error) {
		console.log(error)
		res.status(500).json({
			message: 'Не удалось получить статьи',
		})
	}
}




export const getOne = async (req, res) => {
	try {
		const postId = req.params.id
		PostModel.findOneAndUpdate(
			{
				_id: postId,
			},
			{
				$inc: {
					viewsCount: 1,
				},
			},
			{
				returnDocument: 'after',
			}
		)
			.then(doc => {
				if (!doc) {
					return res.status(404).json({
						message: 'Статья не найдена',
					})
				}
				res.json(doc)
			})
			.catch(err => {
				console.log(err)
				return res.status(500).json({
					message: 'Не удалось вернуть статью',
				})
			})
	} catch (error) {
		console.log(error)
		res.status(500).json({
			message: 'Не удалось получить статьи',
		})
	}
}

export const remove = async (req, res) => {
	try {
		const postId = req.params.id
		PostModel.findOneAndDelete({
			_id: postId,
		})
			.then(doc => {
				if (!doc) {
					return res.status(404).json({
						message: 'Статья не найдена',
					})
				}
				res.json({
					success: true,
				})
			})
			.catch(error => {
				console.log(error)
				return res.status(500).json({
					message: 'Не удалось удалить статью',
				})
			})
	} catch (error) {
		console.log(error)
		res.status(500).json({
			message: 'Не удалось получить статьи',
		})
	}
}

export const create = async (req, res) => {
  try {
    const user = await UserModel.findById(req.userId);

    if (!user) {
      return res.status(404).json({ message: 'Пользователь не найден' });
    }

    if (user.accessLevel === 1) {
      return res.status(403).json({ message: 'Пользователи уровня 1 не могут создавать публикации' });
    }

    const visibleToGroups = user.accessLevel === 2 ? user.groups : [];

    const doc = new PostModel({
      title: req.body.title,
      text: req.body.text,
      imageUrl: req.body.imageUrl,
      user: req.userId,
      viewedBy: [],
      viewsCount: 0,
      comments: [],
      commentsCount: 0,
      likesCount: 0,
      visibleToGroups,
    });

    const post = await doc.save();

    res.json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Не удалось создать статью',
      error: error.message,
      fullError: error, // добавьте эту строку
    });
  }
};

export const update = async (req, res) => {
	try {
		const postId = req.params.id
		await PostModel.updateOne(
			{
				_id: postId,
			},
			{
				title: req.body.title,
				text: req.body.text,
				imageUrl: req.body.imageUrl,
				user: req.userId,
				tags: req.body.tags,
			}
		)
		res.json({
			success: true,
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({
			message: 'Не удалось обновить статью',
		})
	}
}

export const like = async (req, res) => {
  try {
    const postId = req.params.id;
    const userId = req.userId;

    const post = await PostModel.findById(postId);

    if (!post) {
      return res.status(404).json({ message: 'Статья не найдена' });
    }

    const userLikeIndex = post.likes.findIndex((like) => like.user.toString() === userId);

    if (userLikeIndex !== -1) {
      post.likes.splice(userLikeIndex, 1);
      post.likesCount -= 1;
    } else {
      post.likes.push({ user: userId });
      post.likesCount += 1;
    }

    await post.save();

    res.json({ likesCount: post.likesCount });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};

