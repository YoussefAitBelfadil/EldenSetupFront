import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function Formpc(name) {
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
    <Form noValidate validated={validated} onSubmit={handleSubmit} >
      <Row className='m-2 d-flex flex-column '>
        <Form.Group  controlId="validationCustom01" className='p-2 '>
          <Form.Control required type="text" placeholder={`Le nom du ${name}`} style={{width:'400px',textAlign: 'center',height:'50px',borderRadius:'10px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Catégorie" style={{width:'400px',textAlign: 'center',height:'50px',borderRadius:'10px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Marque" style={{width:'400px',height:'50px',textAlign: 'center',borderRadius:'10px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Modèle"  style={{width:'400px',height:'50px',textAlign: 'center',borderRadius:'10px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Prix " style={{width:'400px',height:'50px',textAlign: 'center',borderRadius:'10px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Quantité en stock" style={{width:'400px',textAlign: 'center',height:'50px',borderRadius:'10px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Description" style={{width:'400px',textAlign: 'center',height:'50px',borderRadius:'10px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Image"  style={{width:'400px',textAlign: 'center',height:'50px',borderRadius:'10px'}}/>
        </Form.Group>
        
      </Row>
     <Button type="submit" className='ju'>Submit form</Button>
    </Form>
  );
}
