export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const COMPLETED_TODO = "COMPLETED_TODO";

export const initialState = {
  todoData: [
    {
      task: "",
      id: Date.now(),
      completed: false
    }
  ]
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        task: action.payload,
        id: Date.now(),
        completed: false
      };

      return {
        ...state,
        todoData: [...state.todoData, newTodo]
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todoData: state.todoData.map(todo => {
          console.log("ID RESULT", todo);
          if (action.payload === todo.id) {
            return {
              ...todo,
              completed: !todo.completed
            };
          }
          return todo;
        })
      };

    case COMPLETED_TODO:
      return {
        ...state,
        todoData: state.todoData.filter(todo => !todo.completed)
      };
    default:
      return state;
  }
};
