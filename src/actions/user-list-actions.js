import axios from '../utils/axios';
import {
  GET_USER_LIST_REQUEST,
  GET_USER_LIST_SUCCESS,
  GET_USER_LIST_FAILURE
} from '../action-types/userListTypes';

export const setGetUserListRequest = isLoading => ({
  type: GET_USER_LIST_REQUEST,
  payload: {
    isLoading
  }
});

export const setGetUserListSuccess = response => ({
  type: GET_USER_LIST_SUCCESS,
  payload: {
    userList: response.data
  }
});

export const setGetUserListFailure = error => ({
  type: GET_USER_LIST_FAILURE,
  payload: {
    error
  }
});

export const fetchUserLists = () => async (dispatch, getState) => {
  dispatch(setGetUserListRequest(true));
  await axios
    .get('/user')
    .then(res => {
      dispatch(setGetUserListSuccess(res.data));
    })
    .catch(err => {
      dispatch(setGetUserListFailure(err));
    });
};
