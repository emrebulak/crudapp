import { createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";
import { TodoType } from "../../model/todoType";

export const getTodos: AsyncThunk<TodoType[], void, {}> = createAsyncThunk('todos/getTodos', async () => {
    const response = await api.get('/todos');
    return response.data;
})

export const createTodo: AsyncThunk<TodoType, TodoType, {}> = createAsyncThunk('todos/createTodo', async (data) => {
    const response = await api.post('/todos', data);
    return response.data;
})

export const deleteTodo: AsyncThunk<TodoType, string, {}> = createAsyncThunk('todos/deleteTodo', async (id) => {
    const response = await api.delete(`/todos/${id}`);
    return response.data;
})

export const updateTodo: AsyncThunk<TodoType, TodoType, {}> = createAsyncThunk('todos/updateTodo', async (data) => {
    const response = await api.put(`/todos/${data.id}`, data);
    return response.data;
})