import { DictionaryActionTypes } from '../actions/dictionaries';
import { DictionaryConstant } from '../constants';

export interface DictionaryData {
  id: string;
  word: string;
  partsOfSpeech: string;
  description: string[];
  selected: boolean;
}

export interface DictionariesState {
  dictionary: DictionaryData[];
  starredWords: DictionaryData[];
}

const DEFAULT_STATE = {
  dictionary: [],
  starredWords: [],
};

const dictionaries = (
  state: DictionariesState = DEFAULT_STATE,
  action: DictionaryActionTypes
) => {
  console.log(action);
  switch (action.type) {
    case DictionaryConstant.SET_ALL:
      return { ...state, dictionary: action.dictionary };
    case DictionaryConstant.SELECTED_WORD:
      return {
        ...state,
        dictionary: state.dictionary.map((item) => ({
          ...item,
          selected: item.id === action.id ? action.selected : item.selected,
        })),
      };
    default:
      return state;
  }
};

export default dictionaries;
