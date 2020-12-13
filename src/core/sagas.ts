import { put, call, takeEvery } from 'redux-saga/effects';
import { QueryConstant } from './constants';
import { QueryAction } from './actions/sagas';
import {
  fetchStartAction,
  fetchEndAction,
  fetchErrorAction,
} from './actions/fetch';
import { dictionarySetAllAction, DictionaryData } from './actions/dictionaries';
import { request, HttpResponse } from '../util/request';
import { serializeResponse, RequestData } from '../util/serrializeResponse';

export function* startFetch({ search, groups }: QueryAction): Generator {
  yield put(fetchStartAction());
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const response: HttpResponse<RequestData[]> = yield call(
      request,
      `https://api.datamuse.com/words?sp=${search}*&md=d&max=20`
    );

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const data: DictionaryData[] = yield call(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      serializeResponse,
      response.parsedBody
    );

    yield put(dictionarySetAllAction(data));
    yield put(fetchEndAction());
  } catch (e) {
    yield put(fetchErrorAction(e.status, e.message));
  }
}

export function* sagas() {
  yield takeEvery(QueryConstant.QUERY, startFetch);
}
