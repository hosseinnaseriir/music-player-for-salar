import { Grid } from "@mui/material";
import React from "react";
import Header from "./../Header/index";
import SideBar from "./../SideBar/index";

function Layout({ children }) {
  return (
    <>
      <Header/>
      <Grid container>
        <Grid item xs={4}>
          <SideBar />
        </Grid>
        <Grid item xs={8}>
          {children}
        </Grid>
      </Grid>
    </>
  );
}

export default Layout;
