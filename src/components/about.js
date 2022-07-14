import React from "react";
import Header from "./header";
// import { Redirect } from "react-router-dom";
// import cookies from "js-cookie";
class About extends React.Component {
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
        <h1>About</h1>
      </>
    );
  }
}
export default About;
