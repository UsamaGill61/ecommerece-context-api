import React, { Component } from "react";

import Navbar from "./Components/Navbar/Navbar";
import Productlist from "./Components/ProductList/ProductList";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Cart from "./Components/Cart/Cart";
import DefaultRoute from "./Components/DefaultRoute/DefaultRoute";
import { Switch, Route } from "react-router-dom";
// import Model from "./Components/Model/Model";

export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Productlist} />
          <Route path="/Productlist" exact component={Productlist} />
          <Route path="/ProductDetails" component={ProductDetails} />
          <Route path="/Cart" component={Cart} />
          <Route component={DefaultRoute} />
        </Switch>
        {/* <Model/> */}
      </React.Fragment>
    );
  }
}

export default App;
