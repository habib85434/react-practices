import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import $ from "jquery";

class Index extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { 
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            password: '',
            paypal_account: '',
            email_2: '',
            pdf_file: '',
            agreement_pdf_file: '',
            terms_of_service_agree: 1,
         }
         document.title = "Registration - Prestige Labs";
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    
    submitHandler = (e) => {
        e.preventDefault();
        var data = new FormData($('#myForm')[0]);
        $.ajax({
            url: "http://192.168.50.58/Lukman/R&D/react-ci-apps/api/api/testregistration",
            mimeType: "multipart/form-data",
            contentType: false,
            cache: false,
            processData: false,
            type: 'POST',
            data: data,
            dataType: 'JSON',
            success: function (response) {
                if (response.status === "success") {
                    console.log(response.data);
                } else {
                    alert("Error");
                }
            },
            error: function () {
                alert("Not working");
            }
        });
    }

    render() { 
        return (
            <React.Fragment>
                <div className="container">
                    <div className="rows">
                        <main className="site-content">
                            <div className="page-content entry-content user_registration">
                                <div className="page-title">Registration</div>
                                    <div className="registration-form">
                                        <div className="alert-wrapper">
                                            <ul className="alert-error">
                                                <li> Enter a username or email address.	</li>
                                            </ul>
                                        </div>
                                        <form onSubmit={this.submitHandler} method="post" id="myForm" className="register action_form" encType="multipart/form-data">
                                            <div className="form-group pull-left name_field">
                                                <label htmlFor="reg_sr_firstname">First Name <span className="required">*</span></label>
                                                <input type="text" className="cus_field" name="firstname" id="reg_sr_firstname" value={this.state.firstname} onChange={this.changeHandler} />
                                            </div>
                                            <div className="form-group pull-right name_field">
                                                <label htmlFor="reg_sr_lastname">Last Name <span className="required">*</span></label>
                                                <input type="text" className="cus_field" name="lastname" id="reg_sr_lastname" value={this.state.lastname} onChange={this.changeHandler} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="reg_username">Username <span className="required">*</span></label>
                                                <input type="text" className="cus_field" name="username" id="reg_username" value={this.state.username} onChange={this.changeHandler} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="reg_email">Email address <span className="required">*</span></label>
                                                <input type="email" className="cus_field" name="email" id="reg_email" value={this.state.email} onChange={this.changeHandler} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="reg_password">Password <span className="required">*</span></label>
                                                <input type="password" className="cus_field" name="password" id="reg_password" value={this.state.password} onChange={this.changeHandler} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="reg_username">PayPal Account(To get the payout) <span className="required">*</span></label>
                                                <input type="text" className="cus_field" name="paypal_account" id="paypal_account" value={this.state.paypal_account} onChange={this.changeHandler} />
                                            </div>
                                            <div style={{left: "-999em", position: "absolute"}}>
                                                <label htmlFor="trap">Anti-spam</label>
                                                <input type="text" name="email_2" id="trap" tabIndex="-1" autoComplete="off" value={this.state.email_2} onChange={this.changeHandler} />
                                            </div>
                                            <div className="form-group input_type_file">
                                                <label htmlFor="reg_file">W-9 Form (Please fill & sign W-9 form&nbsp;
                                                    <Link to="#" target="_blank">here</Link>, after getting the W-9 downloaded form please attache following)
                                                </label>
                                                <input className="cus_field" type="file" name="pdf_file" value={this.state.pdf_file} onChange={this.changeHandler} />
                                            </div>
                                            <div className="form-group input_type_file">
                                                <label htmlFor="reg_file">Agreement Form (Please fill & sign agreement form <Link to="#" target="_blank"> here</Link>, after getting the agreement downloaded form please attache following)</label>
                                                <input className="cus_field" type="file" name="agreement_pdf_file" value={this.state.agreement_pdf_file} onChange={this.changeHandler} />
                                            </div>
                                            <div className="clearfix"></div>        
                                            <input type="hidden" name="_user_registration_from_frontend" value="1" />
                                            <div className="form-group">
                                                <label className="">
                                                    <input className="" name="terms_of_service_agree" type="checkbox" value={this.state.terms_of_service_agree} onChange={this.changeHandler} /> 
                                                    <span> Agree with
                                                        <a href="term_of_use.php" target="_blank"> terms of service</a>
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="">
                                                <input type="hidden" id="" name="" value="" />
                                                <input type="hidden" name="" value="" />	
                                                <button type="submit" className="cus_button" name="login" value="Login">Register</button>
                                            </div>
                                        </form>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Index;