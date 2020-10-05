import { useEffect } from 'react';

const useWindowClickListener = (callback: () => void) => {
  useEffect(() => {
    window.addEventListener('click', callback);

    return () => {
      window.removeEventListener('click', callback);
    };
  }, [callback]);
};

export default useWindowClickListener;
