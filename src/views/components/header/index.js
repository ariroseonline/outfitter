import React, { PropTypes } from 'react';
import NavLink from '../nav-link';
import { Link } from 'react-router';

const Header = ({authenticated, signOut}) => {
  return (
    <header className="header">
      <div className="row">
        <div className="col-xs-12">
          <Link to="/"><h1 className="header__title">Outfitter</h1></Link>
          <ul className="header__nav">
            <NavLink to="/outfits">Outfits</NavLink>
            <NavLink to="/filters/articles">Items</NavLink>
            <NavLink to="/filters/temperatures">Temperature</NavLink>
            <NavLink to="/filters/weathers">Weather</NavLink>
            <NavLink to="/filters/activities">Activities</NavLink>
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
