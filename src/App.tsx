import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './themes/theme';
import LandingPage from './pages/LandingPage/LandingPage';
import NotFound from './pages/NotFound/NotFound';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/Routes/PrivateRoute';
import AuthRoute from './components/Routes/AuthRoute';
import AuthPage from './pages/AuthPage/AuthPage';

const App = () => (
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <Router>
        <Switch>
          <Redirect from="/" to="/home" exact />
          <Route path="/home" component={LandingPage} />
          <AuthRoute path="/auth" component={AuthPage} to="/home" />
          <PrivateRoute path="/private" component={() => <h2>private</h2>} to="/auth" />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </AuthProvider>
  </ThemeProvider>
);

export default App;
