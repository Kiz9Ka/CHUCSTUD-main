import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
},
 {
  timestamps: true,
	}
);

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  text: {
    type: String,
    required: true,
    unique: true,
  },
  imageUrl: String,
  viewedBy: {
    type: [String],
    default: [],
  },
  viewsCount: {
    type: Number,
    default: 0,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  comments: {
    type: [CommentSchema],
    default: [],
  },
  commentsCount: {
    type: Number,
    default: 0,
  },
  likesCount: {
    type: Number,
    default: 0,
  },
  likedBy: {
    type: [String],
    default: []
  },
  likes: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    },
  ],
},
 {
  timestamps: true,
 }
);

export default mongoose.model('Post', PostSchema);