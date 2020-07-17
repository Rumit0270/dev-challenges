import * as React from 'react';

import './Home.scss';

const Home: React.FC = () => {
  return (
    <div>
      <h2 className="home__title">Reusable React Compoents</h2>
      <p className="home__description">
        This page is part of the challenge on resuable components in React. This
        page demonstrates reusable Button and Input components for now.
      </p>
    </div>
  );
};

export default Home;
