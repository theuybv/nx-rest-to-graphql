import Carousel from '../carousel/carousel';
import { useFrontPageArticlesQuery } from '../types';
import { FC } from 'react';


const Dashboard: FC = () => {
  const [{fetching, data}] = useFrontPageArticlesQuery();


  if (fetching) {
    return <p>loading...</p>;
  }
  console.log(data?.latestVideos);
  return (
    <>
      <Carousel />
    </>
  );
}

export default Dashboard;
