import React, { PropTypes } from 'react';
import NavLink from '../nav-link';

const Header = ({authenticated, signOut}) => {
  return (
    <header className="header">
      <div className="row">
        <div className="col-xs-12">
          <h1 className="header__title">Outfitter</h1>
          <ul className="header__nav">
            <NavLink to="/outfits">Outfits</NavLink>
            <NavLink to="/articles">Items</NavLink>
            <NavLink to="/temperatures">Temperature</NavLink>
            <NavLink to="/weathers">Weather</NavLink>
            <NavLink to="/activities">Activities</NavLink>
          </ul>
          <ul className="header__actions">
            {authenticated ? <li><button className="btn" onClick={signOut}>Sign out</button></li> : null}
            <li><a className="link link--github" href="https://github.com/r-park/todo-react-redux"></a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  signOut: PropTypes.func.isRequired
};

export default Header;
