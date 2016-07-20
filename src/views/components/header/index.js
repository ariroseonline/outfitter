import React, { PropTypes } from 'react';
import NavLink from '../nav-link';
import { Link } from 'react-router';

const Header = ({authenticated, signOut}) => {
  return (
    <header className="header">
      <div className="grid-1">
        <div className="col">
          <Link to="/"><h1 className="header__title">Outfitter</h1></Link>
          <ul className="header__nav">
            <NavLink to="/outfits">Outfits</NavLink>
            <NavLink to="/tags/articles">Items</NavLink>
            <NavLink to="/tags/temperatures">Temperature</NavLink>
            <NavLink to="/tags/weathers">Weather</NavLink>
            <NavLink to="/tags/activities">Activities</NavLink>
          </ul>
          <ul className="header__actions">
            {authenticated ? <li><button className="btn" onClick={signOut}>Sign out</button></li> : <li><NavLink to="/sign-in">Sign In</NavLink></li>}
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
