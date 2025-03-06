import {Button,Card,Badge} from 'react-bootstrap'
import pc from "../images/ordinateur-portable-hp-dragonfly-g4-96z84et.jpg"

export default function Product() {
  return (<>
  <div className="position-relative d-inline-block">
    <Card style={{ width: '15rem' }} className='d-flex flex-column justify-content-center align-items-center'>
  <Card.Img variant="top" src={pc} className='w-75'/>
  <Card.Body className="text-center">
    <Card.Text className='text-start'>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </Card.Text>
    <h5><span>4000 DH</span> 5000 DH</h5>
    <Button variant="warning">Go somewhere</Button>
  </Card.Body>
  <Badge bg="danger" className="position-absolute top-0 start-0 " style={{ fontSize: "0.75rem", padding: "0.3em 0.6em" ,marginTop: "5px",marginLeft:"5px" }}>1500 DH</Badge>
  <Badge bg="success" className="position-absolute top-0 start-0 " style={{ fontSize: "0.75rem", padding: "0.3em 0.6em" ,marginTop: "28px",marginLeft:"5px" }}>En stock </Badge>  
</Card>
</div>

</>
  );
}
