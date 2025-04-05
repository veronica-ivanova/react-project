import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./get-users";
import { entityAdapter } from "../restaurants/slice";

export const usersSlice = createSlice({
  name: "users",
  initialState:  entityAdapter.getInitialState(),
  extraReducers: (builder) => 
    builder
      .addCase(getUsers.fulfilled, (state, { payload }) => {  
        entityAdapter.setAll(state, payload);
      })
});

const selectUsersSlice = (state) => state.users;

export const {
  selectIds: selectUsersIds,
  selectById: selectUserById,
  selectTotal: selectUsersTotal
} = entityAdapter.getSelectors(selectUsersSlice);