import React from 'react';
import appLogo from '../assets/images/my_unsplash_logo.svg';
import '../assets/css/Header.css';
import Input from './common/Input';
import Button from './common/Button';

const Header: React.FC = (): JSX.Element => {
  return (
    <header className="header">
      <img src={appLogo} alt="My Unsplash logo" className="header__logo" />
      <div className="header__controls">
        <Input
          startIcon="search"
          placeholder="Search by name"
          className="search-input"
        />
        <Button title="Add a photo" className="add-photo-button" />
      </div>
    </header>
  );
};

export default Header;
