import { useState, useEffect } from 'react';
import { CountryDetail } from '../api/countryApiService';
import { generateNumberBetween } from '../utils/index';

const useRandomQuizOptions = (
  numberOfOptions: number,
  correctCountryDetail: CountryDetail | undefined,
  countryDetails: CountryDetail[]
) => {
  const [countryOptions, setCountryOptions] = useState<CountryDetail[]>([]);

  useEffect(() => {
    if (!correctCountryDetail) {
      return;
    }

    let options: CountryDetail[] = [];

    for (let i = 0; i < numberOfOptions; i++) {
      let randomIndex = generateNumberBetween(0, countryDetails.length);
      options.push(countryDetails[randomIndex]);
    }

    let correctAnsIndex = generateNumberBetween(0, numberOfOptions);
    options[correctAnsIndex] = { ...correctCountryDetail };
    setCountryOptions(options);
  }, [correctCountryDetail, countryDetails, numberOfOptions]);

  return [countryOptions];
};

export default useRandomQuizOptions;
