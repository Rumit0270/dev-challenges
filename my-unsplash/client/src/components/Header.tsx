import React from 'react';
import debounce from 'lodash.debounce';

import appLogo from '../assets/images/my_unsplash_logo.svg';
import '../assets/css/Header.css';
import Input from './common/Input';
import Button from './common/Button';

interface HeaderProps {
  onSearchInputChange: (text: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  onSearchInputChange,
}): JSX.Element => {
  const handleTextChange = debounce(onSearchInputChange, 300);

  return (
    <header className="header">
      <img src={appLogo} alt="My Unsplash logo" className="header__logo" />
      <div className="header__controls">
        <Input
          startIcon="search"
          placeholder="Search by name"
          className="search-input"
          onChange={(event: any) => handleTextChange(event.target.value)}
        />
        <Button title="Add a photo" className="add-photo-button" />
      </div>
    </header>
  );
};

export default Header;
