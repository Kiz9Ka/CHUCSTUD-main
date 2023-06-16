import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
    },
    login: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    groupNumber: {
      type: String,
      required: function () {
        return this.accessLevel === 1;
      },
    },
    passwordHash: {
      type: String,
      required: true,
    },
    avatarUrl: String,
    fullName: {
      type: String,
      required: true,
    },
    accessLevel: {
      type: Number,
      required: true,
      min: 1,
      max: 3,
    },
    groups: [{
      type: String,
      ref: 'Group',
      required: function () {
        return this.accessLevel === 2;
      },
    }],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('User', UserSchema);
