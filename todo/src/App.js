import React, { useReducer } from "react";
import {
  reducer,
  initialState,
  ADD_TODO,
  TOGGLE_TODO,
  COMPLETED_TODO
} from "./reducer/Reducer";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTask = (event, todo) => {
    event.preventDefault();
    dispatch({ type: ADD_TODO, payload: todo });
  };

  const toggleTask = todoId => {
    dispatch({ type: TOGGLE_TODO, payload: todoId });
  };

  const completed = event => {
    dispatch({ type: COMPLETED_TODO });
  };

  return (
    <div>
      <h1>Tasks</h1>
      <TodoForm addTask={addTask} />
      <TodoList
        todoData={state.todoData}
        toggleTask={toggleTask}
        completed={completed}
      />
    </div>
  );
};
export default App;
