import React, { PureComponent } from 'react';
import CartPageList from './CartProductList';
import { NavLink } from 'react-router-dom';

class CartPage extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            shipping_cost :''
        }
        document.title = "Cart-Prestige Labs"
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    UpdateShoppingCart= ()=>{

    }
    
    applyCoupon= ()=>{

    }
    
    render() { 
        return ( 
            <React.Fragment>
                <div className="container"> 
                    <div className="row">
                        <div className="col-md-12">
                            <main>
                                <div className="page-title">Cart</div>
                                    <div className="cart_wrapper">
                                        <div className="steps-wrapper">
                                            <span className="cart cart_active"><i className="custom-icon-basket"></i>Shopping bag</span>
                                            <span className="checkout"><i className="custom-icon-check-list"></i>Checkout details</span>
                                            <span className="order"><i className="custom-icon-check-mark"></i>Order complete</span>
                                        </div>
                            <form className="">
                                <div className="table-responsive">
                                    <table className="table cart_table">
                                        <colgroup>
                                            <col width="5%" />
                                            <col width="40%" />
                                            <col width="20%" />
                                            <col width="20%" />
                                            <col width="20%" />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th>&nbsp;</th>
                                                <th className="text-center">Product</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <CartPageList 
                                                
                                            />

                                            <tr>
                                                <td  colspan="6" className="actions border-left-none">
                                                    <div className="pull-left coupon"> 
                                                        <input type="text" className="input-text" name="" value="" placeholder="Coupon code" /> 
                                                        <input type="submit" className="button cus_button" name="" onClick={this.applyCoupon} value="Apply coupon" />
                                                    </div>  
                                                    <div className="pull-right countinue_shop">
                                                        <input type="submit" className="button link-to-shop update_cart" name="" onClick={this.UpdateShoppingCart} value="Update cart" disabled />
                                                        <NavLink className="button link-to-shop" to="/">Back to shop</NavLink>
                                                        <input type="hidden" id="_wpnonce" name="" value="" />
                                                        <input type="hidden" name="" value="" />  
                                                    </div>
                                                    <div className="clearfix"></div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div> 
                            </form>
                            <div className="clearfix"></div>
                                <div className="cart-collaterals">
                                    <h2 className="inner_title">Cart totals</h2>
                                    <div className="cart_totals">                                   
                                        <table cellspacing="0" className="shop_table shop_table_responsive">
                                            <tbody>
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
                                                    <td data-title="Shipping Cost">
                                                        <ul id="shipping_method" className="shipping-methods">
                                                            <li>
                                                                <input type="radio" name="shipping_cost" id="" value={this.state.shipping_cost} onChange={this.changeHandler} className="shipping_method" checked="checked" />
                                                                <label>Expedited Flat Shipping (2-3 Business days): 
                                                                    <span className="woocommerce-Price-amount amount">
                                                                        <span className="woocommerce-Price-currencySymbol">USD </span>8.99</span>
                                                                </label>	
                                                            </li>
                                                            <li>
                                                                <input type="radio" name="shipping_cost" id="" value={this.state.shipping_cost} onChange={this.changeHandler} className="shipping_method" />
                                                                <label>Standard Flat Shipping (5-7 Business days): 
                                                                    <span className="woocommerce-Price-amount amount">
                                                                        <span className="woocommerce-Price-currencySymbol">USD </span>5.99</span>
                                                                </label>					
                                                            </li>
                                                        </ul>
                                                        <p className="woocommerce-shipping-destination">
                                                            Estimate for <strong>18320 Ashlea Dr, brookfield, WI 53045</strong>. 
                                                        </p>
                                                    </td>
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
                                                    <td>Shipping via Expedited Flat Shipping (2-3 Business days)</td>
                                                    <td className="subtotal">
                                                        <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">USD </span>8.99</span> / month											
                                                    </td>
                                                </tr>
                                                <tr className="order-total">
                                                    <td rowspan="1" className="recurring_total_text">Recurring Total</td>
                                                    <td className="recurring_total">
                                                        <div className="total_per_month">
                                                            <span><span className="woocommerce-Price-currencySymbol">USD </span>128.25</span> / month
                                                        </div> 

                                                        <div className="first-payment-date">
                                                            <small>First renewal: January 13, 2019</small>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="wc-proceed-to-checkout">
                                            <NavLink className="wc-forward" to="/check-out">Proceed to checkout</NavLink>
                                        </div>
                                    </div>
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
 
export default CartPage;