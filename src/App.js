import React from 'react';
import './App.css';

import Home from './screens/Home';
import Detail from './screens/Detail';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <ul>
      <li> <Link to="/">Home</Link></li>
    </ul>
    <ul>
      <li> <Link to="/detail">Detail</Link></li>
    </ul>

    <Switch>
    <Route path="/detail/:id">
        <Detail />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
