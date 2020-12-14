import { put, call, takeEvery, select } from '@redux-saga/core/effects';
import { Saga, SagaIterator } from '@redux-saga/core';
import { QueryConstant, AppConstant } from './constants';
import { QueryAction } from './actions/sagas';
import {
  fetchStartAction,
  fetchEndAction,
  fetchErrorAction,
} from './actions/fetch';
import {
  dictionarySetAllAction,
  starredWordsSetAllAction,
} from './actions/dictionaries';
import { request } from '../util/request';
import { serializeResponse } from '../util/serrializeResponse';

export function* startFetch({ search }: QueryAction): SagaIterator {
  if (!search) {
    yield put(dictionarySetAllAction([]));
    return;
  }

  yield put(fetchStartAction());

  try {
    const response = yield call(
      request,
      `https://api.datamuse.com/words?sp=${search}*&md=d&max=20`
    );

    const data = yield call(serializeResponse, response.parsedBody);

    yield put(dictionarySetAllAction(data));
    yield put(fetchEndAction());
  } catch (e) {
    yield put(fetchErrorAction(e.status, e.message));
  }
}

function* initApp() {
  const savedStarredWords = localStorage.getItem('starredWords');
  if (savedStarredWords) {
    yield put(starredWordsSetAllAction(JSON.parse(savedStarredWords)));
  }
}

function* leaveApp() {
  const starredWords = yield select((state) => state.dictionaries.starredWords);
  yield localStorage.setItem('starredWords', JSON.stringify(starredWords));
}

export function* sagas() {
  yield takeEvery(QueryConstant.QUERY, startFetch);
  yield takeEvery(AppConstant.INIT_APP, initApp);
  yield takeEvery(AppConstant.LEAVE_APP, leaveApp);
}
