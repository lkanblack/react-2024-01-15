import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./thunks/get-users";

const entityAdapter = createEntityAdapter();

export const usersSlice = createSlice({
  name: "user",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      entityAdapter.setAll(state, payload);
    }),
});
