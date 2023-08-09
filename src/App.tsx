import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./routes";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Preloader from "./components/Preloader";
import Layout from "./components/Layout";

function App() {
  const [mode, setMode] = React.useState<boolean>(false);

  const getDesignTokens = (mode: boolean) => ({
    palette: {
      ...(mode
        ? {
            background: {
              default: "#252b48",
            },
            text: {
              primary: "#f5f5dc",
            },
            action: {
              active: "#f5f5dc",
              selected: "#f5f5dc",
              hover: "#f5f5dc",
            },
          }
        : {
            background: {
              default: "#f5f5dc",
            },
            text: {
              primary: "#252b48",
            },
            action: {
              active: "#252b48",
              selected: "#252b48",
              hover: "#252b48",
            },
          }),
    },
  });

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Suspense fallback={<Preloader />}>
          <Layout mode={mode} setMode={setMode}>
            <CssBaseline />
            <Routes>
              {routes.map((route, idx) => {
                return (
                  route.element && (
                    <Route
                      key={idx}
                      path={route.path}
                      element={<route.element />}
                    />
                  )
                );
              })}
            </Routes>
          </Layout>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
