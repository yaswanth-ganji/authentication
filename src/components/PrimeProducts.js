import React from "react";
import Cookies from "js-cookie";
import ProductCard from "./ProductCard";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./products.css";

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  fail: "FAIL",
  inProgress: "INPROGRESS",
};
class PrimeProducts extends React.Component {
  state = {
    primeProducts: [],
    apiStatus: apiStatusConstants.initial,
  };
  componentDidMount() {
    this.getPrimeProducts();
  }
  getPrimeProducts = async () => {
    this.setState({ apiStatus: apiStatusConstants.inProgress });
    const jwtToken = Cookies.get("jwt_token");
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    };
    const res = await fetch("https://apis.ccbp.in/prime-deals", options);
    if (res.ok == true) {
      const jsonData = await res.json();
      this.setState({
        primeProducts: jsonData.prime_deals,
        apiStatus: apiStatusConstants.success,
      });
    } else if (res.status == 401) {
      this.setState({ apiStatus: apiStatusConstants.fail });
    }
  };

  renderSuccessCase = () => {
    return (
      <div>
        <h2>Exclusive Prime Products</h2>
        <div className="productsDiv">
          {this.state.primeProducts.map((eachItem) => {
            return <ProductCard product={eachItem} />;
          })}
        </div>
      </div>
    );
  };

  renderFailureCase = () => {
    return (
      <div>
        <h3>Get Exclusive Deals</h3>
        <button>Get Now</button>
      </div>
    );
  };
  renderInprogressCase = () => {
    return (
      <div>
        <Loader
          type="ThreeDots"
          color="#0b69ff"
          height={50}
          width={70}
          //3 secs
        />
      </div>
    );
  };

  render() {
    switch (this.state.apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessCase();

      case apiStatusConstants.fail:
        return this.renderFailureCase();

      case apiStatusConstants.inProgress:
        return this.renderInprogressCase();

      default:
        return null;
    }
  }
}

export default PrimeProducts;
