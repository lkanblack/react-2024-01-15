import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from "./thunks/get-restaurants";
import { selectRestaurantById } from "./selector";

const entityAdapter = createEntityAdapter();

export const restaurantsSlice = createSlice({
  name: "restaurant",
  initialState: entityAdapter.getInitialState(),
  selectors: {
    selectRestaurantMenuById: (state, id) =>
      selectRestaurantById(state, id).menu,
  },
  extraReducers: (builder) =>
    builder.addCase(getRestaurants.fulfilled, (state, { payload }) => {
      entityAdapter.setAll(state, payload);
    }),
});

export const { selectRestaurantMenuById } = restaurantsSlice.selectors;
