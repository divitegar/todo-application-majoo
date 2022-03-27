import React from "react";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const Done = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <TodoList>
      <h2 className="text-center font-bold capitalize text-2xl">Done</h2>
      {todos.list.map((item) => {
        return (
          <div key={item.id}>
            {item.status === 1 ? <TodoItem item={item} /> : null}
          </div>
        );
      })}
    </TodoList>
  );
};

export default Done;
