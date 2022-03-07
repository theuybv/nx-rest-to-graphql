import { ContentType, DataQueryParams, FilterByField, Language, OrderByField, OrderType } from './types';

export const BASE_API_URL =
  'https://xmc-pi-newsfeed-api.shared.royalfloraholland.com';

export const DEFAULT_QUERY_PARAMS: DataQueryParams = {
  language: Language.Nl,
  skip: 0,
  take: 25,
  orderField: OrderByField.DatePublished,
  orderType: OrderType.Desc,
  filterParams: { match: '', field: FilterByField.Title },
  filterContentTypeParams: {
    in: [
      ContentType.CheckmarkListBlock,
      ContentType.DoubleImageBlock,
      ContentType.ImageBlock,
      ContentType.ImageGalleryBlock,
      ContentType.LinkListBlock,
      ContentType.NewsletterSubscribeBlock,
      ContentType.SectionTitleBlock,
      ContentType.TextBlock,
      ContentType.TextImageBlock,
      ContentType.VideoBlock
    ]
  }
};
