import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
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

export type ContentContent = {
  __typename?: 'ContentContent';
  text?: Maybe<Scalars['String']>;
  sectionTitle?: Maybe<Scalars['String']>;
};

export type Content = {
  __typename?: 'Content';
  type?: Maybe<ContentType>;
  content?: Maybe<ContentContent>;
};

export type MobileImage = {
  __typename?: 'MobileImage';
  url?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
};

export type DesktopImage = {
  __typename?: 'DesktopImage';
  url?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
};

export type Article = {
  uid?: Maybe<Scalars['Int']>;
  articleId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<ArticleType>;
  language?: Maybe<Language>;
  datePublished?: Maybe<Scalars['String']>;
  dateUpdated?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
};

export type NewsArticle = Article & {
  __typename?: 'NewsArticle';
  uid?: Maybe<Scalars['Int']>;
  articleId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<ArticleType>;
  language?: Maybe<Language>;
  datePublished?: Maybe<Scalars['String']>;
  dateUpdated?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  newsletterSubscription?: Maybe<Scalars['String']>;
  content?: Maybe<Array<Maybe<Content>>>;
  interests?: Maybe<Array<Maybe<Scalars['String']>>>;
  audiences?: Maybe<Array<Maybe<Scalars['String']>>>;
  mobileImage?: Maybe<MobileImage>;
  desktopImage?: Maybe<DesktopImage>;
};

