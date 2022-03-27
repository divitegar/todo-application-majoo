import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../actions/actions.types";

const initalState = {
  counter: 0,
  list: [
    {
      id: 0,
      title: "belajar coding",
      description: "biar bisa kerja",
      createdAt: "2019-11-15 18:00",
      status: 1,
    },
  ],
};

const todos = (state = initalState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        counter: state.counter + 1,
        list: [
          ...state.list,
          {
            id: state.counter + 1,
            title: action.data.title,
            description: action.data.description,
            createdAt: action.data.createdAt,
            status: action.data.status,
          },
        ],
      };
    case UPDATE_TODO:
      const { id } = action.data;
      const existingUser = state.list.find((item) => item.id === id);
      if (existingUser) {
        return {
          counter: state.counter + 1,
          list: [
            ...state.list,
            {
              id: state.counter + 1,
              title: action.data.title,
              description: action.data.description,
              createdAt: action.data.createdAt,
              status: action.data.status,
            },
          ],
        };
      }
      break;
    case DELETE_TODO:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
};

export default todos;
