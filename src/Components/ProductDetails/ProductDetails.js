import React, { Component } from "react";
import { ProductConsumer } from "../../Context/Context";
import { Link } from "react-router-dom";
import ProductlistTitle from "../ProductlistTitle/ProductlistTitle";

class ProductDetails extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart,
          } = value.productdetail;
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 text-center mx-auto my-5">
                  <h1>
                    <ProductlistTitle title={title} />
                  </h1>
                </div>
              </div>
              <div className="row">
                <div className="col-10 col-md-6 mx-auto my-3  text-center">
                  <img
                    src={img}
                    className="img-fluid img-responsive"
                    alt="img"
                  ></img>
                </div>
                <div className="col-10 col-md-6 mx-auto my-3">
                  <h1>Model : {title}</h1>
                  <h4 className="text-muted text-uppercase mt-3 mb-2 text-title">
                    Made By : <span>{company}</span>
                  </h4>
                  <h4>
                    Price : <strong>$</strong> {price}
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    Some Info About Products :
                  </p>
                  <p className="text-muted">{info}</p>
                  <Link to="/Productlist">
                    <div className="btn btn-outline-danger mr-1">
                      Back To Products
                    </div>
                  </Link>
                  <div
                    className="btn btn-outline-info"
                    disabled={inCart ? true : false}
                    onClick={()=>{
                        value.addtocart(id);value.openmodel(id)
                    }}
                  >
                    {inCart ? "In Cart" : "Add To Cart"}
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default ProductDetails;