export type MaintenanceArticle = {
  uid?: Maybe<Scalars['Int']>;
  articleId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<ArticleType>;
  language?: Maybe<Language>;
  datePublished?: Maybe<Scalars['String']>;
  dateUpdated?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
  statusLabel?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  content?: Maybe<Array<Maybe<Content>>>;
  updates?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DisruptionArticle = Article & {
  __typename?: 'DisruptionArticle';
  uid?: Maybe<Scalars['Int']>;
  articleId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<ArticleType>;
  language?: Maybe<Language>;
  datePublished?: Maybe<Scalars['String']>;
  dateUpdated?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
  statusLabel?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  content?: Maybe<Array<Maybe<Content>>>;
  updates?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ArchiveArticle = Article & {
  __typename?: 'ArchiveArticle';
  uid?: Maybe<Scalars['Int']>;
  articleId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<ArticleType>;
  language?: Maybe<Language>;
  datePublished?: Maybe<Scalars['String']>;
  dateUpdated?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
  statusLabel?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  content?: Maybe<Array<Maybe<Content>>>;
  updates?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type EventArticle = Article & {
  __typename?: 'EventArticle';
  uid?: Maybe<Scalars['Int']>;
  articleId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<ArticleType>;
  language?: Maybe<Language>;
  datePublished?: Maybe<Scalars['String']>;
  dateUpdated?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  dateLocation?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  content?: Maybe<Array<Maybe<Content>>>;
  mobileImage?: Maybe<MobileImage>;
  desktopImage?: Maybe<DesktopImage>;
};

export type Iterator = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
  currentPage?: Maybe<Scalars['Int']>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
  pageCount?: Maybe<Scalars['Int']>;
};

export type NewsArticleList = Iterator & {
  __typename?: 'NewsArticleList';
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
  currentPage?: Maybe<Scalars['Int']>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
  pageCount?: Maybe<Scalars['Int']>;
  list?: Maybe<Array<Maybe<NewsArticle>>>;
};

export type EventArticleList = Iterator & {
  __typename?: 'EventArticleList';
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
  currentPage?: Maybe<Scalars['Int']>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
  pageCount?: Maybe<Scalars['Int']>;
  list?: Maybe<Array<Maybe<EventArticle>>>;
};

export type MaintenanceArticleList = Iterator & {
  __typename?: 'MaintenanceArticleList';
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
  currentPage?: Maybe<Scalars['Int']>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
  pageCount?: Maybe<Scalars['Int']>;
  list?: Maybe<Array<Maybe<MaintenanceArticle>>>;
};

export type DisruptionArticleList = Iterator & {
  __typename?: 'DisruptionArticleList';
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
  currentPage?: Maybe<Scalars['Int']>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
  pageCount?: Maybe<Scalars['Int']>;
  list?: Maybe<Array<Maybe<DisruptionArticle>>>;
};

export type ArchiveArticleList = Iterator & {
  __typename?: 'ArchiveArticleList';
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
  currentPage?: Maybe<Scalars['Int']>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
  pageCount?: Maybe<Scalars['Int']>;
  list?: Maybe<Array<Maybe<DisruptionArticle>>>;
};

export enum ArticleType {
  News = 'news',
  Event = 'event',
  Disruption = 'disruption',
  Maintenance = 'maintenance',
  Archive = 'archive',
  Press = 'press',
}

export enum ContentType {
  SectionTitleBlock = 'sectionTitleBlock',
  TextBlock = 'textBlock',
  ImageBlock = 'imageBlock',
  TextImageBlock = 'textImageBlock',
  DoubleImageBlock = 'doubleImageBlock',
  VideoBlock = 'videoBlock',
  ImageGalleryBlock = 'imageGalleryBlock',
  NewsletterSubscribeBlock = 'newsletterSubscribeBlock',
  LinkListBlock = 'linkListBlock',
  CheckmarkListBlock = 'checkmarkListBlock',
}

export enum Status {
  Reported = 'reported',
  InProgress = 'inProgress',
  Resolved = 'resolved',
}

export enum Language {
  Nl = 'nl',
  De = 'de',
  En = 'en',
}

export enum LocationName {
  Aalsmeer = 'Aalsmeer',
  Naaldwijk = 'Naaldwijk',
  Rijnburg = 'Rijnburg',
}

export type DataQueryParams = {
  language?: InputMaybe<Language>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  languages?: Maybe<Array<Maybe<Language>>>;
  contentTypes?: Maybe<Array<Maybe<ContentType>>>;
  articleTypes?: Maybe<Array<Maybe<ArticleType>>>;
  news?: Maybe<NewsArticleList>;
  event?: Maybe<EventArticleList>;
  maintenance?: Maybe<MaintenanceArticleList>;
  disruption?: Maybe<DisruptionArticleList>;
  archive?: Maybe<ArchiveArticleList>;
};

export type QueryNewsArgs = {
  params?: InputMaybe<DataQueryParams>;
};

export type QueryEventArgs = {
  params?: InputMaybe<DataQueryParams>;
};

export type QueryMaintenanceArgs = {
  params?: InputMaybe<DataQueryParams>;
};

export type QueryDisruptionArgs = {
  params?: InputMaybe<DataQueryParams>;
};

export type QueryArchiveArgs = {
  params?: InputMaybe<DataQueryParams>;
};

type ArticleFields_NewsArticle_Fragment = {
  __typename?: 'NewsArticle';
  uid?: number | null;
  articleId?: number | null;
  title?: string | null;
  type?: ArticleType | null;
  language?: Language | null;
  datePublished?: string | null;
  dateUpdated?: string | null;
  url?: string | null;
  shortDescription?: string | null;
};

type ArticleFields_DisruptionArticle_Fragment = {
  __typename?: 'DisruptionArticle';
  uid?: number | null;
  articleId?: number | null;
  title?: string | null;
  type?: ArticleType | null;
  language?: Language | null;
  datePublished?: string | null;
  dateUpdated?: string | null;
  url?: string | null;
  shortDescription?: string | null;
};

type ArticleFields_ArchiveArticle_Fragment = {
  __typename?: 'ArchiveArticle';
  uid?: number | null;
  articleId?: number | null;
  title?: string | null;
  type?: ArticleType | null;
  language?: Language | null;
  datePublished?: string | null;
  dateUpdated?: string | null;
  url?: string | null;
  shortDescription?: string | null;
};

type ArticleFields_EventArticle_Fragment = {
  __typename?: 'EventArticle';
  uid?: number | null;
  articleId?: number | null;
  title?: string | null;
  type?: ArticleType | null;
  language?: Language | null;
  datePublished?: string | null;
  dateUpdated?: string | null;
  url?: string | null;
  shortDescription?: string | null;
};

export type ArticleFieldsFragment =
  | ArticleFields_NewsArticle_Fragment
  | ArticleFields_DisruptionArticle_Fragment
  | ArticleFields_ArchiveArticle_Fragment
  | ArticleFields_EventArticle_Fragment;

export type NewsAndEventQueryVariables = Exact<{ [key: string]: never }>;

export type NewsAndEventQuery = {
  __typename?: 'Query';
  news?: {
    __typename?: 'NewsArticleList';
    list?: Array<{
      __typename?: 'NewsArticle';
      uid?: number | null;
      articleId?: number | null;
      title?: string | null;
      type?: ArticleType | null;
      language?: Language | null;
      datePublished?: string | null;
      dateUpdated?: string | null;
      url?: string | null;
      shortDescription?: string | null;
    } | null> | null;
  } | null;
  event?: {
    __typename?: 'EventArticleList';
    list?: Array<{
      __typename?: 'EventArticle';
      uid?: number | null;
      articleId?: number | null;
      title?: string | null;
      type?: ArticleType | null;
      language?: Language | null;
      datePublished?: string | null;
      dateUpdated?: string | null;
      url?: string | null;
      shortDescription?: string | null;
    } | null> | null;
  } | null;
};

export const ArticleFieldsFragmentDoc = gql`
  fragment ArticleFields on Article {
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
export const NewsAndEventDocument = gql`
  query NewsAndEvent {
    news {
      list {
        ...ArticleFields
      }
    }
    event {
      list {
        ...ArticleFields
      }
    }
  }
  ${ArticleFieldsFragmentDoc}
`;

export function useNewsAndEventQuery(
  options?: Omit<Urql.UseQueryArgs<NewsAndEventQueryVariables>, 'query'>
) {
  return Urql.useQuery<NewsAndEventQuery>({
    query: NewsAndEventDocument,
    ...options,
  });
}
