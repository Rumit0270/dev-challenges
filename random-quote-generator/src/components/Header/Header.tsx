import React from 'react';

import styles from './Header.module.css';

interface HeaderProps {
  loading: boolean;
  onMorePress: () => void;
}

const Header: React.FC<HeaderProps> = ({
  loading,
  onMorePress,
}): JSX.Element => {
  let iconAnimateClass = loading ? styles['refresh__icon--animated'] : '';

  return (
    <div className={styles['container']}>
      <button
        className={styles['refresh']}
        disabled={loading}
        onClick={onMorePress}
      >
        Random{' '}
        <span
          className={`material-icons ${styles['refresh__icon']} ${iconAnimateClass} `}
        >
          autorenew
        </span>
      </button>
    </div>
  );
};

export default Header;
