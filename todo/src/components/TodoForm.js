import React, { Component } from "react";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ""
    };
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitTask = e => {
    e.preventDefault();
    this.setState({ task: "" });
    this.props.addTask(e, this.state.task);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitTask}>
          <input
            type="text"
            value={this.state.task}
            name="task"
            onChange={this.handleChanges}
            required
          />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
