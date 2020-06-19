import React, { Component } from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom'
import { ProductConsumer } from "../../Context/Context";


export class Navbar extends Component {
  opensidebar = (e) => {
    document.getElementById("menu").style.width = "250px";
  };
  closesidebar = (e) => {
    document.getElementById("menu").style.width = "0px";
  };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-sm bg-dark">
          <Link to='/Productlist' >
            <i className="fas fa-mobile-alt pb-2"></i>
          </Link>
          <Link to='/Productlist' style={{textDecoration:'none'}}>
            <h4 className="pl-1 mt-1 product-heading"> Products</h4>
          </Link>
          <button
            className="navbar-toggler "
            type="button"
            data-toggle="collapse"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div id="mainbox" onClick={this.opensidebar}>
              &#9776;
            </div>
          </button>
          <div id="menu" className="sidemenu">
            <a className="nav-link " href="#home">
              <button className="btn stylebtn" onClick={this.closesidebar}>
                <i className="fas fa-cart-plus"></i> My Cart
              </button>
            </a>
            <a href="#" className="closebtn" onClick={this.closesidebar}>
              &times;
            </a>
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
            <li className="my-auto mr-5">
                <ProductConsumer>
                  {value =>{
                    if(value.cartTotal > 0){
                    return <span className="text-capitalize d-none d-lg-inline Navbar-text">Your Current Total : <strong>$ </strong >{value.cartTotal}</span>}
                    else{
                      return null
                    }
                  }}
                </ProductConsumer>
              </li>
              <li className="nav-item nav-item-2 active">
                <Link to='/Cart' className="nav-link " href="#home">
                  <button className="btn stylebtn">
                    <i className="fas fa-cart-plus"></i> My Cart
                  </button>
                </Link>
              </li>
          
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
