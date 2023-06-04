import { configureStore } from "@reduxjs/toolkit";
import FeedSlice from "./slices/FeedSlice";

export const store = configureStore({
    reducer: {
        feed: FeedSlice
    }
});