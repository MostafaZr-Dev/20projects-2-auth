import React from "react";
import {
  Grid,
  FormControl,
  TextField,
  IconButton,
  Typography,
  Tooltip,
  CircularProgress,
} from "@material-ui/core";
import { ExitToApp } from "@material-ui/icons";
import { Formik } from "formik";
import * as Yup from "yup";

import { AuthWrapper, FormWrapper, FormButton } from "Pages/Auth/AuthStyles";

const ForgetSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email!").required("Required!"),
});

function ForgetPassword({ show, onToggle, onSubmit , isLoading }) {
  return (
    <AuthWrapper show={show}>
      <Typography className="auth-header">Forget Password</Typography>
      {show && (
        <Tooltip title="Login" aria-label="login" placement="top">
          <IconButton className="toggle-btn" onClick={onToggle}>
            <ExitToApp fontSize="large" />
          </IconButton>
        </Tooltip>
      )}

      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={ForgetSchema}
        onSubmit={onSubmit}
      >
        {({ values, errors, handleChange, handleBlur, submitForm }) => (
          <FormWrapper container spacing={1}>
            <Typography variant="subtitle2" gutterBottom>
              Enter your email and we will send you a link to reset password
            </Typography>

            <Grid item xs={10} md={10} lg={10}>
              <FormControl fullWidth>
                <TextField
                  label="Email"
                  name="email"
                  variant="outlined"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.email ? true : false}
                  helperText={errors.email}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={12} className="item-center">
              <FormButton
                type="submit"
                onClick={submitForm}
                startIcon={isLoading ? <CircularProgress size={20} /> : null}
              >
                Reset Password
              </FormButton>
            </Grid>
          </FormWrapper>
        )}
      </Formik>
    </AuthWrapper>
  );
}

export default ForgetPassword;
