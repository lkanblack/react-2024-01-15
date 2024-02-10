import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishIds } from "../selector";

export const getDishes = createAsyncThunk(
    "dishes/getDishes",
    async() => {
        const response = await fetch("http://localhost:3001/api/dishes");

        const result = await response.json();

        return result;
    }, { condition: (_, { getState }) => !selectDishIds(getState())?.length }
);