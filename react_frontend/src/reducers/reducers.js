import * as actionTypes from "../actionTypes";

const initialState = {
  token: null,
  isLoggedIn: false,
  currentModule: 0,
  currentTile: 0,
  length: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TOKEN:
      return { ...state, token: action.token, isLoggedIn: true };
    case actionTypes.LOGOUT:
      sessionStorage.clear();
      return { ...state, token: null, isLoggedIn: false };
    case actionTypes.NEXT_MODULE:
      let currentModule = state.currentModule + 1;
      currentModule = currentModule % 5;
      return { ...state, currentModule: currentModule, currentTile: 0 };
      break;
    case actionTypes.PREVIOUS_MODULE: {
      let currentModule = state.currentModule - 1 + 5;
      currentModule = currentModule % 5;
      return { ...state, currentModule: currentModule, currentTile: 0 };
      break;
    }
    case actionTypes.CHANGE_MODULE: {
      return { ...state, currentModule: action.currentModule, currentTile: 0 };
      break;
    }
    case actionTypes.SET_LENGTH: {
      return { ...state, length: action.value };
      break;
    }
    case actionTypes.NEXT_TILE: {
      let currentTile = state.currentTile + 1;
      let length = state.length || 1;
      currentTile = currentTile % length;
      return { ...state, currentTile: currentTile };
      break;
    }
    case actionTypes.PREVIOUS_TILE: {
      let currentTile = state.currentTile - 1 + state.length;
      let length = state.length || 1;
      currentTile = currentTile % length;
      return { ...state, currentTile: currentTile };
      break;
    }
    default:
      return state;
  }
};

export default reducer;
