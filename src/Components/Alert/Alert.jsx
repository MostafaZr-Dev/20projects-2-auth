import React from "react";
import { Alert, AlertTitle } from "@material-ui/lab";

function CustomAlert({ type, title, text }) {
  return (
    <Alert severity={type}>
      <AlertTitle>{title}</AlertTitle>
      {text}
    </Alert>
  );
}

export default CustomAlert;
