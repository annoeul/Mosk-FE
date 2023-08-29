import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Logo from "../logo"
import { Link } from "react-router-dom"

function TextLinkExample() {
  return (
    <Navbar bg="light">
      <Container>
        <Logo size={30} />
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Link to="login" style={{ margin: "20px" }}>
              login
            </Link>
            <Link to="register">signup</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default TextLinkExample
