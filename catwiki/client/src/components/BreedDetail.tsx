import React from 'react';
import { IBreedDetail } from '../api/breedApiService';
import Score from './Score';

interface BreedDetailProps {
  breed: IBreedDetail;
}

const BreedDetail: React.FC<BreedDetailProps> = ({ breed }): JSX.Element => {
  return <Score current={4} />;
};

export default BreedDetail;
