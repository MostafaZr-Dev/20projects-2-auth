import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import { ExpandMore, Person } from "@material-ui/icons";
import { NavLink } from "react-router-dom";

const Wrapper = styled(Paper)(({ theme }) => ({
  height: "100%",
  paddingTop: theme.spacing(3),
  overflowX: "hidden",
}));

const AccordionWrapper = styled(Accordion)({
  boxShadow: "none",
  borderRadius: 0,
  width: "99%",
});

const StyledList = styled(List)(({ theme }) => ({
  paddingRight: theme.spacing(2),
  width: "100%",
}));

const StyledNavLink = styled(NavLink)({
  textDecoration: "none",
  color: "#333",

  "&.active": {
    "& .MuiListItem-root": {
      backgroundColor: "#f50057",
      color: "#fff",
    },

    "& .MuiListItemIcon-root": {
      color: "#fff",
    },
  },
});

function Sidebar() {
  return (
    <Wrapper>
      <AccordionWrapper>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Profile</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <StyledList>
            <StyledNavLink to="/dashboard/profile" activeClassName="active">
              <ListItem button>
                <ListItemIcon>
                  <Person />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItem>
            </StyledNavLink>
          </StyledList>
        </AccordionDetails>
      </AccordionWrapper>
    </Wrapper>
  );
}

export default Sidebar;
