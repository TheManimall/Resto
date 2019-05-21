import axios from 'axios';

import * as Types from '../types';

const signInSuccess = data => ({
  type: Types.SIGN_IN_SUCCESS,
  payload: data
});

const signInFailure = err => ({
  type: Types.SIGN_IN_FAILURE,
  err
});

export const singIn = data => async dispatch => {
  try {
    const res = await axios.post('/api/restaurant/login', data);
    dispatch(signInSuccess(res.data));
  } catch (err) {
    dispatch(signInFailure(err));
  }
};

const signUpSuccess = data => ({
  type: Types.SIGN_UP_SUCCESS,
  payload: data
});

const signUpFailure = err => ({
  type: Types.SIGN_UP_FAILURE,
  err
});

export const signUp = data => async dispatch => {
  try {
    const res = await axios.post('/api/restaurant/register', data);
    dispatch(signUpSuccess(res.data));
  } catch (err) {
    dispatch(signUpFailure(err));
  }
};
