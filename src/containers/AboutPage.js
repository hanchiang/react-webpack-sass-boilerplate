import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NavBar from '../components/NavBar';

export default class AboutPage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>About Page</h1>
      </div>
    )
  }
}