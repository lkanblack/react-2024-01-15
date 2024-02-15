import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishIds } from "../selector";
import { selectRestaurantMenuById } from "../../restaurants";

export const getDishesByRestaurantIdByRestaurantId = createAsyncThunk(
  "dishes/getDishesByRestaurantIdByRestaurantId",
  async (restaurantId) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
    );

    const result = await response.json();

    return result;
  },
  {
    condition: (restaurantId, { getState }) => {
      const restaurantDishIds = selectRestaurantMenuById(
        getState(),
        restaurantId
      );
      const dishIds = selectDishIds(getState());

      return !restaurantDishIds.every((id) => dishIds.includes(id));
    },
  }
);
