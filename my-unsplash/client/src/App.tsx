import React, { useContext, useEffect, useState, useCallback } from 'react';
import './assets/css/App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { ImageContext } from './context';

const App: React.FC = (): JSX.Element => {
  const { state, fetchImages } = useContext(ImageContext);
  const [searchText, setSearchText] = useState<string>('');

  const fetchImagesCallback = useCallback(fetchImages, []);

  useEffect(() => {
    fetchImagesCallback();
  }, [fetchImagesCallback]);

  const onSearchInputChange = (text: string) => {
    setSearchText(text);
  };

  return (
    <div className="app-container">
      <Header onSearchInputChange={onSearchInputChange} />
      <Main images={state.allImages} seachText={searchText} />
      <Footer />
    </div>
  );
};

export default App;
