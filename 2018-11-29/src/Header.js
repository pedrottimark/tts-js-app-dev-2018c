import React from 'react';
import {connect} from 'react-redux';

const Header = ({message}) => (
  <header>
    <h1>Healthy Eating</h1>
    <p>{message}</p>
  </header>
);

const mapStateToProps = ({message}) => ({message});

export default connect(mapStateToProps)(Header);
