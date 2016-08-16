import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./components/app";
import Home from "./components/home";
import Contact from './components/contact';
import About from './components/about';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path='/contact' component={Contact} />
        <Route path='/about' component={About} />
    </Route>
);