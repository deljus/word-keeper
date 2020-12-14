import { DictionaryActionTypes } from '../actions/dictionaries';
import { DictionaryConstant, StarredWordsConstant } from '../constants';

export interface DictionaryData {
  id: string;
  word: string;
  partsOfSpeech: string;
  description: string;
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
): DictionariesState => {
  switch (action.type) {
    case DictionaryConstant.SET_ALL:
      const selectedWordsKeys = state.starredWords.map(({ id }) => id);
      return {
        ...state,
        dictionary: action.dictionary
          .map((item) => ({
            ...item,
            selected: selectedWordsKeys.includes(item.id)
              ? true
              : item.selected,
          }))
          .sort((a, b) => a.word.localeCompare(b.word)),
      };
    case DictionaryConstant.SELECTED_WORD:
      const dictionary = state.dictionary.map((item) => ({
        ...item,
        selected: item.id === action.id ? action.selected : item.selected,
      }));

      const selectedDicWord =
        dictionary.find(({ id }) => id === action.id) || [];

      const starredWords = action.selected
        ? [...state.starredWords, selectedDicWord]
        : state.starredWords.filter(({ id }) => id !== action.id);

      return <DictionariesState>{
        starredWords,
        dictionary,
      };
    case StarredWordsConstant.MOVE:
      const cStarredWords = Array.from(state.starredWords);

      const toIndex = cStarredWords.findIndex(({ id }) => id === action.toId);

      const fromIndex = cStarredWords.findIndex(
        ({ id }) => id === action.fromId
      );

      const [removed] = cStarredWords.splice(fromIndex, 1);
      cStarredWords.splice(toIndex, 0, removed);

      return { ...state, starredWords: cStarredWords };

    case StarredWordsConstant.SET_ALL:
      return { ...state, starredWords: action.dictionary };
    default:
      return state;
  }
};

export default dictionaries;
