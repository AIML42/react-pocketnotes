import { configureStore } from "@reduxjs/toolkit";
import groupReducer from "../slices/groupSlices"
import noteReducer from "../slices/noteSlices"
import uiReducer from "../slices/uiSlices"
import persistMiddleware from "../middleware/persistMiddleware";
import { getState } from "../../utils/saveAppState";

const persistedState = getState();

export const store = configureStore({
    reducer : {
        group : groupReducer,
        note : noteReducer,
        ui: uiReducer,
    },
    preloadedState: persistedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(persistMiddleware),
})


