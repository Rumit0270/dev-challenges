import React, { useState, useContext } from 'react';

import logo from '../../logo.png';
import './Header.css';
import { FilterContext } from '../../context';

type ActiveFilter = 'location' | 'guests' | null;

enum ChangeCount {
  INC = 'INCREMENT',
  DEC = 'DECREMENT',
}

const Header: React.FC = (): JSX.Element => {
  const { state, applyFilter } = useContext(FilterContext);
  const { location, guests } = state;

  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [activeFilter, setActiveFilter] = useState<ActiveFilter>(null);
  const [filterLocation, setFilterLocation] = useState<string>('');
  const [filterGuests, setFilterGuests] = useState<{
    adult: number;
    children: number;
    description: string;
  }>({ adult: 0, children: 0, description: '' });

  const showBackdropClass = showFilter ? 'filter-backdrop--show' : '';
  const showFilterClass = showFilter ? 'filter-container--show' : '';
  const filterOptionsClass =
    activeFilter === 'location'
      ? 'filter-options--location'
      : activeFilter === 'guests'
      ? 'filter-options--guests'
      : '';

  const handleShowFilter = (filter: ActiveFilter) => {
    setActiveFilter(filter);
    setFilterLocation(location);
    setFilterGuests(guests);
    setShowFilter(true);
  };

  const handleHideFilter = () => {
    setShowFilter(false);
  };

  const handleLocationChange = (location: string) => {
    setFilterLocation(location);
  };

  const handleAdultCountChange = (operation: ChangeCount) => {
    let offset = operation === ChangeCount.INC ? 1 : -1;
    setFilterGuests((prev) => {
      let currentAdultCount = prev.adult + 1 * offset;
      let absoluteCurrentAdultCount =
        currentAdultCount >= 0 ? currentAdultCount : 0;
      let adultSuffix = currentAdultCount <= 1 ? 'adult' : 'adults';
      let prevChildren = prev.children;
      let childrenSuffix = prev.children <= 1 ? 'child' : 'children';
      return {
        ...prev,
        adult: absoluteCurrentAdultCount,
        description: `${absoluteCurrentAdultCount} ${adultSuffix}, ${prevChildren} ${childrenSuffix}`,
      };
    });
  };

  const handleChildrenCountChange = (operation: ChangeCount) => {
    let offset = operation === ChangeCount.INC ? 1 : -1;
    setFilterGuests((prev) => {
      let currentChildrenCount = prev.children + 1 * offset;
      let absoluteCurrentChildrenCount =
        currentChildrenCount >= 0 ? currentChildrenCount : 0;
      let childrenSuffix = currentChildrenCount <= 1 ? 'child' : 'children';

      let prevAdult = prev.adult;
      let adultSuffix = prevAdult <= 1 ? 'adult' : 'adults';

      return {
        ...prev,
        children: absoluteCurrentChildrenCount,
        description: `${prevAdult} ${adultSuffix}, ${absoluteCurrentChildrenCount} ${childrenSuffix}`,
      };
    });
  };

  const onFilter = () => {
    applyFilter({
      location: filterLocation,
      guests: {
        ...filterGuests,
      },
    });
    setShowFilter(false);
  };

  const renderFilterOptions = () => {
    if (!activeFilter) {
      return null;
    }

    if (activeFilter === 'location') {
      return (
        <>
          <div
            className={`location-filter ${
              filterLocation === 'Helsinki, Finland'
                ? 'location-filter--highlight'
                : ''
            }`}
            onClick={() => handleLocationChange('Helsinki, Finland')}
          >
            <span className="material-icons">place</span>
            <span className="location-filter__title">Helsinki, Finland </span>
          </div>
          <div
            className={`location-filter ${
              filterLocation === 'Turku, Finland'
                ? 'location-filter--highlight'
                : ''
            }`}
            onClick={() => handleLocationChange('Turku, Finland')}
          >
            <span className="material-icons">place</span>
            <span className="location-filter__title">Turku, Finland </span>
          </div>
          <div
            className={`location-filter ${
              filterLocation === 'Oulu, Finland'
                ? 'location-filter--highlight'
                : ''
            }`}
            onClick={() => handleLocationChange('Oulu, Finland')}
          >
            <span className="material-icons">place</span>
            <span className="location-filter__title">Oulu, Finland </span>
          </div>
          <div
            className={`location-filter ${
              filterLocation === 'Vaasa, Finland'
                ? 'location-filter--highlight'
                : ''
            }`}
            onClick={() => handleLocationChange('Vaasa, Finland')}
          >
            <span className="material-icons">place</span>
            <span className="location-filter__title">Vaasa, Finland </span>
          </div>
        </>
      );
    }

    return (
      <>
        <div className="guests-filter">
          <p className="guests-filter__heading">Adults</p>
          <p className="guests-filter__description">Ages 13 or above</p>
          <div className="filter-controls">
            <span
              className="material-icons button-counter"
              onClick={() => handleAdultCountChange(ChangeCount.DEC)}
            >
              remove
            </span>
            <span className="guest-count">{filterGuests.adult}</span>
            <span
              className="material-icons button-counter"
              onClick={() => handleAdultCountChange(ChangeCount.INC)}
            >
              add
            </span>
          </div>
        </div>
        <div className="guests-filter">
          <p className="guests-filter__heading">Children</p>
          <p className="guests-filter__description">Ages 2-12</p>
          <div className="filter-controls">
            <span
              className="material-icons button-counter"
              onClick={() => handleChildrenCountChange(ChangeCount.DEC)}
            >
              remove
            </span>
            <span className="guest-count">{filterGuests.children}</span>
            <span
              className="material-icons button-counter"
              onClick={() => handleChildrenCountChange(ChangeCount.INC)}
            >
              add
            </span>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="header-container">
        <img src={logo} alt="website logo" className="header__img" />
        <div className="header__filter">
          <span
            className="header__filter--location"
            onClick={() => handleShowFilter('location')}
          >
            {location ? location : 'Select Location'}
          </span>
          <span
            className="header__filter--guests"
            onClick={() => handleShowFilter('guests')}
          >
            {guests.description ? guests.description : 'Add Guests'}
          </span>
          <span
            className="material-icons search-icon"
            onClick={() => handleShowFilter(null)}
          >
            search
          </span>
        </div>
      </div>

      <div
        className={`filter-backdrop ${showBackdropClass}`}
        onClick={handleHideFilter}
      ></div>

      <div className={`filter-container ${showFilterClass}`}>
        <div className="filter__header">
          <h6 className="filter__header--heading">Edit your search</h6>
          <span
            className="material-icons filter__header--close"
            onClick={handleHideFilter}
          >
            clear
          </span>
        </div>

        <div className="filter__body">
          <div
            className="filter__body--location"
            onClick={() => setActiveFilter('location')}
          >
            <label htmlFor="location">Location</label>
            <input
              type="text"
              name="location"
              placeholder="Select Location"
              value={filterLocation}
              readOnly
            />
          </div>
          <div
            className="filter__body--guests"
            onClick={() => setActiveFilter('guests')}
          >
            <label htmlFor="guests">Guests</label>
            <input
              type="text"
              name="guests"
              placeholder="Add Guests"
              value={filterGuests.description}
              readOnly
            />
          </div>
          <div className={`filter__body--options ${filterOptionsClass}`}>
            {renderFilterOptions()}
          </div>
          <div className="filter__body--search">
            <button type="button" onClick={onFilter}>
              <span className="material-icons">search</span>
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
