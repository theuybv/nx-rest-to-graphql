import * as TypeGraphQL from 'type-graphql';
export { TypeGraphQL };
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type FixDecorator<T> = T;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

@TypeGraphQL.InterfaceType()
export abstract class Article {

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  articleId!: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  datePublished!: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  dateUpdated!: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => Language, { nullable: true })
  language!: Maybe<Language>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  shortDescription!: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  title!: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => ArticleType, { nullable: true })
  type!: Maybe<ArticleType>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  uid!: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  url!: Maybe<Scalars['String']>;
};

@TypeGraphQL.InterfaceType()
export abstract class Iterator {

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  currentPage!: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => Boolean, { nullable: true })
  hasNextPage!: Maybe<Scalars['Boolean']>;

  @TypeGraphQL.Field(type => Boolean, { nullable: true })
  hasPreviousPage!: Maybe<Scalars['Boolean']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  pageCount!: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  skip!: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  take!: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  total!: Maybe<Scalars['Int']>;
};

@TypeGraphQL.InterfaceType()
export abstract class MaintenanceArticle {

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  articleId!: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => [Content], { nullable: 'itemsAndList' })
  content!: Maybe<Array<Maybe<Content>>>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  datePublished!: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  dateUpdated!: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  endDate!: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => Language, { nullable: true })
  language!: Maybe<Language>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  shortDescription!: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  startDate!: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => Status, { nullable: true })
  status!: Maybe<Status>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  statusLabel!: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  title!: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => ArticleType, { nullable: true })
  type!: Maybe<ArticleType>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  uid!: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => [String], { nullable: 'itemsAndList' })
  updates!: Maybe<Array<Maybe<Scalars['String']>>>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  url!: Maybe<Scalars['String']>;
};

@TypeGraphQL.ObjectType({ implements: Article })
export class ArchiveArticle extends Article {
  __typename?: 'ArchiveArticle';

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  articleId!: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => [Content], { nullable: 'itemsAndList' })
  content!: Maybe<Array<Maybe<Content>>>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  datePublished!: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  dateUpdated!: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  endDate!: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => Language, { nullable: true })
  language!: Maybe<Language>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  shortDescription!: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  startDate!: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => Status, { nullable: true })
  status!: Maybe<Status>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  statusLabel!: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  title!: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => ArticleType, { nullable: true })
  type!: Maybe<ArticleType>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  uid!: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => [String], { nullable: 'itemsAndList' })
  updates!: Maybe<Array<Maybe<Scalars['String']>>>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  url!: Maybe<Scalars['String']>;
};

@TypeGraphQL.ObjectType({ implements: Iterator })
export class ArchiveArticleList extends Iterator {
  __typename?: 'ArchiveArticleList';

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  currentPage!: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => Boolean, { nullable: true })
  hasNextPage!: Maybe<Scalars['Boolean']>;

  @TypeGraphQL.Field(type => Boolean, { nullable: true })
  hasPreviousPage!: Maybe<Scalars['Boolean']>;

  @TypeGraphQL.Field(type => [DisruptionArticle], { nullable: 'itemsAndList' })
  list!: Maybe<Array<Maybe<DisruptionArticle>>>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  pageCount!: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  skip!: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  take!: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  total!: Maybe<Scalars['Int']>;
};

export enum ArticleType {
  archive = 'archive',
  disruption = 'disruption',
  event = 'event',
  maintenance = 'maintenance',
  news = 'news',
  press = 'press'
}
TypeGraphQL.registerEnumType(ArticleType, { name: 'ArticleType' });

@TypeGraphQL.ObjectType()
export class Content {
  __typename?: 'Content';

  @TypeGraphQL.Field(type => ContentContent, { nullable: true })
  content!: Maybe<ContentContent>;

  @TypeGraphQL.Field(type => ContentType, { nullable: true })
  type!: Maybe<ContentType>;
};

@TypeGraphQL.ObjectType()
export class ContentContent {
  __typename?: 'ContentContent';

  @TypeGraphQL.Field(type => String, { nullable: true })
  description!: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  sectionTitle!: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  text!: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  title!: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  video!: Maybe<Scalars['String']>;
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
TypeGraphQL.registerEnumType(ContentType, { name: 'ContentType' });

@TypeGraphQL.InputType()
export class DataQueryParams {

  @TypeGraphQL.Field(type => FilterContentTypeParams, { nullable: true })
  filterContentTypeParams!: Maybe<FilterContentTypeParams>;

  @TypeGraphQL.Field(type => FilterParams, { nullable: true })
  filterParams!: Maybe<FilterParams>;

