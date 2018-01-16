import React from 'react';
import { connect } from 'react-redux';
import { toggleNavCollapse } from '../actions/NavActions';
import Nav from '../components/Nav';

const NavContainer = props => <Nav {...props}/>;

const mapStateToProps = (state) => {
  const { nav } = state;
  return {
    nav
  };
};


export default connect(mapStateToProps, {
  toggleNavCollapse
})(NavContainer);
