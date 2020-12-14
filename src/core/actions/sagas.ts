import { QueryConstant, AppConstant } from '../constants';

export interface QueryParams {
  search?: string;
  groups: string[];
}

export interface QueryAction extends QueryParams {
  type: QueryConstant.QUERY;
}

export const queryAction = ({ search, groups }: QueryParams): QueryAction => ({
  type: QueryConstant.QUERY,
  search,
  groups,
});

export interface InitAppAction {
  type: AppConstant.INIT_APP;
}

export interface LeaveAppAction {
  type: AppConstant.LEAVE_APP;
}

export const initAppAction = (): InitAppAction => ({
  type: AppConstant.INIT_APP,
});

export const leaveAppAction = (): LeaveAppAction => ({
  type: AppConstant.LEAVE_APP,
});
