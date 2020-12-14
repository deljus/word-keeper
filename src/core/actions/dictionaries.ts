import { DictionaryConstant, StarredWordsConstant } from '../constants';

export interface DictionaryData {
  id: string;
  word: string;
  partsOfSpeech: string;
  description: string;
  selected: boolean;
}

interface DictionarySetAllAction {
  type: DictionaryConstant.SET_ALL;
  dictionary: DictionaryData[];
}

interface StarredWordsSetAllAction {
  type: StarredWordsConstant.SET_ALL;
  dictionary: DictionaryData[];
}

interface DictionaryToggleSelectedWordAction {
  type: DictionaryConstant.SELECTED_WORD;
  id: string;
  selected: boolean;
}

interface MoveStarredWordsAction {
  type: StarredWordsConstant.MOVE;
  toId: string;
  fromId: string;
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

export const moveStarredWords = (
  fromId: string,
  toId: string
): MoveStarredWordsAction => ({
  type: StarredWordsConstant.MOVE,
  toId,
  fromId,
});

export const starredWordsSetAllAction = (
  dictionary: DictionaryData[]
): StarredWordsSetAllAction => ({
  type: StarredWordsConstant.SET_ALL,
  dictionary,
});

export type DictionaryActionTypes =
  | DictionarySetAllAction
  | DictionaryToggleSelectedWordAction
  | MoveStarredWordsAction
  | StarredWordsSetAllAction;
