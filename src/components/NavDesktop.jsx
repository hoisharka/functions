import React, { Component } from 'react';
import NavIcon from './NavIcon';

class NavDesktop extends Component {
  render() {
    return (
      <div className="container">
	<NavIcon {...this.props}/>
	<nav className="nav-desktop nav-desktop--collapse">
	  <ul className="nav-desktop__list">
	    <li className="nav-desktop__item nav-desktop__item--selected">
	      <a className="nav-desktop__link" href="#">Home</a>
	    </li>
	    <li className="nav-desktop__item">
	      <a className="nav-desktop__link" href="#">menu1</a>
	    </li>
	    <li className="nav-desktop__item">
	      <a className="nav-desktop__link" href="#">menu2</a>
	    </li>
	    <li className="nav-desktop__item">
	      <a className="nav-desktop__link" href="#">menu3</a>
	    </li>
	    <li className="nav-desktop__item">
	      <a className="nav-desktop__link" href="#">menu4</a>
	    </li>
	    <li className="nav-desktop__item">
	      <a className="nav-desktop__link" href="#">menu5</a>
	    </li>
	  </ul>
	</nav>
      </div>
    );
  }
};

export default NavDesktop;
