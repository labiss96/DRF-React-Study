import React from 'react';
  import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from "./Home";
import Detail from "./Detail";
import Header from "./Header";
import New from "./New";

export default () => (
  <Router>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/new" component={New} />
      <Route path="/post/:id" component={Detail} />
  </Router>
  )