import React, { useState } from 'react';

import '../assets/css/Main.css';
import Upload from '../components/Upload';

enum AppState {
  UPLOAD = 'UPLOAD',
  UPLOADING = 'UPLOADING',
  UPLOADED = 'UPLOADED',
}

const Main: React.FC = (): JSX.Element => {
  const [appState, setAppState] = useState<AppState>(AppState.UPLOAD);

  const uploadImage = (image: File) => {
    console.log(image);
  };

  return (
    <main className="main">
      <Upload onImageSelect={uploadImage} />
    </main>
  );
};

export default Main;
