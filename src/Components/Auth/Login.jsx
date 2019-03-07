import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

import { ECOM_URL } from '../../Constants/AppConstants';


class Index extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            username : '',
            password : '',
        }
        this.input = React.createRef();
        document.title = "Login - Prestige Labs";
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        // formData.append('username', this.state.username);
        // formData.append('password', this.state.password);
        let username = this.state.username;
        let password = this.state.password;

        $.ajax({
            method: 'post',
            url: 'http://192.168.50.58/Lukman/R&D/react-ci-apps/api/api/testlogin',
            data: {username:username, password:password},
            success:function(response){
                
                if(response.status === 'success'){
                    console.log("success: "+response.data.username); 
                    console.log("success: "+response.data.password); 
                }
            },
            error:function(error){
                    console.log("error: "+error);
            }
        })
     
        }

    render() { 
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <main className="">
                                <div className="user_login">
                                    <h2 className="montserrat">Login</h2>
                                    <form className="action_form" onSubmit={this.onSubmitHandler}>
                                        <div className="form-group">
                                            <label htmlFor="username">Username or email address <span className="required">*</span></label>
                                            <input type="text" className="cus_field" name="username" id="username" value={this.state.username} onChange={this.changeHandler} />			
                                            
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">Password <span className="required">*</span></label>
                                            <input className="cus_field" type="password" name="password" id="password" value={this.state.password} onChange={this.changeHandler} />
                                        </div>
                                        <div className="form-group">
                                            <input type="hidden" id="woocommerce-login-nonce" name="woocommerce-login-nonce" value="" />
                                            <input type="hidden" name="_wp_http_referer" value="/my-account/" />	

                                            <button type="submit" className="cus_button" name="login" value="Login">Login</button>
                                            
                                            <div className="inline_checkbox custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customControlAutosizing" />
                                                <label className="custom-control-label" htmlFor="customControlAutosizing">Remember me</label>
                                            </div>

                                            <div className="new_distributor_sign_up"><NavLink activeClassName='active' to="/registration"> New Distributor? Sign up</NavLink></div>
                                            <div className="clearfix"></div>
                                        </div>
                                        <div className="lost_password">
                                        <NavLink activeClassName='active' to="/password-reset"> Lost your password?</NavLink>
                                        </div>
                                        <div className="lost_password"><a href="mailto:support@prestigelabs.com">Lost your email or username?</a></div>
                                    </form>
                                    <div className="clearfix"></div>
                                    <span className="return_to_main_site"><a href={ECOM_URL}>Return to main site</a></span>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Index;