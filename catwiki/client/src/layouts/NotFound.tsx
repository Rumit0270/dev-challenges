import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const REDIRECT_INTERVAL = 10;

const NotFound: React.FC = (): JSX.Element => {
  const history = useHistory();
  const [count, setCount] = useState<number>(REDIRECT_INTERVAL);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevValue) => prevValue - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (count < 0) {
      history.push('/');
    }
  }, [count, history]);

  return (
    <section className="text-cannon-black not-found flex flex-col justify-center px-6 md:px-10">
      <h3 className="font-bold text-xl md:text-2xl mb-4 md:mb-6">
        Oops! You are in the wrong place.
      </h3>
      <p className="font-medium text-base md:text-xl">
        The page you are looking for is beyond our reach
      </p>
      <p className="font-medium text-base md:text-xl mb-6 md:mb-8">{`Let's get you...`}</p>

      <p className="px-4 md:px-6 py-2 md:py-4 font-semibold bg-cannon-black text-base md:text-xl text-white inline-block">
        <span className="mr-1 font-bold">Back to Home in: </span>
        {count > 0 ? count : 0}
      </p>
    </section>
  );
};

export default NotFound;
