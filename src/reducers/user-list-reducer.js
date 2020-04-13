import {
  GET_USER_LIST_REQUEST,
  GET_USER_LIST_SUCCESS,
  GET_USER_LIST_FAILURE
} from '../action-types/userListTypes';

const initialState = {
  userList: []
};

const userListReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USER_LIST_REQUEST:
      return { ...state, isLoading: payload };
    case GET_USER_LIST_SUCCESS:
      return { ...state, isLoading: false, userList: payload.userList };
    case GET_USER_LIST_FAILURE:
      return { ...state, isLoading: false, errorMessage: payload };
    default:
      return state;
  }
};

export default userListReducer;
