import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

const App = () => (
  <Router>
    <Switch>
      <Redirect from="/" to="/home" exact />
      <Route path="/home">
        <h2>Landing page</h2>
      </Route>
    </Switch>
  </Router>
);

export default App;
