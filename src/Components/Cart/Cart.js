import React, { Component } from "react";
import ProductlistTitle from "../ProductlistTitle/ProductlistTitle";
import CartFirstColoum from "./CartFirstColoum";
import EmptyCartTitle from "./EmptyCartTitle";
import { ProductConsumer } from "../../Context/Context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

class Cart extends Component {
  render() {
    return (
      <div>
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <ProductlistTitle name="your" title="cart" />
                  <CartFirstColoum />
                  <CartList value={value}/>
                  <CartTotals value={value}/>
                </React.Fragment>
              );
            }
            else{
                return(
                    <EmptyCartTitle />

                )
                
            }
          }}
        </ProductConsumer>

      </div>
    );
  }
}

export default Cart;
