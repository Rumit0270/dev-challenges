import * as React from 'react';
import './Sidebar.scss';

const Sidebar: React.FC = (): JSX.Element => {
  return (
    <div className="sidebar-container">
      <h2 className="sidebar__title">
        <span>Dev</span>challenges.io
      </h2>
      <nav className="sidebar-links-container">
        <ul className="sidebar-links">
          <li>
            <a href="#colors">Colors</a>
          </li>
          <li>
            <a href="#typography">Typography</a>
          </li>
          <li>
            <a href="#spaces">Spaces</a>
          </li>
          <li>
            <a href="#buttons" className="sidebar__link--active">
              Buttons
            </a>
          </li>
          <li>
            <a href="#inputs">Input</a>
          </li>
          <li>
            <a href="#grid">Grid</a>
          </li>
        </ul>
      </nav>

      <footer>Rumit Tandukar @ DevChallenges.io</footer>
    </div>
  );
};

export default Sidebar;
