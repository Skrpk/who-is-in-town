import { List } from 'immutable';

import {
  ADD_FAVORITE,
  REMOVE_FAVORITE
} from './constants';

const initialState = List();

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE: {
      return state.push(action.event);
    }
    case REMOVE_FAVORITE: {
      return state.filter(event => event.id !== action.id);
    }
    default:
      return state;
  }
};

export default eventReducer;