  @TypeGraphQL.Field(type => Language, { nullable: true })
  language!: Maybe<Language>;

  @TypeGraphQL.Field(type => OrderByField, { nullable: true })
  orderField!: Maybe<OrderByField>;

  @TypeGraphQL.Field(type => OrderType, { nullable: true })
  orderType!: Maybe<OrderType>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  skip!: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  take!: Maybe<Scalars['Int']>;
};


@TypeGraphQL.ObjectType()
export class DesktopImage {
  __typename?: 'DesktopImage';

  @TypeGraphQL.Field(type => String, { nullable: true })
  caption!: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  url!: Maybe<Scalars['String']>;
};

@TypeGraphQL.ObjectType({ implements: Article })
export class DisruptionArticle extends Article {
  __typename?: 'DisruptionArticle';

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  articleId!: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => [Content], { nullable: 'itemsAndList' })
  content!: Maybe<Array<Maybe<Content>>>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  datePublished!: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  dateUpdated!: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  endDate!: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => Language, { nullable: true })
  language!: Maybe<Language>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  shortDescription!: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  startDate!: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => Status, { nullable: true })
  status!: Maybe<Status>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  statusLabel!: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  title!: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => ArticleType, { nullable: true })
  type!: Maybe<ArticleType>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  uid!: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => [String], { nullable: 'itemsAndList' })
  updates!: Maybe<Array<Maybe<Scalars['String']>>>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  url!: Maybe<Scalars['String']>;
};

@TypeGraphQL.ObjectType({ implements: Iterator })
export class DisruptionArticleList extends Iterator {
  __typename?: 'DisruptionArticleList';

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  currentPage!: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => Boolean, { nullable: true })
  hasNextPage!: Maybe<Scalars['Boolean']>;

  @TypeGraphQL.Field(type => Boolean, { nullable: true })
  hasPreviousPage!: Maybe<Scalars['Boolean']>;

  @TypeGraphQL.Field(type => [DisruptionArticle], { nullable: 'itemsAndList' })
  list!: Maybe<Array<Maybe<DisruptionArticle>>>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  pageCount!: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  skip!: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  take!: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  total!: Maybe<Scalars['Int']>;
};

@TypeGraphQL.ObjectType({ implements: Article })
export class EventArticle extends Article {
  __typename?: 'EventArticle';

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  articleId!: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => [Content], { nullable: 'itemsAndList' })
  content!: Maybe<Array<Maybe<Content>>>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  dateLocation!: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  datePublished!: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  dateUpdated!: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => DesktopImage, { nullable: true })
  desktopImage!: Maybe<DesktopImage>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  endDate!: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => Language, { nullable: true })
  language!: Maybe<Language>;

  @TypeGraphQL.Field(type => MobileImage, { nullable: true })
  mobileImage!: Maybe<MobileImage>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  shortDescription!: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  startDate!: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  title!: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => ArticleType, { nullable: true })
  type!: Maybe<ArticleType>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  uid!: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  url!: Maybe<Scalars['String']>;
};

@TypeGraphQL.ObjectType({ implements: Iterator })
export class EventArticleList extends Iterator {
  __typename?: 'EventArticleList';

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  currentPage!: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => Boolean, { nullable: true })
  hasNextPage!: Maybe<Scalars['Boolean']>;

  @TypeGraphQL.Field(type => Boolean, { nullable: true })
  hasPreviousPage!: Maybe<Scalars['Boolean']>;

  @TypeGraphQL.Field(type => [EventArticle], { nullable: 'itemsAndList' })
  list!: Maybe<Array<Maybe<EventArticle>>>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  pageCount!: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  skip!: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  take!: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  total!: Maybe<Scalars['Int']>;
};

export enum FilterByField {
  shortDescription = 'shortDescription',
  title = 'title'
}
TypeGraphQL.registerEnumType(FilterByField, { name: 'FilterByField' });

@TypeGraphQL.InputType()
export class FilterContentTypeParams {

  @TypeGraphQL.Field(type => [ContentType], { nullable: 'itemsAndList' })
  in!: Maybe<Array<Maybe<ContentType>>>;
};

@TypeGraphQL.InputType()
export class FilterParams {

  @TypeGraphQL.Field(type => FilterByField, { nullable: true })
  field!: Maybe<FilterByField>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  match!: Maybe<Scalars['String']>;
};

export enum Language {
  de = 'de',
  en = 'en',
  nl = 'nl'
}
TypeGraphQL.registerEnumType(Language, { name: 'Language' });

export enum LocationName {
  Aalsmeer = 'Aalsmeer',
  Naaldwijk = 'Naaldwijk',
  Rijnburg = 'Rijnburg'
}
TypeGraphQL.registerEnumType(LocationName, { name: 'LocationName' });

