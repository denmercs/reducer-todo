import React from "react";
import TodoForm from "./TodoForm";
import "./Todo.scss";

const ToDo = props => {
  return (
    <div
      className={`todo${props.todo.completed ? "completed" : ""}`}
      onClick={() => props.toggleTask(props.todo.id)}
    >
      <p>{props.todo.task}</p>
    </div>
  );
};

export default ToDo;
