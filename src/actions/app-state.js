// import axios from "axios";

import axios from "../utils/axios";

import {
  SET_APP_STATE_LOADING,
  SET_APP_STATE_TODOS
} from '../action-types/app.state';

export const setAppStateLoading = (isLoading) => ({
  type: SET_APP_STATE_LOADING,
  payload: {
    isLoading,
  },
});

export const setAppStateTodos = (todos) => ({
  type: SET_APP_STATE_TODOS,
  payload: {
    todos
  },
});

export const fetchTodos = () => async (
  dispatch, getState
) => {
  dispatch(setAppStateLoading(true))
  await axios.get('/todos')
    .then(res => {
      dispatch(setAppStateTodos(res.data));

    }).catch(err => {
      console.log(err);
    });
};
