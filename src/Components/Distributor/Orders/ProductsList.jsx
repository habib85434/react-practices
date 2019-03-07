import React, { PureComponent } from "react";

class ProductsList extends PureComponent {

    constructor(props) {
        super(props);
        this.state = { 
            showProductDetails: false,
            productLabel: "Show Options",
            addToCart: "Add to Cart",
         }
    }
    
    showHideProductDetails = (e) => {
        
        if(this.state.showProductDetails) {
            this.setState ({
                showProductDetails: false,
                productLabel : "Show Options",
            });
        } else {
            this.setState ({
                showProductDetails: true,
                productLabel : "Hide Options",
            });
        }
        
    }
      
    addToCart = (e) => {
        localStorage.setItem("Id", JSON.parse(localStorage.getItem("Id")) + 1);
        this.addToCartLabelChange();
    }

    addToCartLabelChange = (e) => {
        this.setState({
            addToCart: "Adding..."
        })
        
        setTimeout(function() {
            this.setState({
                addToCart: "Thank You"
            })
        }.bind(this), 1000)

        setTimeout(function() {
            this.setState({
                addToCart: "Add More ..."
            })
        }.bind(this), 2000)
    }

    
    render() { 
        return ( 
            <React.Fragment>
                <tr className="items title express_checkout_item">
                    <td>
                        <a href="javascript:void(0)" className="cd-popup-trigger express_checkout_item_name">
                            <div className="product_list_img">
                                <img src={this.props.product.thumb_image} className="" alt="" title={this.props.product.title} />
                            </div>
                            <span> {this.props.product.title} </span>
                        </a>
                    </td>
                    <td className="text-center">
                        <i>From </i>
                        {this.props.product.currency +' '+ this.props.product.start_price}
                    </td>
                    <td>
                        <input onClick={this.showHideProductDetails} value={this.state.productLabel} name="" className="product_list_btn" type="submit" />
                    </td>
                </tr>
                <tr className="popup_hide current" id="product_details_5">
                    <td colSpan="6">

                        <table style={{display: this.state.showProductDetails ? '' : 'none'}} className="cart_showpopUp" id="popup" border="0">
                            <colgroup>
                                <col width="30%" />
                                <col width="20%" />
                                <col width="35%" />
                                <col width="10%" />
                                <col width="10%" />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th></th>
                                    <th>Flavors</th>
                                    <th>Months</th>
                                    <th>Price</th>
                                    <th></th>
                                </tr>
                                <tr className="variant items">
                                    <td rowSpan="2">
                                        <div>
                                            <img className="cart_add_product_img" src={this.props.product.large_image}  alt="" title={this.props.product.title} />
                                        </div>           
                                        <p>{this.props.product.short_description}</p>
                                    </td>
                                    <td>
                                        <select name="" className="variant-changer">
                                            <option value="">Fruit Punch</option>
                                            <option value="">Pink Lemonade</option> 
                                        </select>
                                    </td>
                                    <td>
                                        Performance Stack<br />
                                        <div className="form-check">
                                            <input type="checkbox" name="" value="" className="form-check-input" id="" />
                                            <label className="form-check-label" htmlFor="purchase_type_28739">Subscribe &amp; Save 15.545% ($0)</label>
                                        </div>
                                    </td>
                                    <td className="text-center">
                                        <span className="compared_price">
                                            {this.props.product.currency +' '+ this.props.product.price}
                                        </span>
                                        <span className="price">
                                            {this.props.product.currency +' '+ this.props.product.start_price}
                                        </span>
                                    </td>
                                    <td className="submit-col">
                                        <input onClick={this.addToCart} value={this.state.addToCart} name="addToCart" className="cart_add_product_btn"  type="button" />
                                    </td>
                                </tr>
                                <tr className="variant items">
                                    <td>
                                        <select name="" className="variant-changer">
                                            {/* {
                                                this.props.product.flavours.map(function(flavour) {
                                                    return (
                                                        <option key={flavour.id} value={flavour.id}>{flavour.value}</option>
                                                    )
                                                }.bind(this))
                                            } */}
                                        </select>
                                    </td>
                                    <td>
                                        <select name="" className="variant-changer">
                                            {
                                                this.props.product.months.map(function(month) {
                                                    return (
                                                        <option key={month.id} value={month.id}>{month.value}</option>
                                                    )
                                                }.bind(this))
                                            }
                                        </select> 
                                    </td>
                                    <td className="text-center">
                                        <span className="compared_price">
                                            {this.props.product.currency +' '+ this.props.product.price}
                                        </span>
                                        <span className="price">
                                            {this.props.product.currency +' '+ this.props.product.start_price}
                                        </span>
                                    </td>
                                    <td className="submit-col">
                                        <input onClick={this.addToCart} className="cart_add_product_btn" value={this.state.addToCart} name="addToCart" type="button" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </td>
                </tr>
            </React.Fragment>
         );
    }
}
 
export default ProductsList;