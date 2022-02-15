import Grid from "@material-ui/core/Grid";
import Header from "./components/parts/Header";
import SideNav from "./components/parts/SideNav";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { HashRouter as Router } from "react-router-dom";
import RouterSwitch from "./components/parts/RouterSwitch";
import Footer from "./components/parts/Footer";
import { useSelector } from "react-redux";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00A19D",
    },
    secondary: {
      main: "#d73232",
    },
  },
  overrides: {
    MuiListItem: {
      root: {
        "&$selected": {
          backgroundColor: "#09090921",
          "&:hover": {
            backgroundColor: "#09090921",
          },
        },
      },
      button: {
        "&:hover": {
          backgroundColor: "#09090921",
        },
      },
    },
  },
});
//
const useStyles = makeStyles({
  drawerMargin: {
    marginLeft: "230px",
  },
});
function App() {
  const [open, setOpen] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const loggedIn = useSelector((state) => state.entities.auth.isLoggedIn);

  const classes = useStyles();

  const isMobile = useMediaQuery(theme.breakpoints.down("xs"), {
    noSsr: true,
  });

  const isTablet = useMediaQuery(theme.breakpoints.down("sm"), {
    noSsr: true,
  });
  useEffect(() => {
    if (isMobile || isTablet) {
      setOpen(false);
    }
    setLoaded(true);
  }, [isMobile, isTablet]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return loaded ? (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid style={{ backgroundColor: "#f8f8f8" }} container>
          <Grid item>
            {loggedIn && (
              <SideNav
                open={open}
                isMobile={isMobile}
                handleDrawerClose={handleDrawerClose}
              />
            )}
          </Grid>
          <Grid
            style={{ width: "100%" }}
            className={
              open && !isMobile && loggedIn ? classes.drawerMargin : ""
            }
            item
          >
            <Grid item lg={12}>
              <Header open={open} handleDrawerOpen={handleDrawerOpen} />
            </Grid>
            <Grid item lg={12}>
              <div style={{ minHeight: "87vh", paddingTop: "1px" }}>
                <RouterSwitch />
              </div>
            </Grid>
            <Grid style={{ marginBottom: ".2em" }} item lg={12}>
              <Footer />
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Router>
  ) : (
    ""
  );
}

export default App;
