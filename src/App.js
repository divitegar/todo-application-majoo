import { Provider } from "react-redux";
import { createStore } from "redux";
import Layout from "./components/Layout";
import Done from "./components/Todos/Done";
import Todo from "./components/Todos/Todo";
import TodoInput from "./components/Todos/TodoInput";
import RootReducer from "./redux/reducers/index";
const store = createStore(RootReducer);

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <TodoInput />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 container mx-auto">
          <Todo />
          <Done />
        </div>
      </Layout>
    </Provider>
  );
}

export default App;
