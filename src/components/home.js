import React from "react";
import Header from "./header";
// import cookies from "js-cookie";
// import { Redirect } from "react-router-dom";
class Home extends React.Component {
  render() {
    // const jwtToken = cookies.get("jwt_token");
    // if (jwtToken == undefined) {
    //   return <Redirect to="/login" />;
    // }
    return (
      <>
        <div>
          <Header />
        </div>
        <h1>Home</h1>
      </>
    );
  }
}
export default Home;
