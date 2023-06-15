import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: []
};

const FeedSlice = createSlice({
    name: 'feed',
    initialState,
    reducers: {
      setAllArticles: (state, action) => {
        state.posts = action.payload;
      },
      updateLikesCount: (state, action) => {
        const { postId, likes, likesCount } = action.payload;
        const postIndex = state.posts.findIndex((post) => post._id === postId);
        if (postIndex !== -1) {
          state.posts[postIndex].likes = likes;
          state.posts[postIndex].likesCount = likesCount;
        }
      },
    },
  });

export default FeedSlice.reducer;
export const { setAllArticles, updateLikesCount } = FeedSlice.actions;
