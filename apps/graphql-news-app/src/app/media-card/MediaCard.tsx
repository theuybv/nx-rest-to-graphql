import { FC } from 'react';

const MediaCard: FC = () => {
  return (
    <div className='card w-full shadow-xl h-fit'>
      <figure><img src='https://api.lorem.space/image/shoes?w=400&h=225' alt='Shoes' /></figure>
      <div className='card-body'>
        <h2 className='card-title'>
          Shoes!
        </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam at, blanditiis dolore</p>
      </div>
    </div>
  );
};

export default MediaCard;
