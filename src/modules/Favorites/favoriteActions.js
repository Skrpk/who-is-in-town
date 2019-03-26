import {
  ADD_FAVORITE,
  REMOVE_FAVORITE
} from './constants';

export const addEventToFavorites = (event) => ({
  type: ADD_FAVORITE,
  event,
});

export const removeEventFromFavorites = (id) => ({
  type: REMOVE_FAVORITE,
  id
});
