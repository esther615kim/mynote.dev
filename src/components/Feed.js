import { Container, makeStyles, Grid } from "@material-ui/core";
import Post from "./Post";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10)
  }
}));

const Feed = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid container spacing={2}>
        <Grid sm={6} item>
          <Post
            title="Choose the perfect design"
            img="https://i.ytimg.com/vi/kM9ASKAni_s/maxresdefault.jpg"
          />
        </Grid>
        <Grid sm={6} item>
          <Post
            title="Travel Guide to Manhattan"
            img="https://images.pexels.com/photos/7078467/pexels-photo-7078467.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          />
          ;
        </Grid>
      </Grid>
    </Container>
  );
};

export default Feed;
