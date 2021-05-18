import { styled } from "@material-ui/core/styles";
import { Box, Grid, Paper, Button, Link } from "@material-ui/core";

export const Wrapper = styled(Grid)({
  height: "100vh",
});

export const CardWrapper = styled(Paper)(({ theme, page }) => ({
  width: "100%",
  height: "540px",
  backgroundColor: "transparent",
  boxShadow: "none",
  position: "relative",

  "& .card": {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "100%",
    margin: "0 auto",
    boxShadow: "0 1px 4px 1px rgba(0, 0, 0, 0.3)",
    transition: "all 100ms ease-in-out",

    "&:nth-child(1)": {
      top: 0,
      width: `${100 - 10 * 2}%`,
      zIndex: 1,
    },

    "&:nth-child(2)": {
      top: `${12 * 1}px`,
      width: page === "login" ? `${100 - 10 * 1.5}%` : `${100 - 10 * 1.6}%`,
      zIndex: 2,
      display: page === "forget" ? "none" : "block",
    },

    "&:nth-child(3)": {
      top: `${12 * 2}px`,
      width: `${100 - 10 * 1.1}%`,
      display: page === "register" ? "block" : "none",
      zIndex: 3,

      [theme.breakpoints.down("sm")]: {
        height: "auto",
      },
    },
  },
}));

export const AuthWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  position: "relative",
  borderRadius: "4px",
  paddingTop: "50px",
  display: "flex",
  flexDirection: "column",

  "&.register": {
    backgroundColor: "#f50057",
  },

  "& .auth-header": {
    paddingLeft: "32px",
    borderLeft: "5px solid #f50057",
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: "#f50057",
    marginBottom: theme.spacing(2),

    [theme.breakpoints.down("xs")]: {
      fontSize: "1.3rem",
      paddingLeft: "22px",
    },

    "&.register": {
      color: "#fff",
      borderColor: "#fff",
    },
  },

  "& .toggle-btn": {
    position: "absolute",
    top: "30px",
    right: `-41.5px`,
    background: "#f50057",
    color: "#fff",
    padding: theme.spacing(3),

    "& svg": {
      fontSize: "2rem",
    },

    [theme.breakpoints.down("xs")]: {
      right: `-20px`,
      padding: theme.spacing(2),
      top: "40px",

      "& svg": {
        fontSize: "1.5rem",
      },
    },

    "&:hover": {
      background: "rgb(245 0 87 / 91%)",
    },

    "&.close": {
      right: `20px`,
      backgroundColor: "transparent",
    },
  },
}));

export const FormWrapper = styled(Grid)(({ theme }) => ({
  padding: "20px 32px",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  alignItems: "center",
  flexGrow: 1,

  "& .item-center": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  "&.register": {
    flexDirection: "row",

    "& .MuiInputLabel-outlined": {
      color: "rgb(250 250 250 / 68%)",
    },

    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#fff",
    },

    "& .MuiFormHelperText-root.Mui-error": {
      backgroundColor: "rgb(238 238 238)",
      padding: "6px 10px",
      width: "fit-content",
      borderRadius: "4px",
      marginTop: theme.spacing(1),
    },
  },
}));

export const FormButton = styled(Button)(({ theme }) => ({
  border: "2px solid #c8c7cc",
  minWidth: "150px",
  padding: "10px 8px",
  color: "#c8c7cc",
  fontWeight: "bold",
  marginBottom: theme.spacing(3),

  "&:hover": {
    borderColor: "#f50057",
    backgroundColor: "transparent",
    color: "#f50057",
  },

  "&.register": {
    backgroundColor: "#fff",
    color: "#f50057",
    border: "none",
  },
}));
