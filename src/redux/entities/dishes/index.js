import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishesByRestaurantId } from "./thunks/get-dishes";

const entityAdapter = createEntityAdapter();

export const dishesSlice = createSlice({
  name: "dish",
  initialState: entityAdapter.getInitialState(),
  selectors: {
    selectDishIds: (state) => state.ids,
  },
  extraReducers: (builder) =>
    builder.addCase(getDishesByRestaurantId.fulfilled, (state, { payload }) => {
      entityAdapter.upsertMany(state, payload);
    }),
});

export const { selectDishIds } = dishesSlice.selectors;
