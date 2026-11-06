import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [{
    "name": "Alex",
    "number": "+123456789"
  }],
  filter: ""
}

const phonebookSlice = createSlice({
  name: "phonebook",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload)
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter((contact) => action.payload !== contact.id)
    }, 
    filterContact: (state, action) => {
      state.filter = action.payload
    }
  }
})

export const { addContact, deleteContact, filterContact } = phonebookSlice.actions
export default phonebookSlice.reducer