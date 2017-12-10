import { combineReducers } from 'redux';
import characters from './characters';
import search from './search';
import team from './team';
import modal from './modal';

const app = combineReducers({
  characters,
  modal,
  search,
  team
});

export default app
