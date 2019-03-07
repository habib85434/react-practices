import React,{PureComponent} from 'react';
//import $ from 'jquery';

class Privacy extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
          
        }
        document.title = "Privacy Policy -Prestige Lab";
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="site-main">   
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <main className="site-content terms_and_condition">
                                    <div className="page-content entry-content">
                                        <div className="montserrat page-title">Privacy and policy</div>
                                        <p><span>Prestige Labs strives to keep you totally fulfilled and satisfied, which is why we offer a 30-day, money back guarantee if you feel the quality of the product is less than promised. Just send us the bottle and we’ll refund you to the last penny, No questions asked. If inside 30 days of use, you are unhappy and would like a refund, here’s exactly what to do:</span></p>
                                        <p>Contact the Prestige Labs team by emailing support@prestigelabs.com. We will gladly provide you with our return address, so as not to waste any materials, and return instructions. This is an easy and effortless process.</p>
                                    </div>
                                </main>    
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Privacy;