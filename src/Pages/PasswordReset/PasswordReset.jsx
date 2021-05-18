import React, { useEffect, useState } from "react";
import {
  Box,
  FormControl,
  Grid,
  LinearProgress,
  TextField,
  Typography,
} from "@material-ui/core";
import { Redirect, useParams } from "react-router-dom";
import { Lock } from "@material-ui/icons";
import { Formik } from "formik";
import * as Yup from "yup";

import {
  Wrapper,
  CardWrapper,
  Header,
  FormWrapper,
  FormButton,
} from "./PasswordResetStyles";
import { useAppState } from "State";
import FlashMessage from "Components/FlashMessage";
import Alert from "Components/Alert";

const ResetSchema = Yup.object().shape({
  newPassword: Yup.string()
    .required("Required!")
    .min(3, "Must be at least 3 characters")
    .required("Required"),
  confirmNewPassword: Yup.string()
    .required("Required!")
    .min(3, "Must be at least 3 characters")
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match"),
});

function PasswordReset() {
  const [isLoading, setIsLoading] = useState(true);
  const [isChangedPassword, setIsChangedPassword] = useState(false);
  const [message, setMessage] = useState({
    open: false,
    text: "",
    type: "success",
  });
  const [alert, setAlert] = useState({
    title: "",
    text: "",
    type: "success",
  });

  const { token } = useParams();
  const { httpService } = useAppState();

  if (!token) {
    return <Redirect to="/" />;
  }

  useEffect(() => {
    httpService
      .post("/user/password-reset/validate", { token })
      .then((response) => {
        if (response.data.success) {
          setIsLoading(false);
        }
      })
      .catch((error) => {
        window.location.replace("/");
        console.log(error);
      });
  }, []);

  const handleChangePassword = (values) => {
    const { newPassword, confirmNewPassword } = values;

    httpService
      .post("/user/password-reset/change", {
        newPassword,
        confirmNewPassword,
        token,
      })
      .then((response) => {
        if (response.data.success) {
          setAlert((prevState) => ({
            ...prevState,
            title: "Success",
            text: response.data.message,
          }));
          setIsChangedPassword(true);
          setTimeout(() => {
            window.location.replace("/");
          }, 3000);
        }
      })
      .catch((error) => {
        setMessage((prevState) => ({
          ...prevState,
          open: true,
          text: error.response.data.message,
          type: "error",
        }));
      });
  };

  const handleCloseMessage = (e) => {
    setMessage({
      open: false,
      text: "",
      type: "success",
    });
  };

  return (
    <Wrapper container direction="row" justify="center" alignItems="center">
      <Grid item xs={12} md={12}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={10} md={10} lg={6}>
            <CardWrapper>
              {isChangedPassword && (
                <Alert
                  title={alert.title}
                  text={alert.text}
                  type={alert.type}
                />
              )}

              {!isChangedPassword && (
                <>
                  {isLoading && (
                    <LinearProgress className="progress" color="secondary" />
                  )}
                  {!isLoading && (
                    <>
                      <Header>
                        <Box className="icon">
                          <Lock />
                        </Box>
                        <Typography className="title">
                          Reset Password
                        </Typography>
                      </Header>

                      <Formik
                        initialValues={{
                          newPassword: "",
                          confirmNewPassword: "",
                        }}
                        validationSchema={ResetSchema}
                        onSubmit={handleChangePassword}
                      >
                        {({
                          values,
                          errors,
                          handleChange,
                          handleBlur,
                          submitForm,
                        }) => (
                          <FormWrapper container justify="center" spacing={3}>
                            <Grid item xs={10} md={10} lg={10}>
                              <FormControl fullWidth>
                                <TextField
                                  label="New Password"
                                  name="newPassword"
                                  variant="outlined"
                                  type="password"
                                  value={values.newPassword}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={errors.newPassword ? true : false}
                                  helperText={errors.newPassword}
                                />
                              </FormControl>
                            </Grid>
                            <Grid item xs={10} md={10} lg={10}>
                              <FormControl fullWidth>
                                <TextField
                                  label="Confirm New Password"
                                  name="confirmNewPassword"
                                  variant="outlined"
                                  type="password"
                                  value={values.confirmNewPassword}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={
                                    errors.confirmNewPassword ? true : false
                                  }
                                  helperText={errors.confirmNewPassword}
                                />
                              </FormControl>
                            </Grid>
                            <Grid item xs={10} md={12} className="item-center">
                              <FormButton type="submit" onClick={submitForm}>
                                Reset Password
                              </FormButton>
                            </Grid>
                          </FormWrapper>
                        )}
                      </Formik>
                    </>
                  )}
                </>
              )}
            </CardWrapper>
          </Grid>
        </Grid>
      </Grid>
      <FlashMessage
        open={message.open}
        onClose={handleCloseMessage}
        message={message}
      />
    </Wrapper>
  );
}

export default PasswordReset;
