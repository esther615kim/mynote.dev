import { Container, makeStyles, Typography } from "@material-ui/core";
import {
  Bookmark,
  List,
  PhotoCamera,
  Settings,
  TabletMac
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    color: "white",
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.action.selected,
    position: "sticky",
    top: 0,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #ece7e7"
    }
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer"
    }
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "16px",
      color: "#212121"
    }
  },
  text: {
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  }
}));

const Leftbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <List className={classes.icon} />
        <Typography className={classes.text}>Cards</Typography>
      </div>

      <div className={classes.item}>
        <Bookmark className={classes.icon} />
        <Typography className={classes.text}>Notes</Typography>
      </div>

      <div className={classes.item}>
        <Settings className={classes.icon} />
        <Typography className={classes.text}>Settings</Typography>
      </div>
    </Container>
  );
};

export default Leftbar;
