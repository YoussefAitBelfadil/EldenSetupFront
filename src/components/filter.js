import { Row,Col } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import Badge from 'react-bootstrap/Badge';
import DropdownButton from 'react-bootstrap/DropdownButton';
 

export default function Filter() {
    const images = Array.from({ length: 47 }, (_, i) => require(`../images/mark/${i + 1}.jpg`));
    return (
        <Row >
        
            <Col>
            <DropdownButton id="dropdown-basic-button" title="Main Menu">
                <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
                <Dropdown drop="end">
                    <Dropdown.Toggle as="div" className="dropdown-item">More Options </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/sub-action-1">Sub Action 1</Dropdown.Item>
                            <Dropdown.Item href="#/sub-action-2">Sub Action 2</Dropdown.Item>
                        </Dropdown.Menu>
                </Dropdown>
            </DropdownButton>
            </Col>
            
            <Col>
      <DropdownButton id="dropdown-basic-button"  title="Dropdown" >
          <div className="d-grid gap-1" style={{gridTemplateColumns: "repeat(10, 1fr)",gridGap: "5px",}}>
            {images.map((img, index) => (
              <div key={index} className="p-1">
                <img src={img} alt={`img-${index}`} style={{ width: "85px",padding:"3px",margin:"2px",border: "1px solid #dbdbdb" }} />
              </div>))}
          </div>
      </DropdownButton>
    </Col>

            <Col>
                <div className="position-relative d-inline-block">
                    <DropdownButton id="dropdown-basic-button" title="Meilleures ventes">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
                    <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle" style={{ fontSize: "0.75rem", padding: "0.3em 0.6em" }}>HOT</Badge>
                </div>
            </Col>

            <Col>
                <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
            </Col>

            <Col>
            <div className="position-relative d-inline-block">
                <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
                <Badge bg="info" className="position-absolute top-0 start-100 translate-middle" style={{ fontSize: "0.75rem", padding: "0.3em 0.6em" }}>NEW</Badge>
            </div>
            </Col>

            <Col>
            <div className="position-relative d-inline-block">
                <a href='#'>Demander un devis</a>
                <Badge bg="success" className="position-absolute top-0 start-100 translate-middle" style={{ fontSize: "0.75rem", padding: "0.3em 0.6em" }}>FREE</Badge>
            </div>
            </Col>

            <Col>
            <div className="position-relative d-inline-block">
                <a href='#'>Carte cadeax</a>
                <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle" style={{ fontSize: "0.75rem", padding: "0.3em 0.6em" }}>NEW</Badge>
            </div>
            </Col>
        </Row>
    )}