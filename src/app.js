import React, { Component } from 'react';
import Routes from './routes';

import './styles/styles.scss';


export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Routes />
    )
  }
}
