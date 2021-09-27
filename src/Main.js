import React, { useState } from "react";
import "./styles.css";
import {
  makeStyles, //스타일링용
  Checkbox,
  Button,
  ThemeProvider,
  Typography,
  createMuiTheme,
  TextField,
  AppBar,
  Toolbar,
  Grid,
  Paper,
  ButtonGroup,
  Container,
  FormControlLabel
} from "@material-ui/core";

import { deepPurple, brown, blue } from "@material-ui/core/colors";
//커스텀
const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 30
    },
    h5: {
      fontSize: 20,
      color: "#212121",
      marginBottom: 15
    }
  },
  palette: {
    primary: {
      main: deepPurple[200]
    },
    secondary: {
      main: brown[300]
    }
  }
});
//스타일링
const useStyles = makeStyles({
  btn: {
    // background: "linear-gradient(45deg, #333,#999)",
    background: "linear-gradient(45deg, #FE6B8b,#ff8353)",
    border: 0,
    borderRadius: 5,
    color: "white",
    margin: 5,
    padding: "10px 30px"
  },
  btnSmall: {
    background: "linear-gradient(45deg, #333,#999)",
    border: 0,
    borderRadius: 5,
    color: "white",
    margin: 5,
    padding: "10px 15px"
  }
});

export default function Main() {
  return (
    <>
      <h1>메인입니당</h1>
    </>
  );
}
