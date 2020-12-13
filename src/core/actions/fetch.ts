import { FetchConstant } from '../constants';

interface FetchStartAction {
  type: FetchConstant.FETCHING;
}

interface FetchEndAction {
  type: FetchConstant.SUCCESS;
}

interface FetchErrorAction {
  type: FetchConstant.ERROR;
  error: string;
  status: number;
}

export const fetchStartAction = (): FetchStartAction => ({
  type: FetchConstant.FETCHING,
});

export const fetchEndAction = (): FetchEndAction => ({
  type: FetchConstant.SUCCESS,
});

export const fetchErrorAction = (
  status: number,
  error: string
): FetchErrorAction => ({
  type: FetchConstant.ERROR,
  status,
  error,
});

export type FetchActionTypes =
  | FetchStartAction
  | FetchErrorAction
  | FetchEndAction;
