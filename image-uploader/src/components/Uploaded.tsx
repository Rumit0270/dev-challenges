import React, { useRef } from 'react';

import '../assets/css/Uploaded.css';
interface UploadedProps {
  imageUrl: string;
}

const Uploaded: React.FC<UploadedProps> = ({ imageUrl }): JSX.Element => {
  const inputLinkRef = useRef<any>();

  const copyToClipboard = () => {
    if (!inputLinkRef.current) {
      return;
    }

    inputLinkRef.current.select();
    document.execCommand('copy');
  };

  return (
    <div className="uploaded">
      <span className="material-icons uploaded__icon">check_circle</span>
      <h3 className="uploaded__title">Uploaded Successfully!</h3>
      <img src={imageUrl} alt="uploaded" className="uploaded__image" />

      <div className="uploaded__link">
        <input type="text" value={imageUrl} readOnly ref={inputLinkRef} />
        <button className="button" onClick={copyToClipboard}>
          Copy Link
        </button>
      </div>
    </div>
  );
};

export default Uploaded;
