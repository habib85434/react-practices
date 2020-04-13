import { SET_ERROR, HIDE_ERROR } from '../action-types/error-types';

const initState = {
  error: null,
  isOpen: false
};

export function errorReducer(state = initState, action) {
  const { error } = action;

  if (error) {
    return {
      error: error,
      isOpen: true
    }
  } else if (action.type === HIDE_ERROR) {
    return {
      error: null,
      isOpen: false
    }
  }

  return state;
}