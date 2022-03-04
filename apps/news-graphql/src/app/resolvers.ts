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
  NewsArticleList,
} from './types';

const getDataFromApi = async (
  articleType: ArticleType,
  params?: DataQueryParams
) => {
  const overrideParams = {
    ...DEFAULT_QUERY_PARAMS,
    params,
  };
  const response = await axios.get(`${BASE_API_URL}/event`, {
    params: {
      ...overrideParams,
    },
  });
  return response.data;
};

@Resolver()
export class QueryResolvers {
  @Query((returns) => [Language])
  async languages() {
    return Object.values(Language).map((item) => item);
  }

  @Query((returns) => [ArticleType])
  async articleTypes() {
    return Object.values(ArticleType).map((item) => item);
  }

  @Query((returns) => [ContentType])
  async contentTypes() {
    return Object.values(ContentType).map((item) => item);
  }

  @Query((returns) => EventArticleList)
  async event(
    @Arg('params', { nullable: true })
    params?: DataQueryParams
  ) {
    return getDataFromApi(ArticleType.Event, params);
  }

  @Query((returns) => NewsArticleList)
  async news(
    @Arg('params', { nullable: true })
    params?: DataQueryParams
  ) {
    return getDataFromApi(ArticleType.News, params);
  }

  @Query((returns) => MaintenanceArticleList)
  async maintenance(
    @Arg('params', { nullable: true })
    params?: DataQueryParams
  ) {
    return getDataFromApi(ArticleType.Maintenance, params);
  }

  @Query((returns) => ArchiveArticleList)
  async archive(
    @Arg('params', { nullable: true })
    params?: DataQueryParams
  ) {
    return getDataFromApi(ArticleType.Archive, params);
  }

  @Query((returns) => DisruptionArticleList)
  async disruption(
    @Arg('params', { nullable: true })
    params?: DataQueryParams
  ) {
    return getDataFromApi(ArticleType.Disruption, params);
  }
}
