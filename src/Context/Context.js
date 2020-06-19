import React, { Component } from "react";
import { storeProducts, detailProduct } from "../Components/Data/Data";

const ProductCotext = React.createContext();

class Productprovider extends Component {
  state = {
    products: [],
    productdetail: detailProduct,
    cart: [],
    modelopen: false,
    modalProduct: detailProduct,
    cartSubtotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };
  componentDidMount() {
    this.setProduct();
  }
  setProduct = () => {
    let copyproduct = [];
    storeProducts.forEach((eachitem) => {
      const singleitem = { ...eachitem };
      copyproduct = [...copyproduct, singleitem];
    });
    this.setState(() => {
      return { products: copyproduct };
    });
  };

  getitem = (id) => {
    const product = this.state.products.find((eachitem) => eachitem.id === id);
    return product;
  };

  handledetail = (id) => {
    const product = this.getitem(id);
    this.setState(
      () => {
        return { productdetail: product };
      },
      () => {
        this.AddAllTotals();
      }
    );
  };

  addtocart = (id) => {
    let copyOfProductArray = [...this.state.products];
    const index = copyOfProductArray.indexOf(this.getitem(id));
    const product = copyOfProductArray[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(() => {
      return {
        products: copyOfProductArray,
        cart: [...this.state.cart, product],
      };
    });
  };

  openmodel = (id) => {
    const product = this.getitem(id);
    this.setState(() => {
      return { modalProduct: product, modelopen: true };
    });
  };
  closeModel = () => {
    this.setState(() => {
      return { modelopen: false };
    });
  };
  incriment = (id) => {
    let tempCart = [...this.state.cart];
    const selectProduct = tempCart.find((eachitem) => eachitem.id === id);
    const index = tempCart.indexOf(selectProduct);
    const product = tempCart[index];

    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.AddAllTotals();
      }
    );
  };
  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectProduct = tempCart.find((eachitem) => eachitem.id === id);
    const index = tempCart.indexOf(selectProduct);
    const product = tempCart[index];

    product.count = product.count - 1;
    if (product.count === 0) {
      this.removeItem(id);
    } 
    else {
      product.total = product.count * product.price;
      this.setState(
        () => {
          return { cart: [...tempCart] };
        },
        () => {
          this.AddAllTotals();
        }
      );
    }


  };
  removeItem = (id) => {
    let tempProduct = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter((eachitem) => eachitem.id !== id);

    const index = tempProduct.indexOf(this.getitem(id));
    let reomoveProduct = tempProduct[index];
    reomoveProduct.inCart = false;
    reomoveProduct.count = 0;
    reomoveProduct.total = 0;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          products: [...tempProduct],
        };
      },
      () => this.AddAllTotals()
    );
  };
  clearCart = () => {
    this.setState(
      () => {
        return {
          cart: [],
        };
      },
      () => this.setProduct(),
      this.AddAllTotals()
    );
  };
  AddAllTotals = () => {
    let subTotal = 0;
    this.state.cart.map((eachitem) => {
      subTotal += eachitem.total;
    });
    const temptax = subTotal * 0.1;
    const tax = parseFloat(temptax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return {
        cartSubtotal: subTotal,
        cartTax: tax,
        cartTotal: total,
      };
    });
  };
  render() {
    return (
      <ProductCotext.Provider
        value={{
          ...this.state,
          handledetail: this.handledetail,
          addtocart: this.addtocart,
          openmodel: this.openmodel,
          closeModel: this.closeModel,
          incriment: this.incriment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </ProductCotext.Provider>
    );
  }
}

const ProductConsumer = ProductCotext.Consumer;

export { Productprovider, ProductConsumer };
