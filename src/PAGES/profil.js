import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import ic1 from '../images/icons/conduire.png';
import ic2 from '../images/icons/ecran.png';
import ic3 from '../images/icons/imprimante.png';
import ic4 from '../images/icons/ordinateur.png';
import ic5 from '../images/icons/tablette-graphique.png';
import Formper from "../components/forms/formper"
import Formecran from "../components/forms/formecran"
import Formord from "../components/forms/formOrd"
import Formimpr from "../components/forms/formimpr"
import Formtab from "../components/forms/formtab"


export default function Profil() {
  const [type , setType] = useState()
  const handelClick=(name)=>{
    setType(name)
  }
  
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div style={{height:'100%'}}>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column mt-4 text-center">
            <Nav.Item>
              <Nav.Link eventKey="first">Information</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Ajouter un produit</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}  style={{backgroundColor:"#f4f4f4"}}>
          <Tab.Content>
            <Tab.Pane eventKey="first" className='m-2 h-100' >
            <Form noValidate  validated={validated} onSubmit={handleSubmit} className='d-flex flex-column justify-content-center align-content-center'>
      <Row className='m-2 ' >
        <Form.Group  controlId="validationCustom01" className='p-2  d-flex justify-content-center '>
          <Form.Control required readOnly type="text" placeholder='USERNAME' style={{width:'300px',textAlign: 'center',height:'50px',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom04" className='p-2 d-flex justify-content-center '>
          <Form.Control required readOnly type="text" placeholder="EMAIL" style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}}/>
        </Form.Group>


        <Form.Group  controlId="validationCustom02" className='p-2 d-flex justify-content-center'>
          <Form.Control required type="text" placeholder="MOT DE PASS " style={{width:'300px',textAlign: 'center',height:'50px',borderRadius:'5px'}}/>
        </Form.Group>
        </Row>
     <Button type="submit" className='w-25 h-25 align-center d-flex  '>MODIFIER</Button>
    </Form>
            </Tab.Pane>
            <Tab.Pane eventKey="second" className='d-flex flex-column justify-content-center'>
              <div className='d-flex justify-content-center gap-4 mt-4 mb-5'>
                <div onClick={()=>handelClick("peripherique")} style={{backgroundColor:"gray",width:"100px",height:"100px",borderRadius:'50%', display: 'flex',alignItems:'center',justifyContent:'center'}}><img src={ic1} alt='icon' style={{ width: '60px', }} /></div>
                <div onClick={()=>handelClick("ecran")} style={{backgroundColor:"gray",width:"100px",height:"100px",borderRadius:'50%', display: 'flex',alignItems:'center',justifyContent:'center'}}><img src={ic2} alt='icon' style={{ width: '60px' }} /></div>
                <div onClick={()=>handelClick("imprimante")}  style={{backgroundColor:"gray",width:"100px",height:"100px",borderRadius:'50%', display: 'flex',alignItems:'center',justifyContent:'center'}}><img src={ic3} alt='icon' style={{ width: '60px' }} /></div>
                <div onClick={()=>handelClick("ordinateur")} style={{backgroundColor:"gray",width:"100px",height:"100px",borderRadius:'50%', display: 'flex',alignItems:'center',justifyContent:'center'}}><img src={ic4} alt='icon' style={{ width: '60px' }} /></div>
                <div onClick={()=>handelClick("tablette")} style={{backgroundColor:"gray",width:"100px",height:"100px",borderRadius:'50%', display: 'flex',alignItems:'center',justifyContent:'center'}}><img src={ic5} alt='icon' style={{ width: '60px' }} /></div>
              </div>
              <div className='d-flex justify-content-center'>
                {type === "peripherique" && <Formper />}
                {type === "ecran" && <Formecran />}
                {type === "imprimante" && <Formimpr />}
                {type === "ordinateur" && <Formord />}
                {type === "tablette" && <Formtab />}
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </div>
  );
}
