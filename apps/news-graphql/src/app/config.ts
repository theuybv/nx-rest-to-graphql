import { DataQueryParams, Language } from './types';

export const BASE_API_URL =
  'https://xmc-pi-newsfeed-api.shared.royalfloraholland.com';

export const DEFAULT_QUERY_PARAMS: DataQueryParams = {
  language: Language.Nl,
  skip: 0,
  take: 25,
};
