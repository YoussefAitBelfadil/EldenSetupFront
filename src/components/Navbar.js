import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import search from '../images/recherche.png';
import panier from '../images/ajouter-un-panier.png'
import papier from '../images/papiers.png'
import { Row,Col } from 'react-bootstrap';

export default function Nav() {
  return (
    <Navbar className="bg-white justify-content-center">
    <Row className='justify-content-between'>
        <Col> <h2 style={{ position:'absolute',left:0 }}>RAMSYS</h2> </Col>
        <Col>
      <Row >
        <InputGroup className=' flex-nowrap' >
          <InputGroup.Text id="basic-addon1">
            <DropdownButton id="dropdown-basic-button" title="Dropdown button" style={{ backgroundColor: 'white' }} >
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
          </InputGroup.Text>
          <Form.Control placeholder="Username" aria-label="Username"  aria-describedby="basic-addon1" className='w-100'/>
          <InputGroup id="basic-addon2"> <Button ><img src={search} alt='search icon' style={{ width:30,height:'auto' }}/></Button></InputGroup>
        </InputGroup>
        </Row>
      </Col>
      <Col > 
        <div style={{ position:'absolute',right:0 }}><img src={panier} alt='search icon' style={{ width:30,height:'auto' }}/>
      <img src={papier} alt='search icon' style={{ width:30,height:'auto' }}/></div>
      
      </Col>
      </Row>
    </Navbar>
  );
}


