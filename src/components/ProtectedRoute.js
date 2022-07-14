import React from "react";
import { Route, Redirect } from "react-router-dom";

import cookie from "js-cookie";

class ProtectedRoute extends React.Component {
  render() {
    const jwtToken = cookie.get("jwt_token");

    if (jwtToken === undefined) {
      return <Redirect to="/login" />;
    }
    return (
      <div>
        <Route {...this.props} />
      </div>
    );
  }
}

export default ProtectedRoute;
