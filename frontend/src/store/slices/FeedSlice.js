import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: []
};

export const FeedSlice = createSlice({
    name: 'feed',
    initialState,
    reducers: {
        setAllArticles(state, action) {
            state.posts = action.payload;
        }
    }
});
export default FeedSlice.reducer;
export const { setAllArticles } = FeedSlice.actions;