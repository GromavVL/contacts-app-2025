import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./slices/contactSlice";
import postsReducer from './slices/postsSlice';
import usersReduser from './slices/usersSlice';

const store = configureStore({
  reducer: {
    contactList: contactReducer,
    postsList: postsReducer,
    usersList: usersReduser,
  },
});

export default store;
