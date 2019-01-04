import {
  LOAD_ARTIST_REQUEST,
  LOAD_ARTIST_EVENTS_REQUEST,
} from './constants';

export const loadArtist = (artistName) => ({
  type: LOAD_ARTIST_REQUEST,
  artistName,
});

export const loadArtistsEvents = (artistName) => ({
  type: LOAD_ARTIST_EVENTS_REQUEST,
  artistName,
});

