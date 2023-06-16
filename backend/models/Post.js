import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
  user: {
    type: String,
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
    type: String,
    ref: 'User',
    required: true,
  },
  visibleToGroups: {
    type: [String],
    default: [],
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
  likes: [
    {
      user: {
        type: String,
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