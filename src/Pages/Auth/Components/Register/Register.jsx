import React from "react";
import {
  Grid,
  Typography,
  IconButton,
  FormControl,
  TextField,
  CircularProgress,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { Formik } from "formik";
import * as Yup from "yup";

import { AuthWrapper, FormWrapper, FormButton } from "../../AuthStyles";

const RegisterSchema = Yup.object().shape({
  firstname: Yup.string().required("Required!"),
  lastname: Yup.string().required("Required!"),
  phone: Yup.string()
    .required("Required!")
    .matches(/(0|\+98|0098)?9[0123][0-9]{8}/, "Your phone number wrong!"),
  email: Yup.string().email("Invalid email!").required("Required!"),
  password: Yup.string()
    .required("Required")
    .min(3, "Must be at least 3 characters"),
  confirmPassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

function Register({ show, isLoading, onToggle, onSubmit }) {
  return (
    <AuthWrapper className="register" show={show}>
      <Typography className="auth-header register">Register</Typography>
      <IconButton className="toggle-btn close" onClick={onToggle}>
        <Close fontSize="large" />
      </IconButton>
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          phone: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={RegisterSchema}
        onSubmit={onSubmit}
      >
        {({ values, errors, handleChange, handleBlur, submitForm }) => (
          <FormWrapper container spacing={2} className="register">
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <TextField
                  label="First Name"
                  name="firstname"
                  variant="outlined"
                  value={values.firstname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.firstname ? true : false}
                  helperText={errors.firstname}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <TextField
                  label="Last Name"
                  name="lastname"
                  variant="outlined"
                  value={values.lastname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.lastname ? true : false}
                  helperText={errors.lastname}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <TextField
                  id="phone-number"
                  label="Phone Number (IR-Format)"
                  name="phone"
                  variant="outlined"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.phone ? true : false}
                  helperText={errors.phone}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
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
            <Grid item xs={12} md={6}>
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
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <TextField
                  label="Confirm Password"
                  type="password"
                  variant="outlined"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.confirmPassword ? true : false}
                  helperText={errors.confirmPassword}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={12} className="item-center">
              <FormButton
                type="submit"
                className="register"
                onClick={submitForm}
                startIcon={isLoading ? <CircularProgress size={20} /> : null}
              >
                Register
              </FormButton>
            </Grid>
          </FormWrapper>
        )}
      </Formik>
    </AuthWrapper>
  );
}

export default Register;
