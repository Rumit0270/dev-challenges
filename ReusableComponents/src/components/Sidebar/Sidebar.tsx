import * as React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Sidebar.scss';

const Sidebar: React.FC = (): JSX.Element => {
  return (
    <div className="sidebar-container">
      <Link to="/" className="sidebar__brand">
        <h2 className="sidebar__title">
          <span>Dev</span>challenges.io
        </h2>
      </Link>
      <nav className="sidebar-links-container">
        <ul className="sidebar-links">
          <li>
            <NavLink activeClassName="sidebar__link--active" to="/colors">
              Colors
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="sidebar__link--active" to="/typography">
              Typography
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="sidebar__link--active" to="/spaces">
              Spaces
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="sidebar__link--active" to="/buttons">
              Buttons
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="sidebar__link--active" to="/inputs">
              Inputs
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="sidebar__link--active" to="/grid">
              Grid
            </NavLink>
          </li>
        </ul>
      </nav>

      <footer>Rumit Tandukar @ DevChallenges.io</footer>
    </div>
  );
};

export default Sidebar;
