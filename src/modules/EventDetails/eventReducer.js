import { Map } from 'immutable';

import {
  SET_CURRENT_EVENT,
} from './constants';

const initialState = Map({
  event: null,
});

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_EVENT: {
      return state.set('event', action.event);
    }
    default:
      return state;
  }
};

export default eventReducer;


