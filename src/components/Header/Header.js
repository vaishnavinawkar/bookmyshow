import './Header.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';
// import Image from 'react-bootstrap/Image';


function Header(){
    return (
        <div>
            <Navbar  variant="dark" expand="lg" style={{background:"rgb(44 45 59)"}}>
                <Container>
                    <Navbar.Brand href="/" style={{color:"whitesmoke"}}>Book<strong style={{color:"red"}}>My</strong>Show</Navbar.Brand>
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search for Movies, Event, Plays,Sports and Activities"
                        className="me-2 "
                        aria-label="Search"
                        style={{width:"30rem",height:"2rem"}}
                        />
                        {/* <Button variant="outline-success">Search</Button> */}
                    </Form>
                    
                    <Navbar.Toggle aria-controls="navbarScroll"/>
                    <Navbar.Collapse id="navbarScroll" className="justify-content-end"  style={{color:"white"}}>
                    <Nav
                        className="my-2 my-lg-0 le-auto"
                        style={{ maxHeight: '100px',color:"white"}}
                        navbarScroll 
                    >
                        <Nav.Link href="/" >Home</Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                        
                         
                        <NavDropdown.Item href="/register">
                            User Registration

                        </NavDropdown.Item>
                        </NavDropdown>
                       
                    </Nav>
                    </Navbar.Collapse>
                    
                </Container>
           </Navbar>

        
          <Container fluid  className="d-flex" style={{background:"rgb(34, 37, 57)",padding:" 0 9rem"}}>
           
            <Nav className="me-auto" >
            <Nav.Link href="Movies">Movies</Nav.Link>
            <Nav.Link href="Stream">Stream</Nav.Link>
            <Nav.Link href="Events">Events</Nav.Link>
            <Nav.Link href="Plays">Plays</Nav.Link>
            <Nav.Link href="Sports">Sports</Nav.Link>
            <Nav.Link href="Activities">Activities</Nav.Link>
            </Nav>
            <Nav className="le-auto">
            <Nav.Link href="#ListYourShow">ListYourShow</Nav.Link>
            <Nav.Link href="#Corporates">Corporates</Nav.Link>
            <Nav.Link href="#Offers">Offers</Nav.Link>
            </Nav>
            </Container>
        
        
   


        </div>
    );
}

export default Header;
