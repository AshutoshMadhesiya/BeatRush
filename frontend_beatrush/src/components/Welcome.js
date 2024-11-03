import React from "react";
function Welcome(token) {
  return (
    <div>
      <h1>Welcome! You are logged in.</h1>
      <p>Your token: {token}</p>
    </div>
  );
}
export default Welcome;
