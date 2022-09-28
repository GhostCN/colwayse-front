import {Container, Nav, Navbar} from "react-bootstrap";
const Menu=()=>{
  return(
    <Navbar style={{backgroundColor:"#e5e5e5"}} expand="lg">
      <Container>
        <Navbar.Brand href="/" style={{color:'#f25862',fontWeight:"bold",fontSize:24}} className="font-italic">COLWAYSE SHOP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto mr-md-5">
            <Nav.Link href="/" className="ml-4">Home</Nav.Link>
            <Nav.Link href="#allShoes" className="ml-4">Products</Nav.Link>
            <Nav.Link href="#footer" className="ml-4">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Menu
