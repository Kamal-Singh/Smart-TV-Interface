import * as actionTypes from "../actionTypes";

export const setToken = (token) => {
  return {
    type: actionTypes.SET_TOKEN,
    token: token,
  };
};

export const logout = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};

export const nextModule = () => {
  return {
    type: actionTypes.NEXT_MODULE,
  };
};

export const prevModule = () => {
  return {
    type: actionTypes.PREVIOUS_MODULE,
  };
};

export const changeModule = (value) => {
  return {
    type: actionTypes.CHANGE_MODULE,
    currentModule: value,
  };
};

export const nextTile = () => {
  return {
    type: actionTypes.NEXT_TILE,
  };
};

export const prevTile = () => {
  return {
    type: actionTypes.PREVIOUS_TILE,
  };
};

export const setLength = (length) => {
  return {
    type: actionTypes.SET_LENGTH,
    value: length,
  };
};
