import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import RegistrationProgressBar from './RegProgBar/RegistrationProgressBar';

const NavBar=()=> {
  return (
    <>
     
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home"><h1>ISKCON Haldia Devotees Database</h1></Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Connections</Nav.Link>
            <Nav.Link href="#pricing">Contributions</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
      {/* <RegistrationProgressBar value={100/6}/> */}
    </>
  );
}

export default NavBar;