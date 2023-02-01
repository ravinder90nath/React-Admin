import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Users from "./scenes/users";
import FAQ from "./scenes/faq";

function App() {

  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
          <div className="app">
            <Sidebar />
            <main className="content">
                <Topbar />
                <Routes>
                    <Route path="/" element={<Dashboard />}>Dashboard</Route>
                    <Route path="/users" element={<Users />}>Users</Route>
                    <Route path="/faq" element={<FAQ />}>FAQ</Route>
                </Routes>
            </main>
          </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
