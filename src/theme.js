import { createTheme } from "@material-ui/core";
import { blue, grey, pink } from "@material-ui/core/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: grey[200]
    },
    secondary: {
      main: blue[200]
    }
  }
});
