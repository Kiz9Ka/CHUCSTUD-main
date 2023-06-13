import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: []
};

export const PostPublicationSlice = createSlice({
    name: 'postPublication',
    initialState,
    reducers: {
        setAllArticles(state, action) {
            state.posts = action.payload;
        },
        addArticle(state, action) {
            state.posts.push(action.payload);
        }
    }
});

export default PostPublicationSlice.reducer;
export const { setAllArticles, addArticle } = PostPublicationSlice.actions;
