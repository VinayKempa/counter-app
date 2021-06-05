import React from "react";

function AlertBox({ message, type }) {
  return (
    <div className={`alert alert-${type}`}>
      <div>{message}</div>
    </div>
  );
}

export default AlertBox;
