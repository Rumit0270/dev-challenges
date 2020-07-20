import React, { useContext, useEffect, useState } from 'react';

import './Main.css';
import { FilterContext } from '../../context';
import stays from './stays.json';
import Stay, { IStay } from '../common/Stay/Stay';

const Main: React.FC = (): JSX.Element => {
  const [fileredStays, setFilteredStays] = useState<IStay[]>([]);
  const { state } = useContext(FilterContext);
  const { location, guests } = state;

  useEffect(() => {
    let adultCount = guests.adult ? guests.adult : 0;
    let childrenCount = guests.children ? guests.children : 0;
    let guestsCount = adultCount + childrenCount;

    let tempStays: IStay[];

    if (location === '') {
      tempStays = stays;
    } else {
      // location based filtering
      tempStays = stays.filter((stay: IStay) => {
        let stayLocation = `${stay.city}, ${stay.country}`.toLowerCase();

        if (stayLocation === location.toLowerCase()) {
          return true;
        }
        return false;
      });
    }

    // people count based filtering
    let matchedStays = tempStays.filter(
      (stay: IStay) => stay.maxGuests >= guestsCount
    );

    setFilteredStays(matchedStays);
  }, [state, location, guests]);

  const renderStays = () => {
    return fileredStays.map((stay) => <Stay stay={stay} key={stay.title} />);
  };

  return (
    <div className="main-container">
      <div className="main-header">
        <h2 className="main-header__heading">Stays in Finland</h2>
        <span className="main-header__count">{fileredStays.length} stays</span>
      </div>
      <div className="main-body">{renderStays()}</div>
    </div>
  );
};

export default Main;
