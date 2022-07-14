import React from "react";
import Header from "./header";
// import cookies from "js-cookie";
// import { Redirect } from "react-router-dom";
class Contact extends React.Component {
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
        <h1> Contact</h1>
      </>
    );
  }
}
export default Contact;
