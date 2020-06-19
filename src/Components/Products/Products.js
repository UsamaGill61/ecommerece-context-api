import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Products.css";
import PropTypes from "prop-types";
import { ProductConsumer } from "../../Context/Context";

class Products extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.products;
    return (
      <div className="col-xl-3 col-lg-3 col-md-6 mx-auto my-3 col-12 px-5">
        <div className="card">
          <ProductConsumer>
            {(value) => (
              <div
                className="img-container p-5"
                onClick={() => value.handledetail(id)}
              >
                <Link to="/ProductDetails">
                  <img src={img} alt="Product Image" className="card-img-top" />
                </Link>
                <button
                  className="cart-btn"
                  disabled={inCart ? true : false}
                  onClick={() => {value.addtocart(id); value.openmodel(id)}}
                >
                  {inCart ? (
                    <p className="text-capitalize mb-0" disabled>
                      In Cart
                    </p>
                  ) : (
                    <i className="fas fa-cart-plus"></i>
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="mb-0">
              <span className="mr-1">$</span>
              {price}
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

Products.propTypes = {
  Products: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};

export default Products;
