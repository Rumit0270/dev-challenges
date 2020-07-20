import React from 'react';

import './Stay.css';

export interface IStay {
  city: string;
  country: string;
  superHost: boolean;
  title: string;
  rating: number;
  maxGuests: number;
  type: string;
  beds: number | null;
  photo: string;
}

interface StayProps {
  stay: IStay;
}

const Stay: React.FC<StayProps> = ({ stay }) => {
  return (
    <div className="stays-container">
      <img src={stay.photo} alt={stay.title} className="stay__photo" />
      <div className="stay-body">
        <div className="stay__description">
          {stay.superHost ? <span>Super Host</span> : null}
          <p>
            {stay.type}.{stay.beds ? `${stay.beds} beds` : ''}
          </p>
        </div>
        <div className="stay__rating">
          <span className="material-icons stay__rating-icon">grade</span>
          <span className="stay__rating-value">{stay.rating}</span>
        </div>
      </div>
      <p className="stay__title">{stay.title}</p>
    </div>
  );
};

export default Stay;
