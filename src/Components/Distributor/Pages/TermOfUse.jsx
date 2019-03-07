import React, { PureComponent } from 'react';

class Homepage extends PureComponent {
    constructor(props){
        super(props)
        this.state = {

        }
        document.title = "Terms of Use Agreement -Prestige Lab";
    }

    changeHandler = (e) => {
        [e.target.name] = e.target.value
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
                                        <div className="montserrat page-title">Terms of Use Agreement</div>
                                        <p className=""><b>TERMS OF USE AGREEMENT</b></p>
                                        <p><span>Read This Terms of Use Agreement Before Accessing Website.</span></p>
                                        <p><span>Effective Date: This Terms of Use Agreement was last updated on July 31, 2018</span></p>
                                        <p><span>This Terms of Use Agreement sets forth the standards of use of the Prestige Labs Online Service. By using the www.prestigelabs.com website you (the “Member”) agree to these terms and conditions. If you do not agree to the terms and conditions of this agreement, you should immediately cease all usage of this website. We reserve the right, at any time, to modify, alter, or update the terms and conditions of this agreement without prior notice. Modifications shall become effective immediately upon being posted at www.prestigelabs.com website. Your continued use of the Service after amendments are posted constitutes an acknowledgement and acceptance of the Agreement and its modifications. Except as provided in this paragraph, this Agreement may not be amended.</span></p>
                                        <h3><b>DESCRIPTION OF SERVICE</b></h3>
                                        <p><span>Prestige Labs is providing Member with general information regarding the company and its transportation logistics and shipping services. Member must provide (1) all equipment necessary for their own Internet connection, including computer and modem and (2) provide for Member’s access to the Internet, and (3) pay any fees relate with such connection.</span></p>
                                        <h3><b>MONTHLY AUTOMATIC RENEWAL TERMS</b></h3>
                                        <p><span>Prestige Labs offers rebillable monthly subscriptions (“Monthly Subscriptions”); With respect of Prestige Labs subscriptions subject to automatic renewal, you agree that Prestige Labs may submit periodic charges (e.g., monthly) to your chosen payment method without further authorization from you, until you provide prior notice that you wish to terminate this authorization or to change your payment method. You agree that such notice will not affect charges submitted before Prestige Labs could reasonably could act. Cancellations must be received 14 days prior to next charge date. </span></p>
                                        <h3><b>MONTHLY SUBSCRIPTIONS</b></h3>
                                        <p><span>By purchasing a Monthly Subscription, you agree and acknowledge that your subscription has an initial and recurring payment charge at the then-current subscription rate and you accept responsibility for all recurring charges prior to cancellation, including where applicable any charges processed by Prestige Labs &nbsp;after the expiration date of your payment card.Your subscription will be automatically renewed for successive monthly periods and your payment method will automatically be charged for each successive monthly period at the then-current subscription rate until you cancel your Monthly Subscription renewal..</span></p>
                                        <h3><b>CANCELLATION POLICY FOR MONTHLY SUBSCRIPTION RENEWALS</b></h3>
                                        <p><span>To cancel your Monthly Subscription at any time, you may (i) logon to your account at </span><a href="http://www.prestigelabs.com/"><span>www.prestigelabs.com</span></a><span> and follow the cancellation procedures there, (ii) send us a message at </span><span>support@prestigelabs.com</span><span> and we will do it for you, or (iii) call 1-800-470-7560 and speak with one of our specialists who can help you cancel.</span></p>
                                        <p>&nbsp;</p>
                                        <h3><b>DISCLAIMER OF WARRANTIES</b></h3>
                                        <p><span>The site is provided by Prestige Labs on an “as is” and on an “as available” basis. To the fullest extent permitted by applicable law, Prestige Labs makes no representations or warranties of any kind, express or implied, regarding the use or the results of this web site in terms of its correctness, accuracy, reliability, or otherwise. Prestige Labs shall have no liability for any interruptions in the use of this Website. Prestige Labs disclaims all warranties with regard to the information provided, including the implied warranties of merchantability and fitness for a particular purpose, and non-infringement. Some jurisdictions do not allow the exclusion of implied warranties, therefore the above-referenced exclusion is inapplicable.</span></p>
                                        <h3><b>LIMITATION OF LIABILITY</b></h3>
                                        <p><span>Prestige Labs SHALL NOT BE LIABLE FOR ANY DAMAGES WHATSOEVER, AND IN PARTICULAR Prestige Labs SHALL NOT BE LIABLE FOR ANY SPECIAL, INDIRECT, CONSEQUENTIAL, OR INCIDENTAL DAMAGES, OR DAMAGES FOR LOST PROFITS, LOSS OF REVENUE, OR LOSS OF USE, ARISING OUT OF OR RELATED TO THIS WEB SITE OR THE INFORMATION CONTAINED IN IT, WHETHER SUCH DAMAGES ARISE IN CONTRACT, NEGLIGENCE, TORT, UNDER STATUTE, IN EQUITY, AT LAW, OR OTHERWISE, EVEN IF Prestige Labs HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. SOME JURISDICTIONS DO NOT ALLOW FOR THE LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES, THEREFORE SOME OF THE ABOVE LIMITATIONS IS INAPPLICABLE.</span></p>
                                        <h3><b>INDEMNIFICATION</b></h3>
                                        <p><span>Member agrees to indemnify and hold Prestige Labs, its parents, subsidiaries, affiliates, officers and employees, harmless from any claim or demand, including reasonable attorneys’ fees and costs, made by any third party due to or arising out of Member’s use of the Service, the violation of this Agreement, or infringement by Member, or other user of the Service using Member’s computer, of any intellectual property or any other right of any person or entity.</span></p>
                                        <h3><b>MODIFICATIONS AND INTERRUPTION TO SERVICE</b></h3>
                                        <p><span>Prestige Labs reserves the right to modify or discontinue the Service with or without notice to the Member. Prestige Labs shall not be liable to Member or any third party should Prestige Labs exercise its right to modify or discontinue the Service. Member acknowledges and accepts that Prestige Labs does not guarantee continuous, uninterrupted or secure access to our website and operation of our website may be interfered with or adversely affected by numerous factors or circumstances outside of our control.</span></p>
                                        <h3><b>DISCLAIMER REGARDING ACCURACY OF VENDOR INFORMATION</b></h3>
                                        <p><span>Product specifications and other information have either been provided by the Vendors or collected from publicly available sources. While Prestige Labs makes every effort to ensure that the information on this website is accurate, we can make no representations or warranties as to the accuracy or reliability of any information provided on this website.</span></p>
                                        <p><span>Prestige Labs makes no warranties or representations whatsoever with regard to any product provided or offered by any Vendor, and you acknowledge that any reliance on representations and warranties provided by any Vendor shall be at your own risk.</span></p>
                                        <h3><b>GOVERNING JURISDICTION OF THE COURTS WYOMING</b></h3>
                                        <p><span>Our website is operated and provided in the State of Wyoming. As such, we are subject to the laws of the State Wyoming, and such laws will govern this Terms of Use, without giving effect to any choice of law rules. We make no representation that our website or other services are appropriate, legal or available for use in other locations. Accordingly, if you choose to access our site you agree to do so subject to the internal laws of the State Wyoming.</span></p>
                                        <h3><b>COMPLIANCE WITH LAWS.</b></h3>
                                        <p><span>Member assumes all knowledge of applicable law and is responsible for compliance with any such laws. Member may not use the Service in any way that violates applicable state, federal, or international laws, regulations or other government requirements. Member further agrees not to transmit any material that encourages conduct that could constitute a criminal offense, give rise to civil liability or otherwise violate any applicable local, state, national, or international law or regulation.</span></p>
                                        <h3><b>COPYRIGHT AND TRADEMARK INFORMATION</b></h3>
                                        <p><span>All content included or available on this site, including site design, text, graphics, interfaces, and the selection and arrangements thereof is ©2018 www.prestigelabs.com, with all rights reserved, or is the property of Prestige Labs and/or third parties protected by intellectual property rights. Any use of materials on the website, including reproduction for purposes other than those noted above, modification, distribution, or replication, any form of data extraction or data mining, or other commercial exploitation of any kind, without prior written permission of an authorized officer of Prestige Labs is strictly prohibited. users agree that they will not use any robot, spider, or other automatic device, or manual process to monitor or copy our web pages or the content contained therein without prior written permission of an authorized officer of Prestige Labs.</span></p>
                                        <p><span>Prestige Labs™ and www.prestigelabs.com™ are proprietary marks of www.prestigelabs.com. Prestige Labs’s trademarks may not be used in connection with any product or service that is not provided by Prestige Labs, in any manner that is likely to cause confusion among customers, or in any manner that disparages or discredits Prestige Labs.</span></p>
                                        <p><span>All other trademarks displayed on Prestige Labs’s website are the trademarks of their respective owners, and constitute neither an endorsement nor a recommendation of those Vendors. In addition, such use of trademarks or links to the web sites of Vendors is not intended to imply, directly or indirectly, that those Vendors endorse or have any affiliation with Prestige Labs.</span></p>
                                        <h3><b>NOTIFICATION OF CLAIMED COPYRIGHT INFRINGEMENT</b></h3>
                                        <p><span>Pursuant to Section 512(c) of the Copyright Revision Act, as enacted through the Digital Millennium Copyright Act, www.prestigelabs.com designates the following individual as its agent for receipt of notifications of claimed copyright infringement.</span></p>
                                        <ul>
                                            <li><span>By Mail: 30 N Gould St Ste 6466, Sheridan, WY 82801</span></li>
                                            <li><span>By Telephone: 1-800-470-7560</span></li>
                                            <li><span>By Email: </span><span>support@prestigelabs.com</span></li>
                                        </ul>
                                        <h3><b>BOTNETS</b></h3>
                                        <p><span>Prestige Labs retains the right, at our sole discretion, to terminate any accounts involved with botnets and related activities. If any hostnames are used as command and control points for botnets, Prestige Labs reserves the right to direct the involved hostnames to a honeypot, loopback address, logging facility, or any other destination at our discretion.</span></p>
                                        <h3><b>OTHER TERMS</b></h3>
                                        <p><span>If any provision of this Terms of Use Agreement shall be unlawful, void or unenforceable for any reason, the other provisions (and any partially-enforceable provision) shall not be affected thereby and shall remain valid and enforceable to the maximum possible extent. You agree that this Terms of Use Agreement and any other agreements referenced herein may be assigned by Prestige Labs, in our sole discretion, to a third party in the event of a merger or acquisition. This Terms of Use Agreement shall apply in addition to, and shall not be superseded by, any other written agreement between us in relation to your participation as a Member. Member agrees that by accepting this Terms of Use Agreement, Member is consenting to the use and disclosure of their personally identifiable information and other practices described in our Privacy Policy Statement[if applicable].</span></p>
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

export default Homepage;