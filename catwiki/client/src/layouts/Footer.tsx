import React from 'react';
import logo from '../assets/images/CatwikiLogoWhite.svg';

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className="flex justify-between items-start md:items-center flex-col md:flex-row py-3 md:py-6 px-8 md:px-12 bg-black">
      <img src={logo} alt="Catwiki logo" className="h-8 md:h-10 mb-3 md:mb-0" />
      <p className="text-white text-sm leading-5 self-center md:self-auto mb-3 md:mb-0">
        <span className="text-base md:text-lg">&copy;</span> Rumit Tandukar - devchallenges.io 2020
      </p>
    </footer>
  );
};

export default Footer;
