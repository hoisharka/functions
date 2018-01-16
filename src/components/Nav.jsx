import React, { Component } from 'react';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';

class Nav extends Component {
  
  render() {
    return (
      <div className="container">
	<header className="header">
	  <div className="header__section">
	    <div className="header__section-inner">
	      <h1 className="header__text">Functions</h1>
	      <NavDesktop {...this.props} />	
	    </div>
	  </div>
	  <NavMobile {...this.props} />
	</header>
      </div>
    );
  };
};

export default Nav;
