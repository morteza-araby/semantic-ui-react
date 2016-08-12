import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import  {Router, browserHistory, hashHistory } from "react-router";
import ReduxPromise from "redux-promise";
import reducers from './reducers';
import routes from "./routes";

//import './lib/semantic/semantic.css';
import './style/style.css';

import jQuery from 'jquery';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(  
  <Provider store={createStoreWithMiddleware(reducers)}>
   <Router history={hashHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
