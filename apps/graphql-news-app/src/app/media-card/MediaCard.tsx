import { FC } from 'react';
import { NewsArticle } from '../types';

const MediaCard: FC<NewsArticle> = ({title, shortDescription, desktopImage}) => {
  return (
    <div className='card w-full shadow-xl'>
      <figure><img className={'transition-all h-fit hover:scale-105'} src={desktopImage?.url || ''} alt={desktopImage?.caption || ''} /></figure>
      <div className='card-body'>
        <h2 className='card-title text-base hover:text-primary transition-colors'>
          <a href='#'>{title}</a>
        </h2>
        {/*<p className='leading-tight line-clamp-10'>{shortDescription}</p>*/}
      </div>
    </div>
  );
};

export default MediaCard;
