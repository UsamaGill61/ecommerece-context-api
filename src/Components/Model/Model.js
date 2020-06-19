import React, { Component } from "react";
import { ProductConsumer } from "../../Context/Context";
import { Link } from "react-router-dom";
import "./Model.css";

class Model extends Component {
  render() {
    return (
      <div>
        <ProductConsumer>
          {(value) => {
            const { modelopen, closeModel } = value;
            const { img, title, price } = value.modalProduct;

            if (!modelopen) {
              return null;
            } else {
              return (
                <React.Fragment>
                  <div className="container-fluid mt-5 model-container">
                    <div className="row ">
                      <div className=" col-8 mx-auto col-md-4 col-lg-4 col-xl-4 text-center text-uppercase model">
                        <h5 className="mt-4">Items Added To The Cart</h5>
                        <img src={img} className="img-fluid img-container "></img>
                        <h5>{title}</h5>
                        <h5 className="text-muted mt-2">price : ${price}</h5>
                        <Link to="/">
                    <div className="btn btn-outline-danger mt-1" onClick={()=>closeModel()}>
                      Continue Shopping
                    </div>
                  </Link>
                  <Link to="/cart">
                    <div className="btn btn-outline-info mt-1 mb-4" onClick={()=>closeModel()}>
                      Go To Cart
                    </div>
                  </Link>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            }
          }}
        </ProductConsumer>
      </div>
    );
  }
}

export default Model;
