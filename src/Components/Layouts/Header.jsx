import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends PureComponent {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <header className="montserrat site-header">
                    <div className="mob_menu_wrapper d-sm-block d-md-none">
                        <div className="site_menu_wrapper_inner">  
                            <div className="mob_site_menu">
                                <ul className="mob_site_content">
                                    <li><a href="#" className=""><span>Express Checkout </span></a></li>

                                    <li className=""><NavLink to="/athletes">athletessssss</NavLink></li>
                                    <li className=""><NavLink to="/faq">FAQQQQQ</NavLink></li>
                                    <li className=""><a href="refer_my_account.php">My account</a></li>  
                                </ul>
                            </div>
                            <div className="mob_main_user">
                                <div className="mob_main_user_wrapper">
                                    <ul>
                                        <li><a href="refer_my_account.php">My Account</a> </li>
                                    </ul>
                                </div>
                            </div>
                            <a href="#">
                                <div className="mob_main_cart"></div>
                            </a>
                        </div>    

                        <div className="clearfix"></div>
                        <p className="mob_text_order">Order online or call us 1-800-470-7560</p>
                        <div className="mob_header_logo">
                            <a href="index.php"><img src={require("../../Assets/images/prestigelabs-logo.png")} alt="Prestige Labs" /></a>
                        </div>
                        <div className="clearfix"></div> 
                    </div>

                    <div className="hide_small_screen">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="header-top">
                                        <div className="top-widgets-right">			
                                            <div className="textwidget roboto">Order online or call us 1-800-470-7560</div>		
                                        </div>
                                    </div>
                                    <div className="logo-wrapper">
                                        <div className="site-logo">
                                        <NavLink title="Prestige  Labs" activeClassName='active' to="/" exact>
                                                <img src={require("../../Assets/images/cropped-logo-1.png")} className="attachment-full size-full" alt="" title="" />	
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <section>
                            <div className="site_menu">
                                <div className="header-logo-fix">
                                    <a href="#"><img src={require("../../Assets/images/logo_fix.png")} alt="Prestige  Labs" title="" /></a>
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <nav className="primary-nav">
                                                <div className="menu-main-menu-container">
                                                    <ul id="menu-main-menu" className="menu">
                                                        <li className="active"><a href="product_list.php">Order Page</a></li>
                                                        <li className=""><a href="athletes.php">athletes</a></li>
                                                        <li className=""><a href="faq.php">FAQ</a></li>
                                                        <li className=""><a href="refer_my_account.php">My account</a></li>                                       
                                                    </ul>
                                                </div>                   
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </header>
            </React.Fragment>
        );
    }
}

export default Header;