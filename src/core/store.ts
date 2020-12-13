import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { fetch, dictionaries } from './reducers';
import { FetchState } from './reducers/fetch';
import { DictionariesState } from './reducers/dictionaries';
import { sagas } from './sagas';

export interface RootState {
  fetch: FetchState;
  dictionaries: DictionariesState;
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({ fetch, dictionaries }),
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(sagas);

export default store;
