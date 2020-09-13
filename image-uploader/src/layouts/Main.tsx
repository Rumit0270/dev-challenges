import React, { useState } from 'react';

import '../assets/css/Main.css';
import { uploadImage } from '../api/image';
import Upload from '../components/Upload';
import Uploading from '../components/Uploading';
import Uploaded from '../components/Uploaded';
import FadeTransition from '../components/FadeTransition';

enum AppState {
  UPLOAD = 'UPLOAD',
  UPLOADING = 'UPLOADING',
  UPLOADED = 'UPLOADED',
}

const Main: React.FC = (): JSX.Element => {
  const [appState, setAppState] = useState<AppState>(AppState.UPLOAD);
  const [downloadUrl, setDownloadUrl] = useState<string>('');

  const handleImageSelect = async (image: File) => {
    try {
      setAppState(AppState.UPLOADING);
      const downloadUrl = await uploadImage(image);
      setDownloadUrl(downloadUrl as string);
      setAppState(AppState.UPLOADED);
    } catch (err) {
      alert('Something went wrong');
      setAppState(AppState.UPLOAD);
      console.log(err);
    }
  };

  const renderUI = () => {
    if (appState === AppState.UPLOAD) {
      return (
        <FadeTransition inProp={appState === AppState.UPLOAD} key="upload">
          <Upload onImageSelect={handleImageSelect} />
        </FadeTransition>
      );
    }

    if (appState === AppState.UPLOADING) {
      return (
        <FadeTransition
          inProp={appState === AppState.UPLOADING}
          key="uploading"
        >
          <Uploading />
        </FadeTransition>
      );
    }

    return (
      <FadeTransition inProp={appState === AppState.UPLOADED} key="uploaded">
        <Uploaded imageUrl={downloadUrl} key="uploaded" />
      </FadeTransition>
    );
  };

  return <main className="main">{renderUI()}</main>;
};

export default Main;
