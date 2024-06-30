import { createSlice } from "@reduxjs/toolkit";
import { InitialType } from "../../model/initialType";
import { TodoType } from "../../model/todoType";
import { createTodo, deleteTodo, getTodos, updateTodo } from "../actions/todoAction";

const initialState:InitialType<TodoType[]> = {
    isLoading: false,
    data: [],
    error: null
}

const todoSlice = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTodos.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(getTodos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });

        builder.addCase(getTodos.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message || null;
        });

        builder.addCase(createTodo.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(createTodo.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data.push(action.payload);
        });

        builder.addCase(createTodo.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message || null;
        });

        builder.addCase(deleteTodo.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(deleteTodo.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = state.data.filter(item => item.id !== action.payload.id);
        });

        builder.addCase(deleteTodo.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message || null;
        });

        builder.addCase(updateTodo.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(updateTodo.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = state.data.map(item => item.id === action.payload.id ? action.payload : item);
        });

        builder.addCase(updateTodo.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message || null;
        });
    }
});

export default todoSlice.reducer;

// export const { setAnswer } = translateSlice.actions