import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function Clavier({ onSubmit }) {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({model: '',title: '',brand: '',standard: '',connection: '',weight: '',backlit: '',numericPad: '',price: '',stock: '',description: '',image: ''});

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
      onSubmit(formData);
    }
}; 


  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className='m-2 d-grid gap-1' style={{ gridTemplateColumns: "repeat(3, 1fr)", gridGap: "10px" }}>
        
        <Form.Group controlId="model" className='p-2'>
          <Form.Control 
            required style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}} type="text" placeholder="CLAVIER" name="model" value={formData.model} onChange={handleChange}/>
        </Form.Group>

        <Form.Group controlId="title" className='p-2'>
          <Form.Control required style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}} type="text" placeholder="Titre" name="title" value={formData.title} onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="brand" className='p-2'>
          <Form.Control required style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}} type="text" placeholder="Marque" name="brand" value={formData.brand} onChange={handleChange}/>
        </Form.Group>

        <Form.Group controlId="standard" className='p-2'>
          <Form.Control required style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}} type="text" placeholder="Norme du clavier" name="standard" value={formData.standard} onChange={handleChange}/>
        </Form.Group>

        <Form.Group controlId="connection" className='p-2'>
          <Form.Select required style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}} name="connection" value={formData.connection} onChange={handleChange}>
            <option value="" disabled hidden>Liaison</option>
            <option>Avec fil</option>
            <option>Sans fil - USB</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="weight" className='p-2'>
          <Form.Control required style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}} type="text" placeholder="Poids" name="weight" value={formData.weight} onChange={handleChange}/>
        </Form.Group>

        <Form.Group controlId="backlit" className='p-2'>
          <Form.Select required style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}} name="backlit" value={formData.backlit} onChange={handleChange}>
            <option value="" disabled hidden>Clavier rétroéclairé</option>
            <option>OUI</option>
            <option>NON</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="numericPad" className='p-2' style={{textAlign: 'center'}}>
          <Form.Select 
            required style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}} name="numericPad" value={formData.numericPad} onChange={handleChange}>
            <option value="" disabled hidden>Clavier numérique</option>
            <option>OUI</option>
            <option>NON</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="price" className='p-2'>
          <Form.Control 
            required style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}}
            type="text" 
            placeholder="Prix" 
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="stock" className='p-2'>
          <Form.Control 
            required style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}}
            type="text" 
            placeholder="Quantité en stock" 
            name="stock"
            value={formData.stock}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="description" className='p-2'>
          <Form.Control 
            required style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}}
            type="text" 
            placeholder="Description" 
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="image" className='p-2'>
          <Form.Control required type="text" style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}} placeholder="Image" name="image" value={formData.image} onChange={handleChange}
          />
        </Form.Group>

      </Row>
      <Button type="submit" className='ju'>Submit form</Button>
    </Form>
  );
}
