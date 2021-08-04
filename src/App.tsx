import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { client } from './apolloConfig';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './themes/theme';
import LandingPage from './pages/LandingPage/LandingPage';
import NotFound from './pages/NotFound/NotFound';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/Routes/PrivateRoute';
import AuthRoute from './components/Routes/AuthRoute';
import AuthPage from './pages/AuthPage/AuthPage';
import Page from './components/Page/Page';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import CreateCvPage from './pages/CreateCvPage/CreateCvPage';
import AllCvsPage from './pages/AllCvsPage/AllCvsPage';
import CvPage from './pages/CvPage/CvPage';

const App = () => (
  <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <AuthProvider>
        <Router>
          <Switch>
            <Redirect from="/" to="/home" exact />
            <Route exact path="/home" component={LandingPage} />
            <AuthRoute exact path="/auth" component={AuthPage} to="/home" />
            <PrivateRoute exact path="/private" component={() => <Page>private</Page>} />
            <PrivateRoute exact path="/dashboard" component={DashboardPage} />
            <PrivateRoute exact path="/cv/new" component={CreateCvPage} />
            <PrivateRoute exact path="/cv" component={AllCvsPage} />
            <PrivateRoute exact path="/cv/:id" component={CvPage} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </AuthProvider>
    </ApolloProvider>
  </ThemeProvider>
);

export default App;
