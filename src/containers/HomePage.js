import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NavBar from '../components/NavBar';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>Home Page</h1>
      </div>
    )
  }
}