@TypeGraphQL.ObjectType({ implements: Iterator })
export class MaintenanceArticleList extends Iterator {
  __typename?: 'MaintenanceArticleList';

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  currentPage!: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => Boolean, { nullable: true })
  hasNextPage!: Maybe<Scalars['Boolean']>;

  @TypeGraphQL.Field(type => Boolean, { nullable: true })
  hasPreviousPage!: Maybe<Scalars['Boolean']>;

  @TypeGraphQL.Field(type => [MaintenanceArticle], { nullable: 'itemsAndList' })
  list!: Maybe<Array<Maybe<MaintenanceArticle>>>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  pageCount!: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  skip!: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  take!: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  total!: Maybe<Scalars['Int']>;
};

@TypeGraphQL.ObjectType()
export class MobileImage {
  __typename?: 'MobileImage';

  @TypeGraphQL.Field(type => String, { nullable: true })
  caption!: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  url!: Maybe<Scalars['String']>;
};

@TypeGraphQL.ObjectType({ implements: Article })
export class NewsArticle extends Article {
  __typename?: 'NewsArticle';

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  articleId!: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => [String], { nullable: 'itemsAndList' })
  audiences!: Maybe<Array<Maybe<Scalars['String']>>>;

  @TypeGraphQL.Field(type => [Content], { nullable: 'itemsAndList' })
  content!: Maybe<Array<Maybe<Content>>>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  datePublished!: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  dateUpdated!: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => DesktopImage, { nullable: true })
  desktopImage!: Maybe<DesktopImage>;

  @TypeGraphQL.Field(type => [String], { nullable: 'itemsAndList' })
  interests!: Maybe<Array<Maybe<Scalars['String']>>>;

  @TypeGraphQL.Field(type => Language, { nullable: true })
  language!: Maybe<Language>;

  @TypeGraphQL.Field(type => MobileImage, { nullable: true })
  mobileImage!: Maybe<MobileImage>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  newsletterSubscription!: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  shortDescription!: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  title!: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => ArticleType, { nullable: true })
  type!: Maybe<ArticleType>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  uid!: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  url!: Maybe<Scalars['String']>;
};

@TypeGraphQL.ObjectType({ implements: Iterator })
export class NewsArticleList extends Iterator {
  __typename?: 'NewsArticleList';

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  currentPage!: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => Boolean, { nullable: true })
  hasNextPage!: Maybe<Scalars['Boolean']>;

  @TypeGraphQL.Field(type => Boolean, { nullable: true })
  hasPreviousPage!: Maybe<Scalars['Boolean']>;

  @TypeGraphQL.Field(type => [NewsArticle], { nullable: 'itemsAndList' })
  list!: Maybe<Array<Maybe<NewsArticle>>>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  pageCount!: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  skip!: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  take!: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  total!: Maybe<Scalars['Int']>;
};

export enum OrderByField {
  articleId = 'articleId',
  datePublished = 'datePublished',
  dateUpdated = 'dateUpdated',
  uid = 'uid'
}
TypeGraphQL.registerEnumType(OrderByField, { name: 'OrderByField' });

export enum OrderType {
  ASC = 'ASC',
  DESC = 'DESC'
}
TypeGraphQL.registerEnumType(OrderType, { name: 'OrderType' });

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


@TypeGraphQL.ArgsType()
export class QueryArchiveArgs {

  @TypeGraphQL.Field(type => DataQueryParams, { nullable: true })
  params!: Maybe<DataQueryParams>;
};


@TypeGraphQL.ArgsType()
export class QueryDisruptionArgs {

  @TypeGraphQL.Field(type => DataQueryParams, { nullable: true })
  params!: Maybe<DataQueryParams>;
};


@TypeGraphQL.ArgsType()
export class QueryEventArgs {

  @TypeGraphQL.Field(type => DataQueryParams, { nullable: true })
  params!: Maybe<DataQueryParams>;
};


@TypeGraphQL.ArgsType()
export class QueryMaintenanceArgs {

  @TypeGraphQL.Field(type => DataQueryParams, { nullable: true })
  params!: Maybe<DataQueryParams>;
};


@TypeGraphQL.ArgsType()
export class QueryNewsArgs {

  @TypeGraphQL.Field(type => DataQueryParams, { nullable: true })
  params!: Maybe<DataQueryParams>;
};

export enum Status {
  inProgress = 'inProgress',
  reported = 'reported',
  resolved = 'resolved'
}
TypeGraphQL.registerEnumType(Status, { name: 'Status' });
