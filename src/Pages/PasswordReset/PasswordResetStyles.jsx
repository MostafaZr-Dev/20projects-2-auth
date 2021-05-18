import { Box, Button, Grid, Paper } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

export const Wrapper = styled(Grid)({
  width: "100vw",
  height: "100vh",
});

export const CardWrapper = styled(Paper)({
  height: "450px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",

  "& .progress": {
    width: "100%",
    height: "8px",
    borderRadius: "4px 4px 0 0",
  },
});

export const Header = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  marginTop: "-40px",
  marginBottom: theme.spacing(3),

  "& .icon": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f50057",
    color: "#fff",
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    marginBottom: theme.spacing(2),

    "& svg": {
      fontSize: "2rem",
    },
  },

  "& .title": {
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
}));
export const FormWrapper = styled(Grid)(({ theme }) => ({
  "& .item-center": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const FormButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  backgroundColor: "#f50057",
  padding: theme.spacing(2),
  fontWeight: "bold",

  "&:hover": {
    backgroundColor: "rgba(245,0,87,0.75)",
  },
}));
