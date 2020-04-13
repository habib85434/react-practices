import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom'
// import decode from 'jwt-decode';
import HomeContainer from '../components/business/home/nxt-home-container';
import About from '../components/business/about';
import ErrorBoundary from '../components/composite/ix-error-boundary';
import { themed } from '../utils/themes';
import { ThemeProvider } from '@material-ui/core/styles';
import LoginContainer from '../components/business/login/login-container';
import AuthRoute from './auth-route';

export const AppRoute = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/login" render={props => <ErrorBoundary><ThemeProvider theme={themed}><LoginContainer {...props} /> </ThemeProvider> /></ErrorBoundary>} />
            <Route exact path="/about" render={props => <About {...props} />} />
            <AuthRoute exact path="/" component={HomeContainer} />
            <AuthRoute exact path="/home" component={HomeContainer} />
            <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
    </BrowserRouter>
);