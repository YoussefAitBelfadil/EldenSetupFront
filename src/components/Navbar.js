import { Row,Col,Button,Form,Navbar,InputGroup,Offcanvas } from 'react-bootstrap';
import search from '../images/chercher.png';
import panier from '../images/ajouter-un-panier.png'
import rsearch from '../images/recherche.png';
import logo from '../images/logo.png'
import user from '../images/utilisateur.png'
import { useState } from 'react';
import "../CSS/devis.css"
import { Link } from 'react-router-dom';

export default function Navvv(){
  
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <Navbar className="bg-white justify-content-around  mt-3">
    <Row className='d-flex justify-content-between'>
        <Col> <img src={logo} alt='logo' style={{width:'100px'}} /> </Col>
      <Col>
          <Row >
            <InputGroup className=' flex-nowrap' >
              <Form.Select aria-label="Default select example" placeholder='hello'>
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <Form.Control placeholder="Chercher d'un produit..." aria-label="Username"  aria-describedby="basic-addon1" style={{width:"500px"}} />
              <InputGroup id="basic-addon2" > 
                <Button style={{backgroundColor:'#129cb8'}}><img src={search} alt='search icon' style={{ width:30,height:'auto',backgroundColor:'#129cb8'}}/></Button>
              </InputGroup>
            </InputGroup>
          </Row>
      </Col>
      <Col > 
        <div style={{ position:'absolute',right:0 }}>
        <Link>
          <img src={user} alt='search icon' style={{ width:30,height:'auto' }}/>
        </Link>
            
            <img src={rsearch} alt='search icon' style={{ width:30,height:'auto' }}/>
            <Button variant="primary" onClick={handleShow}>
            <img src={panier} alt='search icon' style={{ width:30,height:'auto' }}/>
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


