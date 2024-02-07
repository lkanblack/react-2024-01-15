import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../../mock/norm-mock";

export const usersSlice = createSlice({
    name: "user",
    initialState: {
        entities: normalizedUsers.reduce((acc, user) => {
            acc[user.id] = user;

            return acc;
        }),
        ids: normalizedUsers.map(({ id }) => id),
    },
});