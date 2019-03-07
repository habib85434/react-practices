import React, { PureComponent } from 'react';

class Index extends PureComponent {
    constructor(props){
        super(props)
        this.state = {

        }
        document.title = "Password Reset - Prestige Labs";
    }

    changeHandler = (e) => {
        [e.target.name] = e.target.value;
    }

    render() { 
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <main>
                                <div className="page-content entry-content">
                                    <div className="montserrat page-title">Lost password</div>
                                    <div className="">
                                        <div className="alert-wrapper">
                                            <ul className="alert-error">
                                                <li> Enter a username or email address.	</li>
                                            </ul>
                                        </div>
                                        <form method="post" className="lost_reset_password">
                                            <p>Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.</p>
                                            <p className="user_name_email_field">
                                                <label htmlFor="user_login">Username or email</label>
                                                <input className="cus_field" type="text" name="user_login" id="user_login" autoComplete="username" />
                                            </p>
                                            <div className="clearfix"></div>
                                            <p className="">
                                                <input type="hidden" name="wc_reset_password" value="true" />
                                                <button type="submit" className="roboto_condensed cus_button" value="Reset password">Reset password</button>
                                            </p>
                                            <input type="hidden" id="e" name="" value="" />
                                            <input type="hidden" name="" value="" />
                                        </form>
                                    </div>
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