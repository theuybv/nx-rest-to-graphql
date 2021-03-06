import { FC } from 'react';
import { NewsArticle } from '../types';


const CarouselItem: FC<NewsArticle> = ({ title, uid, desktopImage }) => {
  return (
    <>
      <div className='card bg-base-100 shadow-xl image-full w-full'>
        <figure><img src={desktopImage?.url || ''} alt={desktopImage?.caption || ''} /></figure>
        <div className='card-body'>
          <h2 className='card-title text-base line-clamp-2 break-words '>{title}</h2>
          {/*<p>If a dog chews shoes whose shoes does he choose?</p>*/}
          <div className='card-actions justify-center'>
            <label htmlFor={uid?.toString()} className='w-12 sm:w-1/2 btn btn-primary modal-button btn-circle'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselItem;
