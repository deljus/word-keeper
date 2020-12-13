import { FetchActionTypes } from '../actions/fetch';
import { FetchConstant } from '../constants';

export interface FetchState {
  loading: boolean;
  error: string | null;
  status: number | null;
}

const DEFAULT_STATE = {
  loading: false,
  error: '',
  status: null,
};

const fetchReducer = (
  state: FetchState = DEFAULT_STATE,
  action: FetchActionTypes
): FetchState => {
  switch (action.type) {
    case FetchConstant.FETCHING:
      return { ...DEFAULT_STATE, loading: true };
    case FetchConstant.SUCCESS:
      return { ...DEFAULT_STATE, loading: false };
    case FetchConstant.ERROR:
      return { loading: false, error: action.error, status: action.status };
    default:
      return state;
  }
};

export default fetchReducer;
