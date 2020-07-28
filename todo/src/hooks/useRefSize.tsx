import { useState, useEffect } from 'react';

export const useRefSize = <T extends HTMLElement>(
  myRef: React.RefObject<T>
) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const getDimensions = () => {
      if (myRef.current) {
        return {
          width: myRef.current.offsetWidth,
          height: myRef.current.offsetHeight,
        };
      }

      return {
        width: 0,
        height: 0,
      };
    };

    const handleResize = () => {
      setDimensions(getDimensions());
    };

    setDimensions(getDimensions());

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [myRef]);

  return [dimensions];
};
