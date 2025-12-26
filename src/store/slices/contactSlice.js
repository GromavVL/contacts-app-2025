import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  contacts: [
    { id: uuidv4(), isFavorite: false, fullName: "Test", phoneNumber: "+3809853627" },
    { id: uuidv4(), isFavorite: false, fullName: "Test7", phoneNumber: "+3809854317" },
    { id: uuidv4(), isFavorite: false, fullName: "Test3", phoneNumber: "+3809577465" },
  ],
};

const contactsSlice = createSlice({
  initialState,
  name: "contacts",
  reducers: {
    createContact: (state, {payload}) => {
      state.contacts.push({
        ...payload,
        isFavorite: false,
        id: uuidv4(),
      })
    },
    deleteContacts: (state, { payload }) => {
      state.contacts = state.contacts.filter((c) => c.id !== payload);
    },
    updateContact: (state, {payload: {id, data}}) => {
      const updateContactIndex = state.contacts.findIndex(c => c.id === id)
      state.contacts[updateContactIndex] = {
        ...state.contacts[updateContactIndex],
        ...data
      }
    }
  },
});

const { reducer, actions } = contactsSlice;
export const { deleteContacts, updateContact, createContact} = actions;
export default reducer;
