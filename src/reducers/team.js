import { ADD_TO_TEAM, REMOVE_FROM_TEAM } from '../actions';

const team = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_TEAM:
      return action.payload.team;
    case REMOVE_FROM_TEAM:
      return action.payload.team;
    default:
      return state;
  }
};

export default team;
