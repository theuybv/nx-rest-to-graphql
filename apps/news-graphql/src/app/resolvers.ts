import axios from 'axios';
import { Arg, Query, Resolver } from 'type-graphql';
import { BASE_API_URL, DEFAULT_QUERY_PARAMS } from './config';
import {
  ArchiveArticleList,
  ArticleType,
  ContentType,
  DataQueryParams,
  DisruptionArticleList,
  EventArticleList,
  Language,
  MaintenanceArticleList,
  NewsArticleList
} from './types';
import { orderBy } from 'lodash';

type ArticleResponse =
  NewsArticleList |
  ArchiveArticleList |
  EventArticleList |
  DisruptionArticleList |
  MaintenanceArticleList

const getDataFromApi = async (
  articleType: ArticleType,
  params?: DataQueryParams
) => {
  const overrideParams: DataQueryParams = {
    ...DEFAULT_QUERY_PARAMS,
    ...params
  };

  const {
    filterParams,
    orderType,
    orderField
  } = overrideParams;

  const response = await axios.get<ArticleResponse>(`${BASE_API_URL}/${articleType}`, {
    params: {
      ...overrideParams
    }
  });

  const orderedList = orderBy(response.data.list,
    [orderField],
    [orderType.toLowerCase()]
  );

  const filteredList = orderedList.filter(item => {
    return item[filterParams.field]
      .toLowerCase()
      .indexOf(filterParams.match.toLowerCase()) > -1;
  });

  return {
    ...response.data,
    list: filteredList
  };
};

@Resolver()
export class QueryResolvers {
  @Query(() => [Language])
  async languages() {
    return Object.values(Language).map((item) => item);
  }

  @Query(() => [ArticleType])
  async articleTypes() {
    return Object.values(ArticleType).map((item) => item);
  }

  @Query(() => [ContentType])
  async contentTypes() {
    return Object.values(ContentType).map((item) => item);
  }

  @Query(() => EventArticleList)
  async event(
    @Arg('params', { nullable: true })
      params?: DataQueryParams
  ) {
    return getDataFromApi(ArticleType.Event, params);
  }

  @Query(() => NewsArticleList)
  async news(
    @Arg('params', { nullable: true })
      params?: DataQueryParams
  ) {
    return getDataFromApi(ArticleType.News, params);
  }

  @Query(() => MaintenanceArticleList)
  async maintenance(
    @Arg('params', { nullable: true })
      params?: DataQueryParams
  ) {
    return getDataFromApi(ArticleType.Maintenance, params);
  }

  @Query(() => ArchiveArticleList)
  async archive(
    @Arg('params', { nullable: true })
      params?: DataQueryParams
  ) {
    return getDataFromApi(ArticleType.Archive, params);
  }

  @Query(() => DisruptionArticleList)
  async disruption(
    @Arg('params', { nullable: true })
      params?: DataQueryParams
  ) {
    return getDataFromApi(ArticleType.Disruption, params);
  }
}
