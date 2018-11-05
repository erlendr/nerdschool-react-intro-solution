import Todo from './Todo';

const todosReducer = (todos = [], action) => {
    switch (action.type) {
      case "CREATE_TODO":
        const newTodoId = todos.length + 1;
        return [
          ...todos,
          new Todo(newTodoId, action.description)
        ]
      case "DELETE_TODO":
        return [
          ...todos.filter(todo => todo.id !== action.id)
        ]
      default:
        return todos;
    }
  };
  
  export default todosReducer;