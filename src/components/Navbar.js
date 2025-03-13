import { Row,Col,Button,Form,Navbar,InputGroup,Dropdown,DropdownButton,Offcanvas } from 'react-bootstrap';
import search from '../images/chercher.png';
import rsearch from '../images/recherche.png';
import user from '../images/utilisateur.png'
import { useState } from 'react';
import "../CSS/devis.css"

export default function Navvv(){
  
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <Navbar className="bg-white justify-content-center mt-3">
    <Row className='justify-content-between'>
        <Col> <h2 style={{ position:'absolute',left:0 }}>RAMSYS</h2> </Col>
        <Col>
      <Row >
        <InputGroup className=' flex-nowrap' >
          <InputGroup.Text id="basic-addon1" >
            <DropdownButton id="dropdown-basic-button" title="Dropdown button"  >
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
          </InputGroup.Text>
          <Form.Control placeholder="Chercher d'un produit..." aria-label="Username"  aria-describedby="basic-addon1" style={{width:"500px"}} />
          <InputGroup id="basic-addon2" > <Button style={{backgroundColor:'#129cb8'}}><img src={search} alt='search icon' style={{ width:30,height:'auto',backgroundColor:'#129cb8'}}/></Button></InputGroup>
        </InputGroup>
        </Row>
      </Col>
      <Col > 
        <div style={{ position:'absolute',right:0 }}>
            <img src={user} alt='search icon' style={{ width:30,height:'auto' }}/>
            <Button variant="primary" onClick={handleShow}>
            <img src={rsearch} alt='search icon' style={{ width:30,height:'auto' }}/>
            </Button>
            <Offcanvas show={show} onHide={handleClose} placement="end">
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>PANIER</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    //body
                  </Offcanvas.Body>
                </Offcanvas>
      </div>
      
      </Col>
      </Row>
    </Navbar>
  );
}


