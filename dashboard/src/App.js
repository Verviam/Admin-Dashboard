import { ColorModeContext, useMode } from "./themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from "./views/global/TopBar";
import SideBar from "./views/global/SideBar";

function App() {
  const [theme, colorMode] = useMode();

  return (<ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <main className="content"><TopBar /></main>
      </div>
    </ThemeProvider>
  </ColorModeContext.Provider>
  );
}

export default App;
