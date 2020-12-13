import { DictionaryConstant, StarredWordsConstant } from '../constants';

export interface DictionaryData {
  id: string;
  word: string;
  partsOfSpeech: string;
  description: string[];
  selected: boolean;
}

interface DictionarySetAllAction {
  type: DictionaryConstant.SET_ALL;
  dictionary: DictionaryData[];
}

interface DictionaryToggleSelectedWordAction {
  type: DictionaryConstant.SELECTED_WORD;
  id: string;
  selected: boolean;
}

export const dictionarySetAllAction = (
  dictionary: DictionaryData[]
): DictionarySetAllAction => ({
  type: DictionaryConstant.SET_ALL,
  dictionary,
});

export const dictionaryToggleSelectedWordAction = (
  id: string,
  selected: boolean
): DictionaryToggleSelectedWordAction => ({
  type: DictionaryConstant.SELECTED_WORD,
  id,
  selected,
});

export type DictionaryActionTypes =
  | DictionarySetAllAction
  | DictionaryToggleSelectedWordAction;
