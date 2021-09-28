import React from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import Leftbar from "./components/Leftbar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import { Container, Grid } from "@material-ui/core";

export default function Main() {
  return (
    <>
      <Container />
      <Navbar />
      <Grid container>
        <Grid item sm={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7}>
          <Feed />
        </Grid>
        <Grid item sm={3}>
          <Rightbar />
        </Grid>
      </Grid>
    </>
  );
}
