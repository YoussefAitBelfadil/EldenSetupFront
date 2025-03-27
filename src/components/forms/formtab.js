import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function Formtab(name) {
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
          <Form.Control required type="text" placeholder="TABLETTE GRAPHIQUE" style={{width:'300px',textAlign: 'center',height:'50px',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom01" className='p-2 '>
          <Form.Control required type="text" placeholder="Titre" style={{width:'300px',textAlign: 'center',height:'50px',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Marque" style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Taille de la tablette" style={{width:'300px',textAlign: 'center',height:'50px',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Surface active" style={{width:'300px',textAlign: 'center',height:'50px',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Touches/Bouton" style={{width:'300px',textAlign: 'center',height:'50px',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Niveaux de pression" style={{width:'300px',textAlign: 'center',height:'50px',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Connectivité" style={{width:'300px',textAlign: 'center',height:'50px',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Poids" style={{width:'300px',textAlign: 'center',height:'50px',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Résolution" style={{width:'300px',textAlign: 'center',height:'50px',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Stylet" style={{width:'300px',textAlign: 'center',height:'50px',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Vitesse de lecture (stylet)" style={{width:'300px',textAlign: 'center',height:'50px',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Câble fourni" style={{width:'300px',textAlign: 'center',height:'50px',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Batterie" style={{width:'300px',textAlign: 'center',height:'50px',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Durée de fonctionnement/charge" style={{width:'300px',textAlign: 'center',height:'50px',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Ergonomie" style={{width:'300px',textAlign: 'center',height:'50px',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="Saisie multi-touch"  style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}}/>
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
