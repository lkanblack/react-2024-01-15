import { createSlice } from "@reduxjs/toolkit";

import { normalizedReviews } from "../../../mock/norm-mock";

export const reviewsSlice = createSlice({
    name: "review",
    initialState: {
        entities: normalizedReviews.reduce((acc, review) => {
            acc[review.id] = review;

            return review;
        }),
        ids: normalizedReviews.map(({ id }) => id),
    },
});