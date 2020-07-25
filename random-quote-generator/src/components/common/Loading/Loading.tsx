import React from 'react';

import styles from './Loading.module.css';

const Loading: React.FC = (): JSX.Element => {
  return <span className={styles['loading']}>Loading...</span>;
};

export default Loading;
