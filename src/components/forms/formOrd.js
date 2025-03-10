import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function Formord(name) {
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

        <Form.Group  controlId="validationCustom02" className='p-2 '>
          <Form.Control required type="text" placeholder="ORDINATEUR" readOnly style={{width:'300px',textAlign: 'center',height:'50px',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom04" className='p-2 '>
          <Form.Control required type="text" placeholder="Titre" style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom02" className='p-2 '>
        <Form.Select placeholder="Sous-catégories" style={{width:'300px',textAlign: 'center',height:'50px',borderRadius:'5px'}}>
        <option value="" disabled selected hidden>Sous-catégories</option>
        <option>PC portable</option>
        <option>PC portable gamer</option>
        <option>PC de bureau</option>
        </Form.Select>
        </Form.Group>
        <Form.Group  controlId="validationCustom04" className='p-2 '>
          <Form.Control required type="text" placeholder="Marque" style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom06" className='p-2 '>
          <Form.Control required type="text" placeholder="Processeur"  style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom07" className='p-2 '>
          <Form.Control required type="text" placeholder="Mémoire vive(RAM)"  style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom08" className='p-2 '>
          <Form.Control required type="text" placeholder="Taille du disque dur"  style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom09" className='p-2 '>
          <Form.Control required type="text" placeholder="Carte graphique"  style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom10" className='p-2 '>
          <Form.Control required type="text" placeholder="Poids en kg"  style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom11" className='p-2 '>
          <Form.Control required type="text" placeholder="Taille de l'écran"  style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom12" className='p-2 '>
          <Form.Control required type="text" placeholder="Couleur produit"  style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom13" className='p-2 '>
          <Form.Control required type="text" placeholder="Dimensions (l x p x h) en mm"  style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom14" className='p-2 '>
          <Form.Control required type="text" placeholder="Type de batterie / autonomie"  style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom15" className='p-2 '>
          <Form.Control required type="text" placeholder="Système d'exploitation"  style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}}/>
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
