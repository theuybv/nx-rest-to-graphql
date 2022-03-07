import { useFrontPageArticlesQuery } from '../types';
import { FC } from 'react';
import Navbar from '../navbar/Navbar';
import FeaturedCard from '../featured-card/FeaturedCard';
import MediaCard from '../media-card/MediaCard';
import ArticleListItem from '../article-list-item/ArticleListItem';


const Dashboard: FC = () => {
  const [{ fetching, data }] = useFrontPageArticlesQuery();


  if (fetching) {
    return <p>loading...</p>;
  }
  console.log(data?.latestVideos);
  return (
    <>
      <Navbar />
      <div className='container mx-auto max-w-5xl my-6 flex gap-6 flex-col px-4'>
        <section className='grid grid-cols-2 gap-4'>
          <FeaturedCard />
          <FeaturedCard />
        </section>
       <div className='flex flex-row gap-4'>
         <div className='w-3/4 grid grid-cols-3 gap-4 h-fit'>
           <MediaCard />
           <MediaCard />
           <MediaCard />
           <MediaCard />
           <MediaCard />
           <MediaCard />
         </div>
         <div className='w-1/4'>
           <div className='shadow-md px-4 py-6'>
             <h3 className='text-2xl'>Laatste nieuws</h3>
             <div className='divide-y divide-solid flex gap-4 flex-col'>
               <ArticleListItem />
               <ArticleListItem />
               <ArticleListItem />
               <ArticleListItem />
               <ArticleListItem />
               <ArticleListItem />
               <ArticleListItem />
               <ArticleListItem />
               <ArticleListItem />
             </div>
           </div>
         </div>
       </div>
      </div>
    </>
  );
};

export default Dashboard;
