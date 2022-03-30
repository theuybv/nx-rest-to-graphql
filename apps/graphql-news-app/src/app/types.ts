import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type ArchiveArticle = Article & {
  __typename?: 'ArchiveArticle';
  articleId?: Maybe<Scalars['Int']>;
  content?: Maybe<Array<Maybe<Content>>>;
  datePublished?: Maybe<Scalars['String']>;
  dateUpdated?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  shortDescription?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
  statusLabel?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<ArticleType>;
  uid?: Maybe<Scalars['Int']>;
  updates?: Maybe<Array<Maybe<Scalars['String']>>>;
  url?: Maybe<Scalars['String']>;
};

export type ArchiveArticleList = Iterator & {
  __typename?: 'ArchiveArticleList';
  currentPage?: Maybe<Scalars['Int']>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
  list?: Maybe<Array<Maybe<DisruptionArticle>>>;
  pageCount?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export type Article = {
  articleId?: Maybe<Scalars['Int']>;
  datePublished?: Maybe<Scalars['String']>;
  dateUpdated?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  shortDescription?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<ArticleType>;
  uid?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
};

export enum ArticleType {
  archive = 'archive',
  disruption = 'disruption',
  event = 'event',
  maintenance = 'maintenance',
  news = 'news',
  press = 'press'
}

export type AudienceOrInterest = {
  __typename?: 'AudienceOrInterest';
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Content = {
  __typename?: 'Content';
  content?: Maybe<ContentContent>;
  type?: Maybe<ContentType>;
};

export type ContentContent = {
  __typename?: 'ContentContent';
  description?: Maybe<Scalars['String']>;
  sectionTitle?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  video?: Maybe<Scalars['String']>;
};

export enum ContentType {
  checkmarkListBlock = 'checkmarkListBlock',
  doubleImageBlock = 'doubleImageBlock',
  imageBlock = 'imageBlock',
  imageGalleryBlock = 'imageGalleryBlock',
  linkListBlock = 'linkListBlock',
  newsletterSubscribeBlock = 'newsletterSubscribeBlock',
  sectionTitleBlock = 'sectionTitleBlock',
  textBlock = 'textBlock',
  textImageBlock = 'textImageBlock',
  videoBlock = 'videoBlock'
}

export type DataQueryParams = {
  filterContentTypeParams?: InputMaybe<FilterContentTypeParams>;
  filterParams?: InputMaybe<FilterParams>;
  language?: InputMaybe<Language>;
  orderField?: InputMaybe<OrderByField>;
  orderType?: InputMaybe<OrderType>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type DesktopImage = {
  __typename?: 'DesktopImage';
  caption?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type DisruptionArticle = Article & {
  __typename?: 'DisruptionArticle';
  articleId?: Maybe<Scalars['Int']>;
  content?: Maybe<Array<Maybe<Content>>>;
  datePublished?: Maybe<Scalars['String']>;
  dateUpdated?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  shortDescription?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
  statusLabel?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<ArticleType>;
  uid?: Maybe<Scalars['Int']>;
  updates?: Maybe<Array<Maybe<Scalars['String']>>>;
  url?: Maybe<Scalars['String']>;
};

export type DisruptionArticleList = Iterator & {
  __typename?: 'DisruptionArticleList';
  currentPage?: Maybe<Scalars['Int']>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
  list?: Maybe<Array<Maybe<DisruptionArticle>>>;
  pageCount?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export type EventArticle = Article & {
  __typename?: 'EventArticle';
  articleId?: Maybe<Scalars['Int']>;
  content?: Maybe<Array<Maybe<Content>>>;
  dateLocation?: Maybe<Scalars['String']>;
  datePublished?: Maybe<Scalars['String']>;
  dateUpdated?: Maybe<Scalars['String']>;
  desktopImage?: Maybe<DesktopImage>;
  endDate?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobileImage?: Maybe<MobileImage>;
  shortDescription?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<ArticleType>;
  uid?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
};

export type EventArticleList = Iterator & {
  __typename?: 'EventArticleList';
  currentPage?: Maybe<Scalars['Int']>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
  list?: Maybe<Array<Maybe<EventArticle>>>;
  pageCount?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export enum FilterByField {
  shortDescription = 'shortDescription',
  title = 'title'
}

export type FilterContentTypeParams = {
  in?: InputMaybe<Array<InputMaybe<ContentType>>>;
};

export type FilterParams = {
  field?: InputMaybe<FilterByField>;
  match?: InputMaybe<Scalars['String']>;
};

export type Iterator = {
  currentPage?: Maybe<Scalars['Int']>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
  pageCount?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export enum Language {
  de = 'de',
  en = 'en',
  nl = 'nl'
}

export enum LocationName {
  Aalsmeer = 'Aalsmeer',
  Naaldwijk = 'Naaldwijk',
  Rijnburg = 'Rijnburg'
}

export type MaintenanceArticle = {
  articleId?: Maybe<Scalars['Int']>;
  content?: Maybe<Array<Maybe<Content>>>;
  datePublished?: Maybe<Scalars['String']>;
  dateUpdated?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  shortDescription?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
  statusLabel?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<ArticleType>;
  uid?: Maybe<Scalars['Int']>;
  updates?: Maybe<Array<Maybe<Scalars['String']>>>;
  url?: Maybe<Scalars['String']>;
};

export type MaintenanceArticleList = Iterator & {
  __typename?: 'MaintenanceArticleList';
  currentPage?: Maybe<Scalars['Int']>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
  list?: Maybe<Array<Maybe<MaintenanceArticle>>>;
  pageCount?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export type MobileImage = {
  __typename?: 'MobileImage';
  caption?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type NewsArticle = Article & {
  __typename?: 'NewsArticle';
  articleId?: Maybe<Scalars['Int']>;
  audiences?: Maybe<Array<Maybe<AudienceOrInterest>>>;
  content?: Maybe<Array<Maybe<Content>>>;
  datePublished?: Maybe<Scalars['String']>;
  dateUpdated?: Maybe<Scalars['String']>;
  desktopImage?: Maybe<DesktopImage>;
  interests?: Maybe<Array<Maybe<AudienceOrInterest>>>;
  language?: Maybe<Language>;
  mobileImage?: Maybe<MobileImage>;
  newsletterSubscription?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<ArticleType>;
  uid?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
};

export type NewsArticleList = Iterator & {
  __typename?: 'NewsArticleList';
  currentPage?: Maybe<Scalars['Int']>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
  list?: Maybe<Array<Maybe<NewsArticle>>>;
  pageCount?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export enum OrderByField {
  articleId = 'articleId',
  datePublished = 'datePublished',
  dateUpdated = 'dateUpdated',
  uid = 'uid'
}

export enum OrderType {
  ASC = 'ASC',
  DESC = 'DESC'
}

export type Query = {
  __typename?: 'Query';
  archive?: Maybe<ArchiveArticleList>;
  articleTypes?: Maybe<Array<Maybe<ArticleType>>>;
  contentTypes?: Maybe<Array<Maybe<ContentType>>>;
  disruption?: Maybe<DisruptionArticleList>;
  event?: Maybe<EventArticleList>;
  languages?: Maybe<Array<Maybe<Language>>>;
  maintenance?: Maybe<MaintenanceArticleList>;
  news?: Maybe<NewsArticleList>;
};


export type QueryArchiveArgs = {
  params?: InputMaybe<DataQueryParams>;
};


export type QueryDisruptionArgs = {
  params?: InputMaybe<DataQueryParams>;
};


export type QueryEventArgs = {
  params?: InputMaybe<DataQueryParams>;
};


export type QueryMaintenanceArgs = {
  params?: InputMaybe<DataQueryParams>;
};


export type QueryNewsArgs = {
  params?: InputMaybe<DataQueryParams>;
};

export enum Status {
  inProgress = 'inProgress',
  reported = 'reported',
  resolved = 'resolved'
}

type ArticleFragment_ArchiveArticle_Fragment = { __typename?: 'ArchiveArticle', uid?: number | null, articleId?: number | null, title?: string | null, type?: ArticleType | null, language?: Language | null, datePublished?: string | null, dateUpdated?: string | null, url?: string | null, shortDescription?: string | null };

type ArticleFragment_DisruptionArticle_Fragment = { __typename?: 'DisruptionArticle', uid?: number | null, articleId?: number | null, title?: string | null, type?: ArticleType | null, language?: Language | null, datePublished?: string | null, dateUpdated?: string | null, url?: string | null, shortDescription?: string | null };

type ArticleFragment_EventArticle_Fragment = { __typename?: 'EventArticle', uid?: number | null, articleId?: number | null, title?: string | null, type?: ArticleType | null, language?: Language | null, datePublished?: string | null, dateUpdated?: string | null, url?: string | null, shortDescription?: string | null };

type ArticleFragment_NewsArticle_Fragment = { __typename?: 'NewsArticle', uid?: number | null, articleId?: number | null, title?: string | null, type?: ArticleType | null, language?: Language | null, datePublished?: string | null, dateUpdated?: string | null, url?: string | null, shortDescription?: string | null };

export type ArticleFragmentFragment = ArticleFragment_ArchiveArticle_Fragment | ArticleFragment_DisruptionArticle_Fragment | ArticleFragment_EventArticle_Fragment | ArticleFragment_NewsArticle_Fragment;

type IteratorFragment_ArchiveArticleList_Fragment = { __typename?: 'ArchiveArticleList', currentPage?: number | null, hasNextPage?: boolean | null, hasPreviousPage?: boolean | null, pageCount?: number | null, skip?: number | null, take?: number | null, total?: number | null };

type IteratorFragment_DisruptionArticleList_Fragment = { __typename?: 'DisruptionArticleList', currentPage?: number | null, hasNextPage?: boolean | null, hasPreviousPage?: boolean | null, pageCount?: number | null, skip?: number | null, take?: number | null, total?: number | null };

type IteratorFragment_EventArticleList_Fragment = { __typename?: 'EventArticleList', currentPage?: number | null, hasNextPage?: boolean | null, hasPreviousPage?: boolean | null, pageCount?: number | null, skip?: number | null, take?: number | null, total?: number | null };

type IteratorFragment_MaintenanceArticleList_Fragment = { __typename?: 'MaintenanceArticleList', currentPage?: number | null, hasNextPage?: boolean | null, hasPreviousPage?: boolean | null, pageCount?: number | null, skip?: number | null, take?: number | null, total?: number | null };

type IteratorFragment_NewsArticleList_Fragment = { __typename?: 'NewsArticleList', currentPage?: number | null, hasNextPage?: boolean | null, hasPreviousPage?: boolean | null, pageCount?: number | null, skip?: number | null, take?: number | null, total?: number | null };

export type IteratorFragmentFragment = IteratorFragment_ArchiveArticleList_Fragment | IteratorFragment_DisruptionArticleList_Fragment | IteratorFragment_EventArticleList_Fragment | IteratorFragment_MaintenanceArticleList_Fragment | IteratorFragment_NewsArticleList_Fragment;

export type NewsAndEventQueryVariables = Exact<{ [key: string]: never; }>;


export type NewsAndEventQuery = { __typename?: 'Query', news?: { __typename?: 'NewsArticleList', currentPage?: number | null, hasNextPage?: boolean | null, hasPreviousPage?: boolean | null, pageCount?: number | null, skip?: number | null, take?: number | null, total?: number | null, list?: Array<{ __typename?: 'NewsArticle', uid?: number | null, articleId?: number | null, title?: string | null, type?: ArticleType | null, language?: Language | null, datePublished?: string | null, dateUpdated?: string | null, url?: string | null, shortDescription?: string | null } | null> | null } | null, event?: { __typename?: 'EventArticleList', currentPage?: number | null, hasNextPage?: boolean | null, hasPreviousPage?: boolean | null, pageCount?: number | null, skip?: number | null, take?: number | null, total?: number | null, list?: Array<{ __typename?: 'EventArticle', uid?: number | null, articleId?: number | null, title?: string | null, type?: ArticleType | null, language?: Language | null, datePublished?: string | null, dateUpdated?: string | null, url?: string | null, shortDescription?: string | null } | null> | null } | null };

export type NewsWithVideosQueryVariables = Exact<{
  params?: InputMaybe<DataQueryParams>;
}>;


export type NewsWithVideosQuery = { __typename?: 'Query', news?: { __typename?: 'NewsArticleList', list?: Array<{ __typename?: 'NewsArticle', title?: string | null, desktopImage?: { __typename?: 'DesktopImage', url?: string | null } | null, content?: Array<{ __typename?: 'Content', type?: ContentType | null, content?: { __typename?: 'ContentContent', video?: string | null } | null } | null> | null } | null> | null } | null };

export type NewsArticleListFragmentFragment = { __typename?: 'NewsArticleList', list?: Array<{ __typename?: 'NewsArticle', datePublished?: string | null, title?: string | null, articleId?: number | null, uid?: number | null, shortDescription?: string | null, desktopImage?: { __typename?: 'DesktopImage', url?: string | null } | null, content?: Array<{ __typename?: 'Content', type?: ContentType | null, content?: { __typename?: 'ContentContent', sectionTitle?: string | null, text?: string | null, video?: string | null, title?: string | null, description?: string | null } | null } | null> | null } | null> | null };

export type FrontPageArticlesQueryVariables = Exact<{ [key: string]: never; }>;


export type FrontPageArticlesQuery = { __typename?: 'Query', latestNews?: { __typename?: 'NewsArticleList', list?: Array<{ __typename?: 'NewsArticle', datePublished?: string | null, title?: string | null, articleId?: number | null, uid?: number | null, shortDescription?: string | null, desktopImage?: { __typename?: 'DesktopImage', url?: string | null } | null, content?: Array<{ __typename?: 'Content', type?: ContentType | null, content?: { __typename?: 'ContentContent', sectionTitle?: string | null, text?: string | null, video?: string | null, title?: string | null, description?: string | null } | null } | null> | null } | null> | null } | null, featuredNews?: { __typename?: 'NewsArticleList', list?: Array<{ __typename?: 'NewsArticle', datePublished?: string | null, title?: string | null, articleId?: number | null, uid?: number | null, shortDescription?: string | null, desktopImage?: { __typename?: 'DesktopImage', url?: string | null } | null, content?: Array<{ __typename?: 'Content', type?: ContentType | null, content?: { __typename?: 'ContentContent', sectionTitle?: string | null, text?: string | null, video?: string | null, title?: string | null, description?: string | null } | null } | null> | null } | null> | null } | null, restNews?: { __typename?: 'NewsArticleList', list?: Array<{ __typename?: 'NewsArticle', datePublished?: string | null, title?: string | null, articleId?: number | null, uid?: number | null, shortDescription?: string | null, desktopImage?: { __typename?: 'DesktopImage', url?: string | null } | null, content?: Array<{ __typename?: 'Content', type?: ContentType | null, content?: { __typename?: 'ContentContent', sectionTitle?: string | null, text?: string | null, video?: string | null, title?: string | null, description?: string | null } | null } | null> | null } | null> | null } | null, featuredEvents?: { __typename?: 'EventArticleList', list?: Array<{ __typename?: 'EventArticle', title?: string | null, shortDescription?: string | null, dateLocation?: string | null, startDate?: string | null, endDate?: string | null, desktopImage?: { __typename?: 'DesktopImage', url?: string | null } | null, content?: Array<{ __typename?: 'Content', type?: ContentType | null, content?: { __typename?: 'ContentContent', sectionTitle?: string | null, description?: string | null } | null } | null> | null } | null> | null } | null, latestVideos?: { __typename?: 'NewsArticleList', list?: Array<{ __typename?: 'NewsArticle', datePublished?: string | null, title?: string | null, articleId?: number | null, uid?: number | null, shortDescription?: string | null, desktopImage?: { __typename?: 'DesktopImage', url?: string | null } | null, content?: Array<{ __typename?: 'Content', type?: ContentType | null, content?: { __typename?: 'ContentContent', sectionTitle?: string | null, text?: string | null, video?: string | null, title?: string | null, description?: string | null } | null } | null> | null } | null> | null } | null };

export const ArticleFragmentFragmentDoc = gql`
    fragment ArticleFragment on Article {
  uid
  articleId
  title
  type
  language
  datePublished
  dateUpdated
  url
  shortDescription
}
    `;
export const IteratorFragmentFragmentDoc = gql`
    fragment IteratorFragment on Iterator {
  currentPage
  hasNextPage
  hasPreviousPage
  pageCount
  skip
  take
  total
}
    `;
export const NewsArticleListFragmentFragmentDoc = gql`
    fragment NewsArticleListFragment on NewsArticleList {
  list {
    desktopImage {
      url
    }
    datePublished
    title
    articleId
    uid
    shortDescription
    content {
      type
      content {
        sectionTitle
        text
        video
        title
        description
      }
    }
  }
}
    `;
export const NewsAndEventDocument = gql`
    query NewsAndEvent {
  news {
    ...IteratorFragment
    list {
      ...ArticleFragment
    }
  }
  event {
    ...IteratorFragment
    list {
      ...ArticleFragment
    }
  }
}
    ${IteratorFragmentFragmentDoc}
${ArticleFragmentFragmentDoc}`;

export function useNewsAndEventQuery(options?: Omit<Urql.UseQueryArgs<NewsAndEventQueryVariables>, 'query'>) {
  return Urql.useQuery<NewsAndEventQuery>({ query: NewsAndEventDocument, ...options });
};
export const NewsWithVideosDocument = gql`
    query newsWithVideos($params: DataQueryParams) {
  news(params: $params) {
    list {
      title
      desktopImage {
        url
      }
      content {
        type
        content {
          video
        }
      }
    }
  }
}
    `;

export function useNewsWithVideosQuery(options?: Omit<Urql.UseQueryArgs<NewsWithVideosQueryVariables>, 'query'>) {
  return Urql.useQuery<NewsWithVideosQuery>({ query: NewsWithVideosDocument, ...options });
};
export const FrontPageArticlesDocument = gql`
    query frontPageArticles {
  latestNews: news(params: {skip: 0, take: 15}) {
    ...NewsArticleListFragment
  }
  featuredNews: news(params: {skip: 0, take: 1}) {
    ...NewsArticleListFragment
  }
  restNews: news(params: {skip: 1, take: 12}) {
    ...NewsArticleListFragment
  }
  featuredEvents: event(params: {skip: 0, take: 1}) {
    list {
      title
      shortDescription
      dateLocation
      startDate
      endDate
      desktopImage {
        url
      }
      content {
        type
        content {
          sectionTitle
          description
        }
      }
    }
  }
  latestVideos: news(
    params: {filterContentTypeParams: {in: [videoBlock]}, take: 100, skip: 0}
  ) {
    ...NewsArticleListFragment
  }
}
    ${NewsArticleListFragmentFragmentDoc}`;

export function useFrontPageArticlesQuery(options?: Omit<Urql.UseQueryArgs<FrontPageArticlesQueryVariables>, 'query'>) {
  return Urql.useQuery<FrontPageArticlesQuery>({ query: FrontPageArticlesDocument, ...options });
};