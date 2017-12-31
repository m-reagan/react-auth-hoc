import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Resources from './components/resources';
import Home from './components/home';
import reducers from './reducers';

import requireAuth from './hoc/authentication';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>
      <Route path="/" component={Header} />
      <Switch>
      <Route path="/home" component={Home} />
      <Route path="/resources" component={requireAuth(Resources)} />
      <Route path="/" component={Home} />
      </Switch>
    </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
