import React from "react";
import "./productCard.css";
class ProductCard extends React.Component {
  render() {
    return (
      <div className="productCardDiv">
        <h3>{this.props.product.title}</h3>
        <img width={300} height={200} src={this.props.product.image_url} />
        <div className="bottomDiv">
          <h3>{this.props.product.price}/-</h3>
          <h3>Rating:{this.props.product.rating}</h3>
        </div>
      </div>
    );
  }
}
export default ProductCard;
