import configureStore, { combineSlices } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: combineSlices(),
});