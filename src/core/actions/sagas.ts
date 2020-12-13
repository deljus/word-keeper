import { QueryConstant } from '../constants';

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
