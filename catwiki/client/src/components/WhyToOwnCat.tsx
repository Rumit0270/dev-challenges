import React from 'react';
import { Link } from 'react-router-dom';

const WhyToOwnCat: React.FC = (): JSX.Element => {
  return (
    <section className="flex flex-col md:flex-row items-center mt-20 mb-4 md:mt-32 md:mb-32 why-to-own-a-cat">
      <div className="mb-16 md:mb-0">
        <h2 className="font-bold text-cannon-black text-4xl md:text-5xl mb-10">
          Why should you have a cat?
        </h2>
        <p className="font-medium text-cannon-black text-sm leading-5 md:text-lg md:leading-5 mb-4 md:mb-8">
          Having a cat around you can actually trigger the release of calming chemicals in your body
          which lower your stress and anxiety leves
        </p>
        <Link to="/" className="font-bold text-sm leading-4 md:text-base md:leading-5 read-more">
          <span className="uppercase">Read More</span>
          <span className="material-icons ml-2">trending_flat</span>
        </Link>
      </div>
      <div></div>
    </section>
  );
};

export default WhyToOwnCat;
