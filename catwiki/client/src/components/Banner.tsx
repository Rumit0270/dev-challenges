import React from 'react';
import whiteLogo from '../assets/images/CatwikiLogoWhite.svg';

const Banner: React.FC = () => {
  return (
    <section className="px-10 md:px-24 py-5 md:py-12 w-full flex flex-col items-start justify-center banner">
      <img src={whiteLogo} alt="Catwiki white logo" className="h-8 md:h-24 mb-3 banner__logo" />
      <h1 className=" text-white font-medium text-xs leading-4 md:text-xl md:leading-7  banner__title">
        Get to know more about your cat breed
      </h1>
    </section>
  );
};

export default Banner;
