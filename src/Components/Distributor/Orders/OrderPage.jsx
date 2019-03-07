import React, { PureComponent } from "react";
import {NavLink} from "react-router-dom";
import {API_URL, API_KEY} from "../../../Constants/AppConstants";
import $ from "jquery";

import ProductsList from "./ProductsList";

class OrderPage extends PureComponent {

    constructor(props) {
        super(props);
        this.state = { 
            products: [],
            searchName: '',
         }
        document.title = "Order Page";
    }

    componentDidMount() {
        this.getAllProducts();
    }

    getAllProducts = () => {
        $.ajax({
            type: "POST",
            url: API_URL + "product/getList",
            data: {api_key: API_KEY},
        })
		.then(results => {
            if(results.response.code===1000) {
                this.setState({
                    products: results.response.data
                });		
            } else {
                console.log(results.response.message);
            }            
        });
    }

    searchProducts = (e) => {
        // let prod = this.state.products;

        // this.setState ({
        //      products: prod.map.filter(p => p.title != this.state.searchName)
        // }).bind(this)
        // console.log(this.state.searchName)
    }
        
    changeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() { 
        return ( 
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <main>
                                <div className="product-list-container">
                                    <div className="product-search-container">
                                        <form className="product-search-form">
                                            <div className="search-input-group">
                                                <input value={this.state.searchName} onChange={this.searchProducts} 
                                                 className="product-search_box" placeholder="Search" name="searchName" id="filter-by" autoComplete="off" type="text" />
                                            </div>
                                        </form>
                                        <div className="product-paging">
                                            <div className="product-btn-group">
                                                <button type="button" id="prev" className="prev spof-btn spof-btn-default" disabled="">&lt;&lt;</button>
                                                <button type="button" id="pageNum" className="pageNum spof-btn spof-btn-default">1</button>
                                                <button type="button" id="next" className="next spof-btn spof-btn-default" disabled="">&gt;&gt;</button>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>

                                    <div className="products_list">
                                        <div className="table-responsive">
                                            <table className="table">
                                                <colgroup>
                                                    <col width="25%" />
                                                    <col width="25%" />
                                                    <col width="40%" />
                                                </colgroup>
                                                <thead>
                                                    <tr>
                                                        <th className="">Product Name
                                                            <div className="prdname arrow-up arrowshow"></div>
                                                        </th>
                                                        <th className=""> Price </th>
                                                        <th className=""> </th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {
                                                        this.state.products.map(function(product, key) {
                                                            //if(product.flavours) {
                                                                return (
                                                                    <ProductsList key = {key} product={product} />
                                                                )
                                                           // }                      
                                                        }.bind(this))
                                                    }
                                                    
                                                </tbody>
                                            </table>   
                                        </div>
                                    </div>

                                    <div className="product-search-container product-search-container-bottom">
                                        <div className="product-paging">
                                            <div className="product-btn-group">
                                                <button type="button" id="prev" className="prev spof-btn spof-btn-default" disabled="">&lt;&lt;</button>
                                                <button type="button" id="pageNum" className="pageNum spof-btn spof-btn-default">1</button>
                                                <button type="button" id="next" className="next spof-btn spof-btn-default" disabled="">&gt;&gt;</button>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </main>

                            <div className="shopping-cart-wrapper">
                                <NavLink to="/cart" title="Shopping Cart">
                                    <div className="shopping-cart">
                                        <span id="expressCartItemCount">5</span> items
                                    </div>
                                </NavLink>
                            </div>

                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default OrderPage;