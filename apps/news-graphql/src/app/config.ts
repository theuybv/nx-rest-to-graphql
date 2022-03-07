import { ContentType, DataQueryParams, FilterByField, Language, OrderByField, OrderType } from './types';

export const BASE_API_URL =
  'https://xmc-pi-newsfeed-api.shared.royalfloraholland.com';

export const DEFAULT_QUERY_PARAMS: DataQueryParams = {
  language: Language.nl,
  skip: 0,
  take: 25,
  orderField: OrderByField.datePublished,
  orderType: OrderType.DESC,
  filterParams: { match: '', field: FilterByField.title },
  filterContentTypeParams: {
    in: [
      ContentType.checkmarkListBlock,
      ContentType.doubleImageBlock,
      ContentType.imageBlock,
      ContentType.imageGalleryBlock,
      ContentType.linkListBlock,
      ContentType.newsletterSubscribeBlock,
      ContentType.sectionTitleBlock,
      ContentType.textBlock,
      ContentType.textImageBlock,
      ContentType.videoBlock
    ]
  }
};
