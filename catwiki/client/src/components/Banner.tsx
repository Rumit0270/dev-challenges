import React, { useState, useEffect, useRef } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Link } from 'react-router-dom';

import whiteLogo from '../assets/images/CatwikiLogoWhite.svg';
import { searchBreeds } from '../api/breedApiService';
import SearchLoader from './SearchLoader';
import useWindowClickListener from '../hooks/useWindowClickListener';

const Banner: React.FC = (): JSX.Element => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [breedSearchClass, setBreedSearchClass] = useState<string>('');
  const [backdropClass, setBackdropClass] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');
  const [breeds, setBreeds] = useState<any[]>([]);

  useWindowClickListener(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setSearchText('');
    setIsLoading(false);
    setBreeds([]);
  });

  useEffect(() => {
    const handleSearchBreeds = async () => {
      if (searchText === '') {
        setBreeds([]);
        return;
      }
      try {
        setIsLoading(true);
        setBreeds([]);
        const res = await searchBreeds(searchText);
        setBreeds(res.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };

    timeoutRef.current = setTimeout(() => {
      handleSearchBreeds();
    }, 300);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [searchText]);

  useEffect(() => {
    return () => {
      // Make sure no scroll class in removed when component is unmounted
      if (document.body.classList.contains('noscroll')) {
        document.body.classList.remove('noscroll');
      }
    };
  }, []);

  const handleBreedSearchActionClick = () => {
    setBreedSearchClass('breed-search--mobile');
    setBackdropClass('backdrop--show');
    // Disable body scrolling
    document.body.classList.add('noscroll');
  };

  const handleSearchExit = () => {
    setBreedSearchClass('');
    setBackdropClass('');
    setSearchText('');
    // Enable body scrolling
    if (document.body.classList.contains('noscroll')) {
      document.body.classList.remove('noscroll');
    }
  };

  const handleSearchTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const renderSearchResults = () => {
    if (breeds.length === 0) {
      return;
    }

    return breeds.map((breed) => (
      <Link
        className="block py-4 md:py-5 px-2 md:px-3 mb-1 w-full text-left font-medium text-base md:text-lg leading-4 md:leading-5 search-result"
        key={breed.id}
        to={`/breeds/${breed.name}`}
      >
        {breed.name}
      </Link>
    ));
  };

  return (
    <section className="px-10 md:px-24 py-5 md:py-12 w-full flex flex-col items-start justify-center banner">
      <img src={whiteLogo} alt="Catwiki white logo" className="h-8 md:h-24 mb-3 banner__logo" />
      <h1 className=" text-white font-medium text-xs leading-4 md:text-xl md:leading-7 mb-4 md:mb-10 banner__title">
        Get to know more about your cat breed
      </h1>
      <div className={`fixed top-0 left-0 w-full h-0 z-20 backdrop ${backdropClass}`}></div>

      <div
        className={`breed-search flex flex-col overflow-hidden md:overflow-visible ${breedSearchClass}`}
      >
        <button className="btn-search-exit" onClick={handleSearchExit}>
          <span className="material-icons">close</span>
        </button>
        <div className="relative bg-white flex items-center py-1 px-2 md:py-3 md:px-4 input-group">
          <input
            type="text"
            placeholder="Search"
            className="pl-1 flex-1"
            value={searchText}
            onChange={handleSearchTextChange}
          />
          {isLoading ? (
            <SearchLoader />
          ) : (
            <span className="material-icons inline-block">search</span>
          )}
          <div
            className="absolute top-0 left-0 w-full h-full z-10 cursor-pointer input-group__action"
            onClick={handleBreedSearchActionClick}
          ></div>

          <div className="absolute md:px-2 search-results">
            <Scrollbars style={{ height: breeds.length > 0 ? 200 : 0 }}>
              {renderSearchResults()}
            </Scrollbars>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
