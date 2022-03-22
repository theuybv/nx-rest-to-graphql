import {ContentType, useFrontPageArticlesQuery} from '../types';
import {FC, FunctionComponent} from 'react';
import Navbar from '../navbar/Navbar';
import FeaturedCard from '../featured-card/FeaturedCard';
import MediaCard from '../media-card/MediaCard';
import ArticleListItem from '../article-list-item/ArticleListItem';
import Carousel from '../carousel/carousel';
import CarouselItem from '../carousel-item/CarouselItem';
import RfhLogo from '../RfhLogo';


const Dashboard: FC = () => {
  const [{fetching, data}] = useFrontPageArticlesQuery();

  const videoSlides: { Component: FunctionComponent }[] = data?.latestVideos?.list?.map((item, index) => {
    return {
      Component: () => <CarouselItem key={index} {...item} />
    };
  }) || [];

  if (fetching) {
    return <div className={'w-full flex justify-center items-center'} style={{height: '100vh'}}>
      <div className={'flex flex-col items-center gap-2'}>
        <RfhLogo/>
        <div className={'ml-4 text-xs block'}>'s wachten waard</div>
      </div>
    </div>;
  }


  return (
    <div className={'animate-fade pb-8'}>
      {data?.latestVideos?.list?.map((item, index) => {
        const videContent = item?.content?.find(content => content?.type === ContentType.videoBlock);
        return <div key={index}>
          <input type='checkbox' id={item?.uid?.toString()} className='modal-toggle'/>
          <div className='modal items-center'>
            <div className='modal-box'>
              <h3 className='font-bold text-lg'>{item?.title}</h3>
              <p className={'mt-4'}>
                <iframe
                  className={'w-full max-h-[400px] aspect-video'}
                  src={'https://' + videContent?.content?.video?.replace('//', '').replace('/watch?v=', '/embed/')}/>
              </p>
              <div className='modal-action'>
                <label htmlFor={item?.uid?.toString()} className='btn w-full btn-primary'>Sluiten</label>
              </div>
            </div>
          </div>
        </div>;
      })}

      <Navbar/>
      <div className='container mx-auto max-w-5xl my-6 flex gap-6 flex-col px-4'>
        <section className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {data?.featuredNews?.list?.map((item, index) => <FeaturedCard key={index} {...item} />)}
          {data?.featuredEvents?.list?.map((item, index) => <FeaturedCard key={index} {...item} />)}
        </section>
        <div className='flex flex-col sm:flex-row gap-4'>
          <div className='w-full sm:w-3/4 h-fit'>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 '>
              {data?.restNews?.list?.map((item, index) => <MediaCard key={index} {...item} />)}
            </div>
            <div className='grid grid-cols-1 mt-8 flex gap-4'>
              <h2 className='text-3xl text-primary'>Kijken</h2>
              <Carousel slides={videoSlides}/>
            </div>
          </div>
          <div className='w-full sm:w-1/4'>
            <div className='shadow-md px-4 py-6'>
              <h3 className='text-2xl text-primary'>Laatste nieuws</h3>
              <div className='divide-y divide-solid flex gap-4 flex-col'>
                {data?.latestNews?.list?.map((item, index) => <ArticleListItem key={index} {...item} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
