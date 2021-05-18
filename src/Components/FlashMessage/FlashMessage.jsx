import React from "react";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

function Message({ open, onClose, message }) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open}
      autoHideDuration={4000}
      onClose={onClose}
    >
      <Alert onClose={onClose} severity={message.type} icon={false}>
        <strong>{message.text}</strong>
      </Alert>
    </Snackbar>
  );
}

export default Message;
