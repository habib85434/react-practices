import React, { Component } from 'react';

import 'font-awesome/css/font-awesome.min.css';
import "./Assets/css/bootstrap.min-v4.1.3.css";
import "./Assets/css/styles.css";
import "./Assets/css/custom.css";
import "./Assets/css/responsive.css";

import $ from 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';

import Header from './Components/Layouts/Header';
import Footer from './Components/Layouts/Footer';
import CommonRouter from './Components/CommonRouter';

class App extends Component {

  componentDidMount(){

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 300) {
            $('.site_menu').addClass('fixed-header');
        } else {
            $('.site_menu').removeClass('fixed-header');
        }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').show();
        } else {
            $('.scrollup').hide();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    
    });

    $(".mob_site_menu").on("click", function () {
        $("body").toggleClass("current", 1000);
    });
  }

  render() {
    return (
      <React.Fragment>
          <Header />
          <div className="site-wrapper">
                <CommonRouter />
          </div>
          <Footer />
      </React.Fragment>
    );
  }
}

export default App;
