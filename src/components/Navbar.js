import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  makeStyles,
  alpha,
  Avatar
} from "@material-ui/core";
import { Search, Menu } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: theme.palette.success.light
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  logoBox: {
    display: "flex",
    alignItems: "center"
  },
  logoText: {
    display: "none",
    color: "#212121",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.2),
    borderRadius: theme.shape.borderRadius,
    width: "40%",
    padding: theme.spacing(1)
  },
  input: {
    marginRight: theme.spacing(3)
  }
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appbar} color="primary">
      <Toolbar className={classes.toolbar}>
        <div className={classes.logoBox}>
          <IconButton>
            <Menu />
          </IconButton>
          <Typography className={classes.logoText} variant="h6">
            mynote.dev
          </Typography>
        </div>
        {/* search */}
        <div className={classes.search}>
          <Search />
          <InputBase className={classes.input} placeholder=" search..." />
        </div>
        <Avatar />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
