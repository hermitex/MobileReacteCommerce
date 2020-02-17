import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const productContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailProduct
  };
  handleDetail = () => {
    console.log("Hello from detail");
  };

  addToCart = () => {
    console.log("Hello from cart");
  };
  render() {
    return (
      <productContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </productContext.Provider>
    );
  }
}
const ProductConsumer = productContext.Consumer;
export { ProductProvider, ProductConsumer };
