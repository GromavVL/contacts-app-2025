import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./slices/contactSlice";
import postsReducer from './slices/postsSlice'

const store = configureStore({
  reducer: {
    contactList: contactReducer,
    postsList: postsReducer,
  },
});

export default store;
