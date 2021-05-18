import React, { useCallback, useState } from "react";
import { Grid, Paper } from "@material-ui/core";

import { Wrapper, CardWrapper } from "./AuthStyles";
import Login from "./Components/Login";
import Register from "./Components/Register";
import ForgetPassword from "./Components/ForgetPassword";
import FlashMessage from "Components/FlashMessage";
import { useAppState } from "State";
import { useHistory, useLocation } from "react-router";

function Auth() {
  console.log("auth");
  const [page, setPage] = useState("login");
  const [message, setMessage] = useState({
    open: false,
    type: "success",
    text: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const { httpService, dispatch } = useAppState();

  const history = useHistory();
  const location = useLocation();

  const handleToggleClick = useCallback((page) => {
    setPage(page);
  }, []);

  const handleLoginRequest = (values) => {
    const { email, password } = values;
    setIsLoading(true);
    httpService
      .post("/user/auth", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.success) {
          const { token } = response.data;

          localStorage.setItem("token", token);

          setMessage((prevState) => ({
            ...prevState,
            open: true,
            text: response.data.message,
          }));
          setIsLoading(false);
          setTimeout(() => {
            // window.location.replace("/dashboard");
            dispatch({
              type: "SET_USER",
              payload: {
                isAuthenticate: true,
                user: response.data.user,
              },
            });
          }, 2000);
        }
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        setMessage((prevState) => ({
          ...prevState,
          open: true,
          text: error.response.data.message,
          type: "error",
        }));
      });
  };

  const handleRegisterRequest = (values) => {
    const { firstname, lastname, email, phone, password, confirmPassword } =
      values;
    setIsLoading(true);
    httpService
      .post("/user/create", {
        firstname,
        lastname,
        email,
        phone,
        password,
        confirmPassword,
      })
      .then((response) => {
        console.log(response);
        setIsLoading(false);
        setMessage((prevState) => ({
          ...prevState,
          open: true,
          text: response.data.message,
        }));

        setPage("login");
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);

        setMessage((prevState) => ({
          ...prevState,
          open: true,
          text: error.response.data.message,
          type: "error",
        }));
      });
  };

  const handleForgetPassword = (values) => {
    const { email } = values;

    setIsLoading(true);

    httpService
      .post("/user/forgot-password", { email })
      .then((response) => {
        if (response.data.success) {
          setIsLoading(false);

          setMessage((prevState) => ({
            ...prevState,
            open: true,
            text: response.data.message,
          }));
        }
      })
      .catch((error) => {
        setIsLoading(false);

        setMessage((prevState) => ({
          ...prevState,
          open: true,
          text: error.response.data.message,
          type: "error",
        }));
        console.log(error, error.response);
      });
  };

  const handleCloseMessage = () => {
    setMessage({
      open: false,
      type: "success",
      text: "",
    });
  };

  return (
    <Wrapper container direction="row" justify="center" alignItems="center">
      <FlashMessage
        open={message.open}
        onClose={handleCloseMessage}
        message={message}
      />
      <Grid item xs={12} sm={12} md={8} lg={6}>
        <CardWrapper page={page}>
          <Paper className="card">
            <ForgetPassword
              show={page === "forget" ? 1 : null}
              onToggle={() => {
                handleToggleClick("login");
              }}
              onSubmit={handleForgetPassword}
              isLoading={isLoading}
            />
          </Paper>
          <Paper className="card">
            <Login
              show={page === "login" ? 1 : null}
              onToggle={() => {
                handleToggleClick("register");
              }}
              onSubmit={handleLoginRequest}
              onForgetClick={() => {
                handleToggleClick("forget");
              }}
              isLoading={isLoading}
            />
          </Paper>
          <Paper className="card">
            {page === "register" && (
              <Register
                show={page === "register" ? 1 : null}
                onToggle={() => {
                  handleToggleClick("login");
                }}
                onSubmit={handleRegisterRequest}
                isLoading={isLoading}
              />
            )}
          </Paper>
        </CardWrapper>
      </Grid>
    </Wrapper>
  );
}

export default Auth;
