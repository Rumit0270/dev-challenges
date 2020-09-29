import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/CatwikiLogo.svg';

const Header: React.FC = (): JSX.Element => {
  return (
    <header className="py-2 lg:py-4 mb-1 w-full">
      <Link to="/">
        <img src={logo} alt="Catwiki logo" className="h-10" />
      </Link>
    </header>
  );
};

export default Header;
