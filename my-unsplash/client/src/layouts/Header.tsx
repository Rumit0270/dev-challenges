import React, { useState, useContext } from 'react';
import debounce from 'lodash.debounce';

import appLogo from '../assets/images/my_unsplash_logo.svg';
import '../assets/css/Header.css';
import Input from '../components/Input';
import Button from '../components/Button';
import Modal from '../components/Modal';
import { IImage } from '../api/imageService';
import AddImageForm from '../components/AddImageForm';
import { ImageContext } from '../context';

interface HeaderProps {
  onSearchInputChange: (text: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  onSearchInputChange,
}): JSX.Element => {
  const { addImage } = useContext(ImageContext);
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleTextChange = debounce(onSearchInputChange, 250);

  const onAddImage = (image: IImage) => {
    addImage(image);
    setShowModal(false);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  const onShowModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <header className="header">
        <img src={appLogo} alt="My Unsplash logo" className="header__logo" />
        <div className="header__controls">
          <Input
            startIcon="search"
            placeholder="Search by name"
            className="search-input"
            onChange={(event: any) => handleTextChange(event.target.value)}
          />
          <Button
            title="Add a photo"
            className="add-photo-button"
            onClick={onShowModal}
          />
        </div>
      </header>

      <Modal
        show={showModal}
        as={<AddImageForm onCancel={onCloseModal} onSubmit={onAddImage} />}
      />
    </>
  );
};

export default Header;
