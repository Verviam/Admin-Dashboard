import { ColorModeContext, useMode } from "./themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import TopBar from "./views/global/TopBar";
import SideBar from "./views/global/SideBar";
import Dashboard from "./views/dashboard"
import Team from "./views/team"
import Invoices from "./views/invoices"
import Contacts from "./views/contacts"
import Bar from "./views/bar"
import Form from "./views/form"
import Line from "./views/line"
import Pie from "./views/pie"
import FAQ from "./views/faq"
import Geography from "./views/geography"
import Calendar from "./views/calendar"
function App() {
  const [theme, colorMode] = useMode();

  return (<ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <SideBar />
        <main className="content"><TopBar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/form" element={<Form />} />
            <Route path="/bar" element={<Bar />} />
            <Route path="/line" element={<Pie />} />
            <Route path="/pie" element={<Line />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/geography" element={<Geography />} />
            <Route path="/calendar" element={<Calendar />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  </ColorModeContext.Provider>
  );
}

export default App;
