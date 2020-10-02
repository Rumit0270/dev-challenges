import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/image2.png';
import image3 from '../assets/images/image3.png';

const WhyToOwnCat: React.FC = (): JSX.Element => {
  return (
    <section className="flex flex-col md:flex-row items-center mt-20 mb-5 md:mt-24 md:mb-24 why-to-own-a-cat">
      <div className="mb-16 md:mb-0 mr-0 md:mr-20 why-to-own-a-cat__content">
        <h2 className="font-bold text-cannon-black text-4xl md:text-5xl mb-12">
          Why should you have a cat?
        </h2>
        <p className="font-medium text-cannon-black text-sm leading-5 md:text-lg md:leading-5 mb-4 md:mb-8 pr-0 md:pr-16">
          Having a cat around you can actually trigger the release of calming chemicals in your body
          which lower your stress and anxiety levels
        </p>
        <Link to="/" className="font-bold text-sm leading-4 md:text-base md:leading-5 read-more">
          <span className="uppercase">Read More</span>
          <span className="material-icons ml-2">trending_flat</span>
        </Link>
      </div>
      <div className="grid grid-cols-5 gap-4 why-to-own-a-cat__images">
        <LazyLoadImage
          src={image2}
          alt="cat"
          effect="blur"
          wrapperClassName="col-span-3 row-span-2"
        />
        <LazyLoadImage
          src={image3}
          alt="cat"
          effect="blur"
          wrapperClassName="col-span-2 row-span-3"
        />
        <LazyLoadImage
          src={image1}
          alt="cat"
          effect="blur"
          wrapperClassName="col-start-2 col-span-2  row-span-2"
        />
      </div>
    </section>
  );
};

export default WhyToOwnCat;
