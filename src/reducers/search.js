import { SET_SEARCH_NAME } from '../actions';

const name = (state = '', action) => {
  switch (action.type) {
    case SET_SEARCH_NAME:
      return action.payload.name;
    default:
      return state;
  }
};

export default name;
