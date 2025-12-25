import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  contacts: [
    { id: uuidv4(), fullName: "Test", phoneNumber: "+3809853627" },
    { id: uuidv4(), fullName: "Test7", phoneNumber: "+3809854317" },
    { id: uuidv4(), fullName: "Test3", phoneNumber: "+3809577465" },
  ],
};

const contactsSlice = createSlice({
  initialState,
  name: "contacts",
  reducers: {
    deleteContacts: (state, { payload }) => {
      state.contacts = state.contacts.filter((c) => c.id !== payload);
    },
  },
});

const { reducer, actions } = contactsSlice;
export const { deleteContacts } = actions;
export default reducer;
