import { configureStore, combineSlices } from "@reduxjs/toolkit";
import { restaurantsSlice } from "./entities/restaurants";
import { dishesSlice } from "./entities/dishes";
import { usersSlice } from "./entities/users";
import { reviewsSlice } from "./entities/reviews";
import { requestSlice } from "./ui/request";

export const store = configureStore({
  reducer: combineSlices(
    restaurantsSlice,
    dishesSlice,
    usersSlice,
    reviewsSlice,
    requestSlice
  ),
});
