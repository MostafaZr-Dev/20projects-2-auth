import React, { useState } from "react";
import {
  Button,
  CircularProgress,
  FormControl,
  FormLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import { Formik } from "formik";
import * as Yup from "yup";

import { useAppState } from "State";
import {
  Wrapper,
  Header,
  FormWrapper,
  FormHeader,
  FormButton,
} from "./ProfileStyles";

const InfoSchema = Yup.object().shape({
  firstname: Yup.string().required("Required!"),
  lastname: Yup.string().required("Required!"),
  phone: Yup.string()
    .required("Required!")
    .matches(/(0|\+98|0098)?9[0123][0-9]{8}/, "Your phone number wrong!"),
  password: Yup.string().min(3, "Must be at least 3 characters"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

function Profile() {
  const [isLoading, setIsLoading] = useState(false);

  const { state } = useAppState();

  const { user } = state;

  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <Wrapper>
          <Header className="header">Profile</Header>
          <Formik
            initialValues={{
              email: user.email,
              firstname: user.firstName,
              lastname: user.lastName,
              phone: user.phone,
              password: "",
              confirmPassword: "",
            }}
            validationSchema={InfoSchema}
            onSubmit={(values) => console.log(values)}
          >
            {({ values, errors, handleChange, handleBlur, submitForm }) => (
              <FormWrapper container spacing={2}>
                <FormHeader>Information</FormHeader>

                <Grid item xs={12} md={12} lg={12}>
                  <FormControl fullWidth>
                    <TextField
                      label="FirstName"
                      variant="outlined"
                      name="firstname"
                      // value={values.firstname}
                      value={values.firstname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.firstname ? true : false}
                      helperText={errors.firstname}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <FormControl fullWidth>
                    <TextField
                      label="Last Name"
                      variant="outlined"
                      name="lastname"
                      value={values.lastname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.lastname ? true : false}
                      helperText={errors.lastname}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <FormControl fullWidth>
                    <TextField
                      disabled
                      label="Email"
                      variant="outlined"
                      value={values.email}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <FormControl fullWidth>
                    <TextField
                      label="Phone"
                      variant="outlined"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.phone ? true : false}
                      helperText={errors.phone}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <FormControl fullWidth>
                    <TextField
                      label="Password"
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
                <Grid item xs={12} md={12} lg={12}>
                  <FormControl fullWidth>
                    <TextField
                      label="Confirm Password"
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
                    Edit
                  </FormButton>
                </Grid>
              </FormWrapper>
            )}
          </Formik>
        </Wrapper>
      </Grid>
    </Grid>
  );
}

export default Profile;
