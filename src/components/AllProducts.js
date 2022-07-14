import React from "react";
import Products from "./products";
import PrimeProducts from "./PrimeProducts";
class Allproducts extends React.Component {
  render() {
    return (
      <div>
        <PrimeProducts />
        <Products />
      </div>
    );
  }
}

export default Allproducts;
