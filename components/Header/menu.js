import {Container, Nav, Navbar} from "react-bootstrap";
import Link from 'next/link'
const Menu=()=>{
  return(
    <Navbar style={{backgroundColor:"#e5e5e5"}} expand="lg">
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand style={{color:'#f25862',fontWeight:"bold",fontSize:24}} className="font-italic">COLWAYSE STORE</Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto mr-md-5">
            <Link href="/" passHref>
              <Nav.Link className="ml-4">Accueil</Nav.Link>
            </Link>
            <Link href="#allShoes" passHref>
              <Nav.Link  className="ml-4">Products</Nav.Link>
            </Link>
            <Link href="#footer"  passHref>
              <Nav.Link  className="ml-4">Contact</Nav.Link>
            </Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Menu
