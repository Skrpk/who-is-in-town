import { Map } from 'immutable';

import {
  LOAD_ARTIST,
  LOAD_ARTIST_EVENTS,
} from './constants';

const initialState = Map({
  artist: null,
  events: [],
});

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTIST: {
      return state.set('artist', action.artist);
    }

    case LOAD_ARTIST_EVENTS: {
      return state.set('events', action.events);
    }
    default:
      return state;
  }
};

export default mainReducer;


