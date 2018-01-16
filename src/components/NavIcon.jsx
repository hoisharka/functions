import React, { Component } from 'react';

class NavIcon extends Component {
  
  render () {
    const { toggleNavCollapse, nav } = this.props;
    console.log(this.props);
    return (
      <div className="nav-icon">
	<button type="button"
		className={`nav-icon__button ${ nav.navCollapse ? 'nav-icon__button--on':'' }`}
		onClick={ toggleNavCollapse } >
	  <span className="nav-icon__line nav-icon__line--one"></span>
	  <span className="nav-icon__line nav-icon__line--two"></span>
	  <span className="nav-icon__line nav-icon__line--three"></span>
	</button>
      </div>
    );
  };
};

export default NavIcon;
