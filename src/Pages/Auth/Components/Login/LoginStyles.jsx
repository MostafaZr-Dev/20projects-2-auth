import { styled } from "@material-ui/core/styles";
import { Link } from "@material-ui/core";

export const ForgetPassword = styled(Link)({
  color: "#c8c7cc",

  "&:hover": {
    color: "#222",
    textDecoration: "none",
    cursor: "pointer",
  },
});
