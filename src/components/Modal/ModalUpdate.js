import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { updateTodo } from "../../redux/actions";
import { useDispatch } from "react-redux";

export default function ModalUpdate({ isOpen, closeModal, data }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth(); // Months start at 0!
  let dd = today.getDate();
  let hour = today.getHours();
  let minute = today.getMinutes();

  const createdAt = yyyy + "-" + mm + "-" + dd + " " + hour + ":" + minute;

  const dataUpdate = {
    id: data.id,
    title,
    description,
    status: 0,
    createdAt,
  };

  const handleUpdate = () => {
    dispatch(updateTodo(dataUpdate));
  };
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div className="grid grid-cols-1 gap-3">
                  <input
                    defaultValue={data.title}
                    type="text"
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                  <textarea
                    defaultValue={data.description}
                    type="text"
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  />
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={handleUpdate}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
