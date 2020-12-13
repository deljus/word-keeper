export enum FetchConstant {
  FETCHING = 'FETCH/PROCESSING',
  SUCCESS = 'FETCH/SUCCESS',
  ERROR = 'FETCH/ERROR',
}

export enum DictionaryConstant {
  SET_ALL = 'DICTIONARY/SET_ALL',
  SELECTED_WORD = 'DICTIONARY/SELECTED_WORD',
}

export enum StarredWordsConstant {
  SET_ALL = 'STARRED_WORDS/SET_ALL',
  ADD = 'STARRED_WORDS/ADD',
  MOVE = 'STARRED_WORDS/MOVE',
  REMOVE = 'STARRED_WORDS/REMOVE',
}

export enum QueryConstant {
  QUERY = 'SAGAS/QUERY',
}

export enum Groups {
  VERB = 'verb',
  ADJECTIVE = 'adjective',
  NOUN = 'noun',
  ADVERB = 'adverb',
}
