import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className="todo-list">
      {props.todoData.map(todo => (
        <Todo key={todo.id} todo={todo} toggleTask={props.toggleTask} />
      ))}
      <button className="clear-btn" onClick={props.completed}>
        Clear
      </button>
    </div>
  );
};

export default TodoList;
