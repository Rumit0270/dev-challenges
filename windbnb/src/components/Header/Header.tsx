import React, { useState } from 'react';

import logo from '../../logo.png';
import './Header.css';

const Header: React.FC = (): JSX.Element => {
  const [showFilter, setShowFilter] = useState<boolean>(false);

  return (
    <>
      {showFilter ? <div className="filter-backdrop"></div> : null}

      <div className="header-container">
        <img src={logo} alt="website logo" className="header__img" />
        <div className="header__filter">
          <span
            className="header__filter--location"
            onClick={() => setShowFilter(true)}
          >
            Location
          </span>
          <span
            className="header__filter--guests"
            onClick={() => setShowFilter(true)}
          >
            Add guests
          </span>
          <span className="material-icons search-icon">search</span>
        </div>
      </div>
    </>
  );
};

export default Header;
