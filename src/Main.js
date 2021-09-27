import React from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import Leftbar from "./components/Leftbar";
import { Container, Grid } from "@material-ui/core";

export default function Main() {
  return (
    <>
      <Container />
      <Navbar />
      <Grid container spacing={1}>
        <Grid item sm={3}>
          <Leftbar />
        </Grid>
        <Grid item sm={7}></Grid>
        <Grid item sm={2}></Grid>
      </Grid>
    </>
  );
}
