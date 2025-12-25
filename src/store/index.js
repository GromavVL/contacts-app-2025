import { configureStore } from "@reduxjs/toolkit";
import contactReduser from "./slices/contactSlice";

const store = configureStore({
  reducer: {
    contactList: contactReduser,
  },
});

export default store;
