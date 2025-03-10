import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function Formimpr(name) {
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
          <Form.Control required readOnly type="text" placeholder="IMPRIMANTE" style={{width:'300px',textAlign: 'center',height:'50px',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Titre" style={{width:'300px',textAlign: 'center',height:'50px',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Marque" style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Fonctions" style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Cartouches d'impression"  style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Vitesse d'impression noir"  style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Vitesse d'impression couleur"  style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Qualité d'impression noire"  style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Qualité d'impression couleur"  style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Écran"  style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Connectivité"  style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Impression recto/verso"  style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Capacité bac papier"  style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Dimensions (l x p x h)"  style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Poids net"  style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
        <Form.Select  style={{width:'300px',textAlign: 'center',height:'50px',borderRadius:'5px'}}>
        <option value="" disabled selected hidden>Photocopieur</option>
        <option>OUI</option>
        <option>NON</option>
        </Form.Select>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
        <Form.Select  style={{width:'300px',textAlign: 'center',height:'50px',borderRadius:'5px'}}>
        <option value="" disabled selected hidden>Câble fourni</option>
        <option>NON</option>
        <option>OUI</option>
        </Form.Select>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Prix " style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Quantité en stock" style={{width:'300px',textAlign: 'center',height:'50px',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Description" style={{width:'300px',textAlign: 'center',height:'50px',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Image"  style={{width:'300px',textAlign: 'center',height:'50px',borderRadius:'5px'}}/>
        </Form.Group>
        
      </Row>
     <Button type="submit" className='ju'>Submit form</Button>
    </Form>
  );
}
