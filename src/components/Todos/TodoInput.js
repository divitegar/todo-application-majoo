import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions/index";

const TodoInput = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth(); // Months start at 0!
  let dd = today.getDate();
  let hour = today.getHours();
  let minute = today.getMinutes();

  const createdAt = yyyy + "-" + mm + "-" + dd + " " + hour + ":" + minute;

  const data = {
    title,
    description,
    status: 0,
    createdAt,
  };

  const handleSubmit = (e) => {
    if (title !== "" && description !== "") {
      dispatch(addTodo(data));
      setTitle("");
      setDescription("");
    }
    e.preventDefault();
  };
  return (
    <div className="container mx-auto my-10">
      <div className="flex justify-center">
        <div className="border-2 border-slate-300 w-full m-3 md:w-1/2 p-8 rounded-lg">
          <form>
            <div className="grid grid-cols-1 justify-center gap-3">
              <input
                placeholder="add title"
                className="border border-gray-300 p-3 rounded-lg focus:border-gray-700 outline-none"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                placeholder="add description"
                className="border border-gray-300 p-3 rounded-lg focus:border-gray-700 outline-none"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <button
                className="border bg-gray-900 text-white rounded-lg p-3"
                onClick={handleSubmit}
              >
                add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoInput;
