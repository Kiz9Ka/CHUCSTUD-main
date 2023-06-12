import { configureStore } from '@reduxjs/toolkit';
import FeedSlice from './slices/FeedSlice';
import authSlice from './slices/authSlice';

export const store = configureStore({
  reducer: {
    feed: FeedSlice,
    auth: authSlice,
  },
});
