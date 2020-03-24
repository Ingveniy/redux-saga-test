import React from "react";

const Alert = ({ alertText }) => {
  return (
    <div class='alert alert-danger' role='alert'>
      {alertText}
    </div>
  );
};

export default Alert;
