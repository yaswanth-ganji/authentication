import React from "react";
import Cookies from "js-cookie";
import ProductCard from "./ProductCard";
import "./products.css";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
class Products extends React.Component {
  state = {
    list: [],
    isLoading: true,
  };
  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const jwtToken = Cookies.get("jwt_token");
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    };

    // const res = await fetch("https://apis.ccbp.in/products", options);
    // if (res.ok === true) {
    //   const jsonData = await res.json();

    //   this.setState({ list: jsonData });
    //   console.log(this.state.list);
    // }
    fetch("https://apis.ccbp.in/products", options)
      .then((res) => {
        return res.json();
      })
      .then((jsonData) => {
        this.setState({ list: jsonData.products, isLoading: false });
      });
  };

  render() {
    const AllProducts = this.state.list.map((eachItem) => {
      return <ProductCard product={eachItem} />;
    });

    return (
      <div>
        <h1>Products</h1>
        {this.state.isLoading ? (
          <Loader
            type="TailSpin"
            color="#00BFFF"
            height={50}
            width={70}
            //3 secs
          />
        ) : (
          <div className="productsDiv">{AllProducts}</div>
        )}
      </div>
    );
  }
}
export default Products;
