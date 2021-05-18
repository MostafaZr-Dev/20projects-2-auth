import React from "react";
import {
  Grid,
  Typography,
  IconButton,
  FormControl,
  TextField,
  Tooltip,
  CircularProgress,
} from "@material-ui/core";
import { PersonAdd } from "@material-ui/icons";
import { Formik } from "formik";
import * as Yup from "yup";

import { AuthWrapper, FormWrapper, FormButton } from "../../AuthStyles";
import { ForgetPassword } from "./LoginStyles";

const LoginSchema = Yup.object().shape({
  email: Yup.string().required("Required!").email("Invalid email!"),
  password: Yup.string()
    .required("Required!")
    .min(3, "Must be at least 3 characters"),
});

function Login({ show, isLoading, onToggle, onSubmit, onForgetClick }) {
  return (
    <AuthWrapper show={show}>
      <Typography className="auth-header">LOGIN</Typography>
      {show && (
        <Tooltip title="Register" aria-label="register" placement="top">
          <IconButton className="toggle-btn" onClick={onToggle}>
            <PersonAdd />
          </IconButton>
        </Tooltip>
      )}
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={onSubmit}
      >
        {({ values, errors, handleChange, handleBlur, submitForm }) => (
          <FormWrapper container spacing={1}>
            <Grid item xs={12} md={12} lg={12}>
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
            <Grid item xs={12} md={12} lg={12}>
              <FormControl fullWidth>
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.password ? true : false}
                  helperText={errors.password}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={12} lg={12} className="item-center">
              <FormButton
                type="submit"
                onClick={submitForm}
                startIcon={
                  isLoading ? (
                    <CircularProgress color="secondary" size={20} />
                  ) : null
                }
              >
                Login
              </FormButton>
            </Grid>
            <Grid item xs={12} md={12} lg={12} className="item-center">
              <ForgetPassword onClick={onForgetClick}>
                Forgot your password?
              </ForgetPassword>
            </Grid>
          </FormWrapper>
        )}
      </Formik>
    </AuthWrapper>
  );
}

export default Login;
