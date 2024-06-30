import { configureStore } from "@reduxjs/toolkit";
import todoSlices from "./slices/todoSlices";

const store = configureStore({
    reducer: {
        todoSlices
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;