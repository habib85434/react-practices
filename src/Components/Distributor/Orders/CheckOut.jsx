import React, { PureComponent } from 'react';

class CheckOut extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            first_name                  : '',
            last_name                   : '',
            company_name                : '',
            country_name                : '',
            street_address              : '',
            street_address_optional     : '',
            the_state                   : '',
            town                        : '',
            zip_code                    : '',
            phone                       : '',
            email                       : '',
            receive_text_yes            : '',
            ship_to_different_address   : '',
            order_comments              : '',
            card_number                 : '',
            card_expiration_month       : '',
            card_expiration_year        : '',
            cvv_number                  : '',
        }
        document.title = "Prestige Labs"
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
    

    }

    render() { 
        return ( 
            <React.Fragment>
                
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <main>
                                <div className="page-content entry-content">
                                    <div className="page-title">Checkout</div>
                                    <div className="woocommerce">
                                        <div className="steps-wrapper">
                                            <span className="cart"><i className="custom-icon-basket"></i>Shopping bag</span>
                                            <span className="checkout cart_active"><i className="custom-icon-check-list"></i>Checkout details</span>
                                            <span className="order"><i className="custom-icon-check-mark"></i>Order complete</span>
                                        </div>
                                        <form  onSubmit={this.onSubmitHandler}>
                                            <div className="pull-left col2-set">
                                                <div className="checkout_address_form">
                                                        <div className="">
                                                            <h3 className="checkout_title">Billing details</h3>
                                                            <div className="woocommerce-billing-fields__field-wrapper">
                                                                <div className="form-group pull-left name_field">
                                                                    <label className="">First name <span className="required">*</span></label>                                                        
                                                                    <input type="text" className="cus_field" name="first_name" placeholder="" value={this.state.first_name} onChange={this.changeHandler} />
                                                                </div>
                                                                <div className="form-group pull-right name_field">
                                                                    <label className="">Last name <span className="required">*</span></label>                                                       
                                                                    <input type="text" className="cus_field" name="last_name" placeholder="" value={this.state.last_name} onChange={this.changeHandler} autocomplete="family-name" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="">Company name <span className="optional">(optional)</span></label>
                                                                    <input type="text" className="cus_field" name="company_name" placeholder="" value={this.state.company_name} onChange={this.changeHandler} />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="">Country <span className="required">*</span> </label>
                                                                    <select name="country_name"  className="cus_field">
                                                                        <option value="">Select a country…</option>
                                                                        <option value="CA">Canada</option>
                                                                        <option value="US">United States (US)</option>
                                                                    </select>
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="">Street address <span className="required">*</span> </label>
                                                                    <input type="text" className="cus_field" name="street_address" placeholder="House number and street name" value={this.state.street_address} onChange={this.changeHandler} />
                                                                </div>
                                                                <div className="form-group">
                                                                    <input type="text" className="cus_field" name="street_address_optional" placeholder="Apartment, suite, unit etc. (optional)" value={this.state.street_address_optional} onChange={this.changeHandler} />
                                                                </div>

                                                                <div className="form-group">
                                                                    <label className="">Town / City <span className="required">*</span> </label>
                                                                    <input type="text" className="cus_field" name="town" placeholder="" value={this.state.town} onChange={this.changeHandler} />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="">State <span className="required">*</span> </label>
                                                                    <input type="text" className="cus_field" name="the_state" placeholder="" value={this.state.the_state} onChange={this.changeHandler} />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="">ZIP <span className="required">*</span> </label>
                                                                    <input type="text" className="cus_field" name="zip_code" placeholder="" value={this.state.zip_code} onChange={this.changeHandler} />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="">Phone <span className="required">*</span> </label>
                                                                    <input type="text" className="cus_field" name="phone" placeholder="" value={this.state.phone} onChange={this.changeHandler} />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="">Email address <span className="required">*</span> </label>
                                                                    <input type="text" className="cus_field" name="email" placeholder="" value={this.state.email} onChange={this.changeHandler} />
                                                                </div>
                                                            </div>
                                                            <div className="form-group agree_wrapper">
                                                                <label>I agree to receive text communications from Prestige Labs. Message and Data rates may apply</label> &nbsp;&nbsp;
                                                                <span>
                                                                    <input type="radio" name="receive_text_yes" value="Yes" checked="checked" /> Yes
                                                                </span>
                                                                <span>
                                                                    <input type="radio" name="receive_text_yes" value="No" /> No
                                                                </span>
                                                            </div>
                                                            <h3 className="ship-to-different-address">                                                   
                                                                <input id="ship-to-different-address-checkbox" className="woocommerce-form__input woocommerce-form__input-checkbox input-checkbox" type="checkbox" name="ship_to_different_address" value=""  /> 
                                                                <span>Ship to a different address?</span>                                                   
                                                            </h3>
                                                            <div className="form-group" >
                                                                <label className="">Order notes <span className="optional">(optional)</span></label>
                                                                <textarea name="order_comments" className="cus_field" id="" placeholder="Notes about your order, e.g. special notes for delivery." rows="2" cols="5"></textarea>
                                                            </div>
                                                            <div className="clearfix"></div>
                                                        </div>
                                                </div>
                                            </div>


                                            <div className="pull-right col2-set">
                                            <h3 className="checkout_title">Your order</h3>
                                            <div id="order_review" className="woocommerce-checkout-review-order">
                                                <div className="cart_totals review-order-table-wrapper"> 


                                                    <table cellspacing="0" className="shop_table checkout_table shop_table_responsive">
                                                        <colgroup>
                                                            <col width="40%" />
                                                            <col width="60%" />
                                                        </colgroup>
                                                        <tbody>
                                                            <tr className="cart_item">
                                                                <td className="product-name">  
                                                                    <span className="checkout_product_name">Fat Loss - Fruit Punch, Fat Loss </span>							
                                                                    <span className="product-quantity">Quantity: 1</span>
                                                                    <dl className="variation">
                                                                        <dt className="variation-Every1Months">Every 1 Month(s):</dt>
                                                                        <dd className="variation-Every1Months"><strong>USD 119.26 each</strong></dd>
                                                                    </dl>
                                                                </td>
                                                                <td className="product-total">
                                                                    <span className="subscription-price"><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">USD </span>119.26</span></span>
                                                                </td>
                                                            </tr>
                                                            <tr className="cart-subtotal">
                                                                <td>Subtotal</td>
                                                                <td data-title="Subtotal">
                                                                    <span className="woocommerce-Price-amount amount">
                                                                        <span className="woocommerce-Price-currencySymbol">USD </span>119.26
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                            <tr className="woocommerce-shipping-totals shipping">
                                                                <td>Shipping Cost</td>
                                                                <td><span className="shipping_address_enter">Enter your address to view shipping options.</span> </td>
                                                            </tr>
                                                            <tr className="sub-order-total">
                                                                <td>Total</td>
                                                                <td  className="sub-order-total-usd">
                                                                    <strong>
                                                                        <span className="woocommerce-Price-amount amount">
                                                                            <span className="woocommerce-Price-currencySymbol">USD </span>128.25
                                                                        </span>
                                                                    </strong>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="2" className="recurring_totals_title">Recurring Totals</td>
                                                            </tr>

                                                            <tr className="cart-subtotal recurring-total">
                                                                <td rowspan="1">Subtotal</td>
                                                                <td className="subtotal">
                                                                    <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">USD </span>119.26</span> / month
                                                                </td>
                                                            </tr>
                                                            <tr className="">
                                                                <td>SHIPPING COST</td>
                                                                <td className="subtotal">
                                                                    <span className="shipping_cost_subtotal"> Shipping costs will be calculated once you have provided your address.</span>											
                                                                </td>
                                                            </tr>
                                                            <tr className="order-total">
                                                                <td rowspan="1" className="recurring_total_text">Recurring Total</td>
                                                                <td className="recurring_total">
                                                                    <div className="total_per_month">
                                                                        <span><span className="woocommerce-Price-currencySymbol">USD </span>128.25</span><span className="per_month"> / month</span>
                                                                    </div> 

                                                                    <div className="first-payment-date">
                                                                        <small>First renewal: January 13, 2019</small>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                </table>



                                                </div>
                                            </div>
                                            <h3 className="checkout_title">Payment Methods</h3>
                                            <div className="woocommerce-checkout-payment">
                                                <input type="radio" className="input-radio" name="" value="" checked="checked" />
                                                <label for="payment_method_icanpay">
                                                iCanPay <img src="https://pl-phase3.technobd.com/wp-content/plugins/iCanPay/assets/images/card.png" alt="iCanPay" />	</label>
                                                <div className="payment_box">



                                                    <div className="fieldset">
                                                        <div className="form-group pull-left name_field">
                                                            <label>Name On Card <span className="required">*</span></label>
                                                            <input type="text" className="cus_field" name="" value={this.state.card_name} onChange={this.changeHandler} />
                                                        </div>
                                                        <div className="form-group pull-right name_field">
                                                            <label>Credit Card Number <span className="required">*</span></label>
                                                            <input type="text" className="cus_field" name="card_number" maxlength="16" autocomplete="off" value={this.state.card_number}  onChange={this.changeHandler} />
                                                        </div>
                                                        <div className="form-group pull-left name_field card_exp_date">
                                                            <label>Expiration Date <span className="required">*</span></label>
                                                            <select name="card_expiration_month" id="" className="pull-left cus_field">
                                                                <option value="">Month</option>
                                                                <option value="1">January</option>
                                                            </select>
                                                            <select name="card_expiration_year" id="" className="pull-right cus_field">
                                                                <option value="">Year</option>
                                                                <option value="18">2018</option>
                                                                <option value="19">2019</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group pull-right name_field">
                                                            <label>CVV <span className="required">*</span></label>
                                                            <input type="text" className="cus_field" name="cvv_number" value={this.state.cvv_number} maxlength="4" onChange={this.changeHandler} />
                                                        </div>
                                                        <div className="iCanPayTermsAndCondition">
                                                            By placing your order, you agree to our
                                                            <a href="#" target="_blank">Terms and Condition</a> and
                                                            <a href="#" target="_blank"> Privacy Policy. </a>
                                                            <span>Powered and owned by iCanPay.</span>
                                                        </div>
                                                    </div>


                                                </div>
                                                <div className="form-row place-order">                                                
                                                    <button type="submit" className="wc-forward" name="" value="" >Place Order</button>
                                                </div>
                                            </div>

                                        </div>
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
 
export default CheckOut;