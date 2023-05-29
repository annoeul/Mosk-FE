// /* eslint-disable no-unused-vars */
import { ColorModeContext, useMode } from "../../theme"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { Route, Routes, Outlet } from "react-router"
import Sidebar from "../../components/global/Sidebar"
import Topbar from "../../components/global/Topbar"
import SetMenu from "../../components/dashboard/setMenu"

function DashPage() {
  const [theme, colorMode] = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div style={{ display: "flex" }}>
          <Sidebar />
          {/* <main className="content"> */}
          <Topbar />
          <Outlet />
          {/* </main> */}
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default DashPage
