import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Formpc from '../components/formPC';
import ic1 from '../images/icons/conduire.png';
import ic2 from '../images/icons/ecran.png';
import ic3 from '../images/icons/imprimante.png';
import ic4 from '../images/icons/ordinateur.png';
import ic5 from '../images/icons/tablette-graphique.png';

export default function Profil() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={4}>
          <Nav variant="pills" className="flex-column mt-4 text-center">
            <Nav.Item>
              <Nav.Link eventKey="first">Information</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Ajouter un produit</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={8} className='d-flex flex-column justify-content-center' style={{backgroundColor:"#f4f4f4"}}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              First tab content
            </Tab.Pane>
            <Tab.Pane eventKey="second" className='d-flex flex-column justify-content-center'>
              <div className='d-flex justify-content-center gap-4 mt-4 mb-5'>
                <div style={{backgroundColor:"gray",width:"100px",height:"100px",borderRadius:'50%', display: 'flex',alignItems:'center',justifyContent:'center'}}><img src={ic1} alt='icon' style={{ width: '60px', }} /></div>
                <div style={{backgroundColor:"gray",width:"100px",height:"100px",borderRadius:'50%', display: 'flex',alignItems:'center',justifyContent:'center'}}><img src={ic2} alt='icon' style={{ width: '60px' }} /></div>
                <div style={{backgroundColor:"gray",width:"100px",height:"100px",borderRadius:'50%', display: 'flex',alignItems:'center',justifyContent:'center'}}><img src={ic3} alt='icon' style={{ width: '60px' }} /></div>
                <div style={{backgroundColor:"gray",width:"100px",height:"100px",borderRadius:'50%', display: 'flex',alignItems:'center',justifyContent:'center'}}><img src={ic4} alt='icon' style={{ width: '60px' }} /></div>
                <div style={{backgroundColor:"gray",width:"100px",height:"100px",borderRadius:'50%', display: 'flex',alignItems:'center',justifyContent:'center'}}><img src={ic5} alt='icon' style={{ width: '60px' }} /></div>
              </div>
              <div className='d-flex justify-content-center'>
                <Formpc name="PC" />
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}
