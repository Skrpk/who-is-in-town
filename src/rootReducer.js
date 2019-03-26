import { combineReducers } from 'redux';

import mainReducer from './modules/Main/mainReducer';
import eventReducer from './modules/EventDetails/eventReducer';
import favoritesReducer from './modules/Favorites/favoritesReducer';

export default combineReducers({
  main: mainReducer,
  event: eventReducer,
  favorites: favoritesReducer,
});
