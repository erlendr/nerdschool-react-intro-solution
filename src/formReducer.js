const defaultState = {
  description: ''
}

const todoFormReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "CHANGE_DESCRIPTION_FIELD":
      return {
        description: action.description
      }
    default:
      return state;
  }
};

export default todoFormReducer;