import React from "react";

const TodoList = ({ children }) => {
  return (
    <div className="border-2 border-gray-300 rounded-lg shadow-xl p-5">
      {children}
    </div>
  );
};

export default TodoList;
