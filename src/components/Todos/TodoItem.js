import React from "react";
import Modal from "../Modal/Modal";
import ModalUpdate from "../Modal/ModalUpdate";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../redux/actions";

const TodoItem = (item) => {
  let [isOpen, setIsOpen] = useState(false);
  let [isOpenUpdate, setIsOpenUpdate] = useState(false);
  let [detail, setDetail] = useState({});
  let [id, setId] = useState("");
  const dispatch = useDispatch();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModalUpdate() {
    setIsOpenUpdate(false);
  }

  function openModalUpdate() {
    setIsOpenUpdate(true);
  }

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };
  return (
    <>
      <div className="border border-gray-300 p-4 rounded-lg mb-5">
        <div className="grid grid-cols-1 gap-3">
          <div className="grid grid-cols-2 justify-between">
            <div>
              <div>title: {item.item.title}</div>
              <div>description: {item.item.description}</div>
              <div>status: {item.item.status === 0 ? "todo" : "done"}</div>
            </div>
            <div className="grid grid-cols-1 text-right">
              <h3
                className="hover:text-green-300 text-green-800 cursor-pointer"
                onClick={() => {
                  openModal();
                  setDetail(item.item);
                }}
              >
                detail
              </h3>
              <h3
                className="hover:text-yellow-300 text-yellow-400 cursor-pointer"
                onClick={() => {
                  openModalUpdate();
                  setDetail(item.item);
                }}
              >
                update
              </h3>
              {item.item.status === 0 ? (
                <h3
                  className="hover:text-red-300 text-red-800 cursor-pointer"
                  onClick={(e) => {
                    handleDelete();
                    setId(item.item.id);
                  }}
                >
                  delete
                </h3>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} data={detail} />
      <ModalUpdate
        isOpen={isOpenUpdate}
        closeModal={closeModalUpdate}
        data={detail}
      />
    </>
  );
};

export default TodoItem;
