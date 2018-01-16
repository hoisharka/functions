import React, { Component } from 'react';

class NavMobile extends Component {
  render() {
    const { nav } = this.props;
    
    return (
      <div className={`nav-mobile ${ nav.navCollapse ? '' : 'nav-mobile--collapse' }`} >
	<nav className="nav-mobile__nav">
	  <ul className="nav-mobile__list">
	    <li className="nav-mobile__item nav-mobile__item--selected">
	      <a className="nav-mobile__link" href="#">Home</a>
	    </li>
	    <li className="nav-mobile__item">
	      <a className="nav-mobile__link" href="#">menu1</a>
	    </li>
	    <li className="nav-mobile__item">
	      <a className="nav-mobile__link" href="#">menu2</a>
	    </li>
	    <li className="nav-mobile__item">
	      <a className="nav-mobile__link" href="#">menu3</a>
	    </li>
	    <li className="nav-mobile__item">
	      <a className="nav-mobile__link" href="#">menu4</a>
	    </li>
	    <li className="nav-mobile__item">
	      <a className="nav-mobile__link" href="#">menu5</a>
	    </li>
	  </ul>
	</nav>
      </div>
    );
  };
};

export default NavMobile;
