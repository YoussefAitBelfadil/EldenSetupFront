import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Clavier from './clavier';
import Souris from './souris';
import Stockage from './stockage';

export default function Formper() {
  const [type, setType] = useState("");

  const handleChildSubmit = (data) => {
    console.log("Données soumises :", data);
  };

  return (
    <div>
      <Form.Group controlId="validationCustom02" className='p-2'>
        <Form.Select required defaultValue="" style={{ width: '300px', textAlign: 'center', height: '50px', borderRadius: '5px' }} onChange={(e) => setType(e.target.value)}>
          <option value="" disabled hidden>Type</option>
          <option value="Clavier">Clavier</option>
          <option value="Souris">Souris</option>
          <option value="Stockage">Stockage</option>
        </Form.Select>
      </Form.Group>

      <Row className='m-2 d-grid gap-1' style={{ gridTemplateColumns: "repeat(2, 1fr)", gridGap: "10px" }}>
        {type === "Clavier" && <Clavier onSubmit={handleChildSubmit}/>}
        {type === "Souris" && <Souris onSubmit={handleChildSubmit}/>}
        {type === "Stockage" && <Stockage  onSubmit={handleChildSubmit}/>}
      </Row>
    </div>
  );
}
