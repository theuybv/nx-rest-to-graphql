import { FC } from 'react';
import { Article } from '../types';

const ArticleListItem: FC<Article> = ({ datePublished, title }) => {
  return (
    <div className='pt-4'>
      <span className='text-sm text-gray-500'>{Intl.DateTimeFormat('nl', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
      }).format(new Date(datePublished || new Date))}</span>
      <h3 className='text-md block hover:text-primary transition-colors'>
        <a href='#'>{title}</a>
      </h3>
    </div>
  );
};

export default ArticleListItem;
