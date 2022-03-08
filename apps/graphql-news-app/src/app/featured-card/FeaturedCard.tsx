import { FC } from 'react';
import { EventArticle, NewsArticle } from '../types';


const FeaturedCard: FC<NewsArticle | EventArticle> = ({ title, shortDescription, desktopImage }) => {
  return (
    <section>
      <div className='card w-full bg-base-100 shadow-xl image-full flex h-80  transition-all hover:scale-95' >
        <figure><img src={desktopImage?.url || ''} alt={desktopImage?.caption || ''} /></figure>
        <div className='card-body flex-row items-end'>
          <div>
            <h2 className='card-title'>{title}</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCard;
