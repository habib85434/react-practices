import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './Auth/Login';
import Registration from './Auth/Registration';
import PasswordReset from './Auth/PasswordReset';
import TermOfUse from './Distributor/Pages/TermOfUse';
import RefundPolicy from './Distributor/Pages/RefundPolicy';
import PrivacyPolicy from './Distributor/Pages/PrivacyPolicy';
import GetInTouch from './Distributor/Pages/GetInTouch';
import Athletes from './Distributor/Pages/Athletes';
import Faq from './Distributor/Pages/Faq';
import OrderPage from './Distributor/Orders/OrderPage';
import CartPage from './Distributor/Orders/CartPage';
import CheckOut from './Distributor/Orders/CheckOut';

class CommonRouter extends Component {
    state = {  }
    render() { 
        return (
            <Switch>
                <Route path='/' component={OrderPage} exact/>
                <Route path='/login' component={Login} exact strict/>
                <Route path='/registration' component={Registration} exact strict/>
                <Route path='/password-reset' component={PasswordReset} exact strict/>
                <Route path='/terms-of-use' component={TermOfUse} exact strict/>
                <Route path='/return-refund-policy' component={RefundPolicy} exact strict/>
                <Route path='/privacy-policy' component={PrivacyPolicy} exact strict/>
                <Route path='/athletes' component={Athletes} exact strict/>
                <Route path='/faq' component={Faq} exact strict/>
                <Route path='/contact' component={GetInTouch} exact strict/>
                <Route path='/cart' component={CartPage} exact strict/>
                <Route path='/check-out' component={CheckOut} exact strict/>
            </Switch>
        );
    }
}
 
export default CommonRouter;