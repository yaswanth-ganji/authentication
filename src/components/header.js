import React from "react";
import { Link } from "react-router-dom";
import cookies from "js-cookie";
import { withRouter } from "react-router-dom";
class Header extends React.Component {
  onLogout = () => {
    const { history } = this.props;
    cookies.remove("jwt_token");
    history.replace("/login");
  };
  render() {
    return (
      <>
        <Link to="/">
          <h3>Home</h3>
        </Link>
        <Link to="/about">
          <h3>About</h3>
        </Link>
        <Link to="/contact">
          <h3>Contact</h3>
        </Link>
        <Link to="/Products">
          <h3>Products</h3>
        </Link>
        <button onClick={this.onLogout}> Log Out</button>
      </>
    );
  }
}
export default withRouter(Header);
