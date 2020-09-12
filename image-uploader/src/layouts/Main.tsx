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

  return (
    <main className="main">
      <Upload />
    </main>
  );
};

export default Main;
