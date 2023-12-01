import './AppRoutes.css';
import {Navbar, Nav, Container} from 'react-bootstrap';
import Logo from './DG.png';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Wordle from './components/Wordle';

function AppRoutes(){
    return (
        <BrowserRouter>
        <div className="App">
         <>
          <Navbar bg="black" variant="dark">
            <Container>
            <Navbar.Brand href=" "><img src={Logo} width="150" height="141" alt="logo" /></Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact Me</Nav.Link>
                <Nav.Link as={Link} to="/wordle">Wordle</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </>
        <div>
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/wordle" element={<Wordle/>}/>
        </Routes>
        </div>
        </div>
        </BrowserRouter>
      );
}

export default AppRoutes;