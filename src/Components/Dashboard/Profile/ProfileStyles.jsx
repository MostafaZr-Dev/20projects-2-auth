import React from "react";
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

export const Wrapper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
}));

export const Header = styled(Typography)(({ theme }) => ({
  color: "#747473",
  fontWeight: "bold",
  fontSize: "1.5rem",
}));

export const FormWrapper = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(3),
}));

export const FormHeader = styled(FormLabel)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  borderBottom: "3px solid #f50057",
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingBottom: theme.spacing(1),
  marginLeft: theme.spacing(1),
  color: "#f50057",
}));

export const FormButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#f50057",
  color: "#fff",
  marginTop: theme.spacing(1),
  padding: theme.spacing(1 , 3),

  "&:hover": {
    backgroundColor: "rgb(245 0 87 / 82%)",
  },
}));
