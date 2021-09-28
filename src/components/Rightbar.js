import {
  Link,
  Container,
  makeStyles,
  Typography,
  Divider
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: 0
  },
  title: {
    fontSize: 15,
    fontWeight: 700,
    color: "#212121"
  },
  link: {
    marginRight: theme.spacing(2),
    color: theme.palette.success.main,
    fontSize: 14
  }
}));

const Rightbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography className={classes.title} gutterBottom>
        Keywords
      </Typography>
      <Link href="#" className={classes.link} variant="body2">
        #ES6
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        #React
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        #TypeScript
      </Link>
      <Divider flexItem style={{ marginBottom: 5 }} />
      <Link href="#" className={classes.link} variant="body2">
        #SCSS
      </Link>
    </Container>
  );
};

export default Rightbar;
