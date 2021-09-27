import { makeStyles } from "@material-ui/core";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { MenuIcon, SearchIcon } from "@mui/material";
import { IconButton } from "@mui/material";
const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: theme.palette.success.light
  },
  logoText: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  }
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appbar} color="primary">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography className={classes.logoText} variant="h6">
          mynote.dev
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
