import { createSlice } from "@reduxjs/toolkit";

export const todoList = createSlice({
  name: "todolist",
  initialState: [],
  reducers: {
    addNewItem: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const todo = {
        index: action.payload.index,
        title: action.payload.title,
        completed: false,
      };
      state.push(todo);
    },
    deleteItem: (state, action) => {
      return state.filter((todo) => todo.index !== action.payload);
    },
    toggleComplete: (state, action) => {
      const todo = state[action.payload.index];
      todo.completed = !todo.completed;
    },
    reset: (state, action) => {
      return (state = []);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNewItem, deleteItem, toggleComplete, reset } = todoList.actions;

export default todoList.reducer;
