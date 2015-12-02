import React from 'react';
import {Route, IndexRoute} from 'react-router';
import {App} from '../containers';
import {
  Home,
  Feed,
} from '../components';

export default(
    <Route path='/' component={App}>
        <IndexRoute component={Home}/>
        <Route path="feed" component={Feed}/>
    </Route>
);
