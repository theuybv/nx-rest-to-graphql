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
import { orderBy, intersection } from 'lodash';

type ArticleResponse =
  NewsArticleList |
  ArchiveArticleList |
  EventArticleList |
  DisruptionArticleList |
  MaintenanceArticleList

const getDataFromApi = async (
  articleType: ArticleType,
  params?: DataQueryParams
): Promise<ArticleResponse> => {
  const overrideParams: DataQueryParams = {
    ...DEFAULT_QUERY_PARAMS,
    ...params
  };

  const {
    filterParams,
    orderType,
    orderField,
    filterContentTypeParams
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
  }).filter(item => {
    const types = item.content.map(contentType => contentType.type);
    return intersection(filterContentTypeParams.in, types).length > 0;
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
    return getDataFromApi(ArticleType.event, params);
  }

  @Query(() => NewsArticleList)
  async news(
    @Arg('params', { nullable: true })
      params?: DataQueryParams
  ) {
    return getDataFromApi(ArticleType.news, params);
  }

  @Query(() => MaintenanceArticleList)
  async maintenance(
    @Arg('params', { nullable: true })
      params?: DataQueryParams
  ) {
    return getDataFromApi(ArticleType.maintenance, params);
  }

  @Query(() => ArchiveArticleList)
  async archive(
    @Arg('params', { nullable: true })
      params?: DataQueryParams
  ) {
    return getDataFromApi(ArticleType.archive, params);
  }

  @Query(() => DisruptionArticleList)
  async disruption(
    @Arg('params', { nullable: true })
      params?: DataQueryParams
  ) {
    return getDataFromApi(ArticleType.disruption, params);
  }
}
