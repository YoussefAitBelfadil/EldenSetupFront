import {Button,Card,Badge} from 'react-bootstrap'
import pc from "../images/ordinateur-portable-hp-dragonfly-g4-96z84et.jpg"
import Count from "./countdown"

export default function Productfull() {
  return (<>
  <div className="position-relative ">
    <Card style={{ width: '15rem' }} className='w-75'>
  
  <div style={{display:'flex'}}>
  
  <Card.Img variant="top" src={pc}  style={{height:'250px'}}/>
  

  <div>
  <Card.Body  style={{textAlign:'justify',padding:'30px 40px'}}>
    <Card.Text >
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </Card.Text>
    <h5> 5000 DH</h5>
    <Count />
    <p >Le téléviseur Samsung 50" Crystal DU7100 UHD 4K transforme votre expérience visuelle avec son processeur Crystal 4K et la technologie HDR10+ pour des couleurs éclatantes et un contraste optimisé. Son design fin sans bordures maximise l'immersion, tandis que Motion Xcelerator assure une fluidité parfaite. Profitez d’un son immersif avec OTS Lite et Q-Symphony. Connectivité avancée : Wi-Fi 5, Bluetooth 5.2, HDMI eARC et AirPlay. Smart TV sous Tizen, il intègre Bixby et SmartThings pour une expérience intuitive et connectée.</p>
    <Button variant="warning">Ajouter au panier</Button>
  </Card.Body>
  </div></div>

  <Badge bg="danger" className="position-absolute top-0 start-0 " style={{ fontSize: "0.75rem", padding: "0.3em 0.6em" ,marginTop: "5px",marginLeft:"5px" }}>1500 DH</Badge>
  <Badge bg="success" className="position-absolute top-0 start-0 " style={{ fontSize: "0.75rem", padding: "0.3em 0.6em" ,marginTop: "28px",marginLeft:"5px" }}>En stock</Badge>
  <Badge bg="info" className="position-absolute top-0 start-0 " style={{ fontSize: "0.75rem", padding: "0.3em 0.6em" ,marginTop: "51px",marginLeft:"5px" }}>Nouveau </Badge>  
</Card>
</div>
</>
  );
}