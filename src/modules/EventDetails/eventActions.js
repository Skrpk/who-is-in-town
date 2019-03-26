import {
  SET_CURRENT_EVENT,
  TOGGLE_FAVORITES,
} from './constants';

export const setCurrentEvent = (event) => ({
  type: SET_CURRENT_EVENT,
  event,
});

export const toggleFavorites = () => ({
  type: TOGGLE_FAVORITES,
});
