import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function Stockage({ onSubmit }) {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({model: '',category: '',title: '',brand: '',price: '',stock: '',description: '',image: ''});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData,[name]: value});
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === false) {
      setValidated(true);
    } else {
      onSubmit(formData); // Pass the data to the parent component
    }
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className='m-2 d-grid gap-1' style={{ gridTemplateColumns: "repeat(3, 1fr)", gridGap: "10px" }}>
        
        <Form.Group controlId="model" className='p-2'>
          <Form.Control required style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}} type="text" placeholder="Stockage" name="model" value={formData.model} onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="category" className='p-2'>
          <Form.Select required  style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}} name="category" value={formData.category} onChange={handleChange}>
            <option value="" disabled hidden>Sous-catégories</option>
            <option>Disque dur portable</option>
            <option>Disque dur interne</option>
            <option>Clé USB</option>
            <option>Carte mémoire</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="title" className='p-2'>
          <Form.Control required style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}} type="text" placeholder="Titre" name="title" value={formData.title} onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="brand" className='p-2'>
          <Form.Control required style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}} type="text" placeholder="Marque" name="brand" value={formData.brand} onChange={handleChange}/>
        </Form.Group>

        <Form.Group controlId="price" className='p-2'>
          <Form.Control required style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}} type="text"  placeholder="Prix" name="price" value={formData.price} onChange={handleChange}/>
        </Form.Group>

        <Form.Group controlId="stock" className='p-2'>
          <Form.Control required style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}} type="text" placeholder="Quantité en stock" name="stock" value={formData.stock} onChange={handleChange}/>
        </Form.Group>

        <Form.Group controlId="description" className='p-2'>
          <Form.Control 
            required style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}} type="text" placeholder="Description"  name="description" value={formData.description} onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="image" className='p-2'>
          <Form.Control required style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}} type="text" placeholder="Image" name="image" value={formData.image} onChange={handleChange}/>
        </Form.Group>

      </Row>
      <Button type="submit" className='ju'>Submit form</Button>
    </Form>
  );
}
