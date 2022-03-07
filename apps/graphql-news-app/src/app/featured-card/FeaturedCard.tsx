import { FC } from 'react';


const FeaturedCard: FC = () => {
  return (
    <section>
      <div className="card w-full bg-base-100 shadow-xl image-full flex">
        <figure><img src="https://api.lorem.space/image/shoes?w=400&h=400" alt="Shoes" /></figure>
        <div className="card-body flex-row items-end">
          <div>
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedCard;
