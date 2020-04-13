import { SET_APP_STATE_TODOS } from '../action-types/app.state';

const initialState = {
  todos: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_APP_STATE_TODOS: {
      return {
        ...state,
        todos: payload.todos
      };
    }
    default:
      return state;
  }
};
