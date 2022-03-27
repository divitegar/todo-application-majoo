import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./actions.types";

export const addTodo = (data) => {
  return {
    type: ADD_TODO,
    data,
  };
};

export const updateTodo = (data) => {
  return {
    type: UPDATE_TODO,
    data,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};
