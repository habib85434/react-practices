import React, { PureComponent } from 'react';
import $ from 'jquery';
import "../../../Assets/css/captcha.css";

class Contact extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            name            : '',
            email           : '',
            subject         : '',
            message         : ''
        }
        document.title = ""
    }

    componentDidMount() {
        this.Captcha();
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    //Captcha START
    Captcha = () => {
        var alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
        var i;
        for (i = 0; i < 6; i++) {
            var a = alpha[Math.floor(Math.random() * alpha.length)];
            var b = alpha[Math.floor(Math.random() * alpha.length)];
            var c = alpha[Math.floor(Math.random() * alpha.length)];
            var d = alpha[Math.floor(Math.random() * alpha.length)];
            var e = alpha[Math.floor(Math.random() * alpha.length)];
            var f = alpha[Math.floor(Math.random() * alpha.length)];
            var g = alpha[Math.floor(Math.random() * alpha.length)];
        }
        var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' ' + f + ' ' + g;
        document.getElementById("mainCaptcha").innerHTML = code;
        document.getElementById("mainCaptcha").value = code;
    }

    ValidCaptcha = () => {
        var string1 = this.removeSpaces(document.getElementById('mainCaptcha').value);
        var string2 = this.removeSpaces(document.getElementById('txtInput').value);


        if (!$('#name').val() || !$('#email').val()) {
            if (!$('#name').val()) {
                $('#name').css('border', '1px solid red');
            }
            else {
                $('#name').css('border', 'none');
            }

            if (!$('#email').val()) {
                $('#email').css('border', '1px solid red');

            }
            else {
                $('#email').css('border', 'none');
            }
        }
        else {
            $('#name').css('border', 'none');
            $('#email').css('border', 'none');

            if (string1 == string2) {
                $('#contact-form').submit();
                // console.log('true');
                //    return true;
            } else {
                console.log('false');
                this.Captcha();
                //  return false;
            }
        }



        
    }
    removeSpaces = (string) => {
        return string.split(' ').join('');
    }

    //Captcha END

    CaptchaFired = () => {
        let name        = this.state.username;
        let email       = this.state.email;
        let subject     = this.state.subject;
        let message     = this.state.message;

        if (!$('#name').val() || !$('#email').val()) {
            if (!$('#name').val()) {
                $('#name').css('border', '1px solid red');
            }
            else {
                $('#name').css('border', 'none');
            }

            if (!$('#email').val()) {
                $('#email').css('border', '1px solid red');

            }
            else {
                $('#email').css('border', 'none');
            }
        }
        else {
            $('#name').css('border', 'none');
            $('#email').css('border', 'none');
            $('.capt-main').css('display', 'block');
            $('#submit-contact').css('display', 'none');
        }

    }


    onSubmitHandler = (e) => {
        e.preventDefault();
        // const formData = new FormData();
        let name = this.state.username;
        let email = this.state.email;
        let subject = this.state.subject;
        let message = this.state.message;
        console.log('works');

        function submitInquary(name, email, subject, message) {
            $.ajax({
                method: 'post',
                url: '',
                data: { name: name, email: email, subject: subject, message: message },
                success: function (response) {
                    console.log("success: " + response);

                },
                error: function (error) {
                    console.log("error: " + error);
                }
            })
        }

    }


    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <main className="get_in_touch">
                                <div className="pull-left col-md-6">
                                    <h3 className="montserrat page-title">Get In Touch</h3>
                                    <form id="contact-form" className="action_form" onSubmit={this.onSubmitHandler}>
                                        <div className="form-group">
                                            <label>Your Name <span className="required">*</span></label>
                                            <input type="text" className="cus_field" name="name" id="name" value={this.state.name} onChange={this.changeHandler} />
                                        </div>
                                        <div className="form-group">
                                            <label>Your Email <span className="required">*</span></label>
                                            <input className="cus_field" type="text" name="email" id="email" value={this.state.email} onChange={this.changeHandler} />
                                        </div>
                                        <div className="form-group">
                                            <label>Subject</label>
                                            <input className="cus_field" type="text" name="subject" id="subject" value={this.state.subject} onChange={this.changeHandler} />
                                        </div>
                                        <div className="form-group">
                                            <label>Your Message</label>
                                            <textarea className="cus_field" name="message" id="message" rows="3"></textarea>
                                        </div>
                                        <div className="form-group">
                                            <div className="captcha_container">
                                                <h2 type="text" id="mainCaptcha"></h2>
                                                <button type="button" id="refresh" className="" name="login" onClick={this.Captcha}><i class="fa fa-refresh" aria-hidden="true"></i></button>
                                                <input className="cus_field" type="text" id="txtInput" />
                                            </div>
                                            {/* <input className="roboto_condensed cus_button" id="Button1" type="button" value="Submit Contact" onClick={this.ValidCaptcha}/> */}
                                        </div>
                                        <div className="form-group">
                                            <button type="button" id="submit-contact" className="roboto_condensed cus_button" name="login" onClick={this.ValidCaptcha}>Submit Contact</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="pull-left col-md-6">
                                    <h3 className="montserrat page-title">PLEASE DO GET IN TOUCH!</h3>
                                    <div className="get_in_touch_address">
                                        <p>
                                            Contact us:
                                            <a className="techextension-click-to-call" title="Click-to-Call 1-800-470-7560">1-800-470-7560</a><br />
                                            Email: support@prestigelabs.com
                                        </p>
                                        <p>GLS Labs LLC<br />
                                            30 N Gould St Ste 6466, Sheridan, WY 82801</p>
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

export default Contact;