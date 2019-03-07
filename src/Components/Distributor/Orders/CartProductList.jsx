import React, { PureComponent } from 'react';


class CartProductList extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            product_quantity : 1
        }
        document.title = ""
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }


    render() { 
        return ( 
            <React.Fragment>
                <tr className="">
                    <td className="cart_product_remove">
                        <a href="#" className="remove"><i className="fa fa-times" aria-hidden="true"></i></a>
                    </td>
                    <td className="product-thumbnail">
                        <div className="pull-left">
                            <a href="#"><img src="https://refer.prestigelabs.com/wp-content/uploads/2018/11/ultimate-bundle-300x300.png" className="cart_product_img" alt="" /></a>   
                        </div>
                        <div className="pull-left cart_product_details">
                            <a href="#">Fat Loss - Fruit Punch, Fat Loss</a>
                            <dl className="variation">
                                <dt className="variation-Every1Months">Every 1 Month(s):</dt>
                                <dd className="variation-Every1Months"><p>USD 119.26 each</p>
                                </dd>
                            </dl>
                        </div>
                    </td>
                    <td className="cart_product_price">
                        <span className="">
                            <span className="Price-currencySymbol">USD</span>26009.00</span>    
                    </td>
                    <td className="cart_product_number">
                        <input type="number" id="product-quantity" className="input-text qty text" step="1" min="0" max="" name="product_quantity" value={this.state.product_quantity} onChange={this.changeHandler} title="Qty" size="4" pattern="[0-9]*" inputmode="numeric" />
                    </td>
                    <td className="cart-product-subtotal">
                        <span className=""><span className="Price-currencySymbol">USD</span>53008.00</span> 
                    </td>
                </tr>
                
            </React.Fragment>
         );
    }
}
 
export default CartProductList;