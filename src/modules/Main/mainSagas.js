import { takeEvery, call, put, all, fork } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import axios from 'axios';

// import callApi from '../../utils/apiCaller';
import {
  LOAD_ARTIST,
  LOAD_ARTIST_REQUEST,
  LOAD_ARTIST_EVENTS,
  LOAD_ARTIST_EVENTS_REQUEST,
} from './constants';

const API_URL = 'https://rest.bandsintown.com';

function* loadArtistRequest({ artistName }) {
  try {
    const { data } = yield call(axios, `${API_URL}/artists/${artistName}?app_id=asdasd`);

    yield put({
      type: LOAD_ARTIST,
      artist: data,
    });
  } catch ({ message }) {
    console.error(message);
  }
}

function* loadArtistsEventsRequest({ artistName }) {
  try {
    const { data } = yield call(axios, `${API_URL}/artists/${artistName}/events?app_id=asdasd`);

    yield put({
      type: LOAD_ARTIST_EVENTS,
      events: data,
    });
  } catch ({ message }) {
    console.error(message);
  }
}

function* loadArtistSaga() {
  yield takeEvery(LOAD_ARTIST_REQUEST, loadArtistRequest);
}

function* loadArtistEventsSaga() {
  yield takeEvery(LOAD_ARTIST_EVENTS_REQUEST, loadArtistsEventsRequest);
}

export default function* rootMainSaga() {
  yield all([
    fork(loadArtistSaga),
    fork(loadArtistEventsSaga),
  ]);
}
