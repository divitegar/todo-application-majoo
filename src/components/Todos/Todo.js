import React from "react";
import TodoList from "./TodoList";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const Todo = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <TodoList>
      <h2 className="text-center font-bold capitalize text-2xl">Todo</h2>
      {todos.list.map((item) => {
        return (
          <div key={item.id}>
            {item.status === 0 ? <TodoItem item={item} /> : null}
          </div>
        );
      })}
    </TodoList>
  );
};

export default Todo;
