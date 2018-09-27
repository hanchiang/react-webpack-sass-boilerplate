import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from '../containers/HomePage';
import AboutPage from '../containers/AboutPage';
import NotFoundPage from '../containers/NotFoundPage';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/about' component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}

