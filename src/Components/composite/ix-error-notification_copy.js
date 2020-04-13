import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SET_ERROR, HIDE_ERROR } from '../../action-types/error-types';

const ErrorNotification = (props) => {
  const isOpen = useSelector(state => state.error.isOpen);
  const error = useSelector(state => state.error.error);
  debugger;
  const dispatch = useDispatch();

  function handleClose() {
    dispatch({ type: HIDE_ERROR });
  }

  return (
    <>
      {isOpen && error.message && (
       
        <div class="fancy-error-class">
        <button>Close Error</button>
        {window.alert(error.message)}
        {/* <span>{error.message}</span> */}
      </div>
      )}
    </>
  )
}

export default ErrorNotification;