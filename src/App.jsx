import "./App.css"
import React from "react"
import Router from "./routes/Router"
import { Container } from "@material-ui/core"

function App() {
  return (
    <div className="App">
      <Container style={{ margin: 0, padding: 0 }}>
        <Router />
      </Container>
    </div>
  )
}

export default App
