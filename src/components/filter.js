import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import {Col } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import "../CSS/filtercss.css"

export default function Filterr() {
    const images = Array.from({ length: 47 }, (_, i) => require(`../images/mark/${i + 1}.jpg`));

  return (
    <div style={{ width: "100%", borderTop: "1px solid grey",marginTop:"15px"}}>
    <Navbar expand="lg" className=" bg-white ">
      <Container >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="w-100 justify-content-center">
          <Col md={2} className='p-2' style={{ borderRight: "1px solid grey" }}>
          <NavDropdown  id="dropdown-basic-button" title="Main Menu" >
                <NavDropdown.Item href="#/action-1">Action 1</NavDropdown.Item>
                <NavDropdown.Item href="#/action-2">Action 2</NavDropdown.Item>
                <Dropdown drop="end">
                    <Dropdown.Toggle as="div" className="dropdown-item">More Options </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <NavDropdown.Item href="#/sub-action-1">Sub Action 1</NavDropdown.Item>
                            <NavDropdown.Item href="#/sub-action-2">Sub Action 2</NavDropdown.Item>
                        </Dropdown.Menu>
                </Dropdown>
            </NavDropdown>
        </Col>

            <Col md={2} className='p-2' style={{ borderRight: "1px solid grey" }}>
            <NavDropdown  id="dropdown-basic-button"  title="Dropdown" >
                <div className="d-grid gap-1" style={{gridTemplateColumns: "repeat(10, 1fr)",gridGap: "5px",}}>
                    {images.map((img, index) => (
                    <div key={index} className="p-1">
                        <img src={img} alt={`img-${index}`} style={{ width: "85px",padding:"3px",margin:"2px",border: "1px solid #dbdbdb" }} />
                    </div>))}
                </div>
            </NavDropdown>
            </Col>

            <Col md={2} className='p-2' style={{ borderRight: "1px solid grey" }}>               
            <div className="position-relative d-inline-block">
                <NavDropdown id="dropdown-basic-button" title="Meilleures ventes">
                    <NavDropdown.Item href="#/action-1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#/action-2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#/action-3">Something else</NavDropdown.Item>
                </NavDropdown>
                <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle" style={{ fontSize: "0.75rem", padding: "0.3em 0.6em" }}>HOT</Badge>
            </div>
            </Col> 

           <Col md={2} className='p-2' style={{ borderRight: "1px solid grey" }}>           
            <NavDropdown id="dropdown-basic-button" title="Dropdown button">
                <NavDropdown.Item href="#/action-1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#/action-2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#/action-3">Something else</NavDropdown.Item>
            </NavDropdown>
            </Col> 

            <Col md={2} className='p-2' style={{ borderRight: "1px solid grey" }}>
                <div className="position-relative d-inline-block">
                    <NavDropdown id="dropdown-basic-button" title="Dropdown button">
                    <NavDropdown.Item href="#/action-1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#/action-2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#/action-3">Something else</NavDropdown.Item>
                    </NavDropdown>
                    <Badge bg="info" className="position-absolute top-0 start-100 translate-middle" style={{ fontSize: "0.75rem", padding: "0.3em 0.6em" }}>NEW</Badge>
                </div>
            </Col>

            <Col md={2} className='p-2' >
    <div className="position-relative d-inline-block">
        <a href="#" style={{ textDecoration: "none", color: "black" }}>
            <NavDropdown id="dropdown-basic-button" title="Demander un devis"  style={{ pointerEvents: "none" }}></NavDropdown>
        </a>
        <Badge bg="success" className="position-absolute top-0 start-100 translate-middle mb-3" style={{ fontSize: "0.75rem", padding: "0.4em 0.6em", margin: '0px 10px' }}>FREE </Badge>
    </div>
</Col>
</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}
