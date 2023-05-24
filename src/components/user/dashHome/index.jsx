import React from "react"
import { useMode, ColorModeContext } from "../../../theme"
import { CssBaseline, ThemeProvider } from "@mui/material"

function DashHome() {
  const [theme, colorMode] = useMode()
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App" style={{ display: "flex" }}>
          <Sidebar />

          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<DashBoard />} />
              <Route path="/team" element={<Team />} />
              {/* <Route path="/contacts" element={<Contacts />} /> */}
              {/* <Route path="/invoices" element={<Invoices />} /> */}
              {/* <Route path="/bar" element={<Bar />} /> */}
              {/* <Route path="/form" element={<Form />} /> */}
              {/* <Route path="/line" element={<Line />} /> */}
              {/* <Route path="/pie" element={<Pie />} /> */}
              {/* <Route path="/faq" element={<FAQ />} /> */}
              {/* <Route path="/geography" element={<Geography />} /> */}
              {/* <Route path="/calendar" element={<Calendar />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default DashHome
