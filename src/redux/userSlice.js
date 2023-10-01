// react
import { createSlice } from "@reduxjs/toolkit";
// users
import { users } from "../Data";

const userSlice = createSlice({
  name: "users",
  initialState: users,
  reducers: {
    createUser: (state, { payload }) => {
      state.push(payload);
    },
    updateUser: (state, { payload }) => {
      const { firstName, lastName, email, id } = payload;
      const updatingUser = state.find((user) => user.id == id);
      if (updatingUser) {
        updatingUser.firstName = firstName;
        updatingUser.lastName = lastName;
        updatingUser.email = email;
      }
    },
    deleteUser: (state, { payload }) => {
      const id = payload;
      const updatingUser = state.filter((user) => user.id == id);
      if (updatingUser) {
        return state.filter((user) => user.id !== id);
      }
    },
  },
});
export const { createUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
