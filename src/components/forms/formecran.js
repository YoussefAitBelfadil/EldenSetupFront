import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function Formecran(name) {
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
      <Row className='m-2   d-grid gap-1 ' style={{gridTemplateColumns: "repeat(3, 2fr)",gridGap: "10px",}}>
        <Form.Group  controlId="validationCustom01" className='p-2 '>
          <Form.Control required readOnly type="text" placeholder='ECRAN / MONITEUR' style={{width:'300px',textAlign: 'center',height:'50px',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom04" className='p-2 '>
          <Form.Control required type="text" placeholder="Titre" style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}}/>
        </Form.Group>


        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Taille de l'écran " style={{width:'300px',textAlign: 'center',height:'50px',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Surface active" style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Luminosité"  style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Résolution optimale " style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Temps de réponse" style={{width:'300px',textAlign: 'center',height:'50px',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Connectivité" style={{width:'300px',textAlign: 'center',height:'50px',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Dimensions (l x p x h) en mm" style={{width:'300px',textAlign: 'center',height:'50px',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Poids net en kg" style={{width:'300px',textAlign: 'center',height:'50px',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Consommation normale" style={{width:'300px',textAlign: 'center',height:'50px',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Description" style={{width:'300px',textAlign: 'center',height:'50px',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Courbure de l'écran" style={{width:'300px',textAlign: 'center',height:'50px',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom04" className='p-2 '>
          <Form.Control required type="text" placeholder="Marque" style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Prix " style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Quantité en stock" style={{width:'300px',textAlign: 'center',height:'50px',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Image"  style={{width:'300px',textAlign: 'center',height:'50px',borderRadius:'5px'}}/>
        </Form.Group>
        
      </Row>
     <Button type="submit" className='ju'>Submit form</Button>
    </Form>
  );
}
