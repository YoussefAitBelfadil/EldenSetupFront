import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

export default function Formord() {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    type: 'ORDINATEUR',
    title: '',
    sousCategorie: '',
    marque: '',
    processor: '',
    ram: '',
    rom: '',
    carteGraphique: '',
    poids: '',
    tailleEcran: '',
    couleur: '',
    dimensions: '',
    typeBatterie: '',
    systemeExploitation: '',
    prix: '',
    quantiteStock: '',
    description: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      try {
        const data = new FormData();
        for (const key in formData) {
          if (formData[key]) {
            data.append(key, formData[key]);
          }
        }

        const response = await axios.post('http://127.0.0.1:8000/api/laptops', data, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log('Laptop added successfully', response.data);
      } catch (error) {
        console.error('Error adding laptop:', error);
      }
    }
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="m-2 d-grid gap-1" style={{ gridTemplateColumns: "repeat(3, 2fr)", gridGap: "10px" }}>
        <Form.Group controlId="validationCustom01" className="p-2">
          <Form.Control
            required
            type="text"
            placeholder="ORDINATEUR"
            name="ORDINATEUR"
            value="ORDINATEUR"
            readOnly
            style={{ width: '300px', textAlign: 'center', height: '50px', borderRadius: '5px' }}
          />
        </Form.Group>

        <Form.Group controlId="validationCustom02" className="p-2">
          <Form.Control
            required
            type="text"
            placeholder="Titre"
            name="name"
            onChange={handleChange}
            style={{ width: '300px', height: '50px', textAlign: 'center', borderRadius: '5px' }}
          />
        </Form.Group>

        <Form.Group controlId="validationCustom03" className="p-2">
          <Form.Select
            name="sousCategorie"
            onChange={handleChange}
            required
            style={{ width: '300px', textAlign: 'center', height: '50px', borderRadius: '5px' }}>
            <option value="" disabled selected hidden> Sous-catégories</option>
            <option value='PC_portable'>PC portable</option>
            <option value='PC_portable_gamer'>PC portable gamer</option>
            <option value='PC_de_bureau'>PC de bureau</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="validationCustom04" className="p-2">
          <Form.Control
            required
            type="text"
            placeholder="Marque"
            name="marque"
            onChange={handleChange}
            style={{ width: '300px', height: '50px', textAlign: 'center', borderRadius: '5px' }}
          />
        </Form.Group>

        <Form.Group controlId="validationCustom05" className="p-2">
          <Form.Control
            required
            type="text"
            placeholder="Processeur"
            name="processor"
            onChange={handleChange}
            style={{ width: '300px', height: '50px', textAlign: 'center', borderRadius: '5px' }}
          />
        </Form.Group>

        <Form.Group  controlId="validationCustom06" className='p-2 '>
          <Form.Control 
          required 
          type="text" 
          placeholder="Mémoire vive(RAM)"
          name="ram"
          onChange={handleChange}  
          style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom07" className='p-2 '>
          <Form.Control 
          required 
          type="text" 
          placeholder="Taille du disque dur"
          name="rom"
          onChange={handleChange}  
          style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom08" className='p-2 '>
          <Form.Control 
          required 
          type="text" 
          placeholder="Carte graphique"
          name="carteGraphique"
          onChange={handleChange}  
          style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom09" className='p-2 '>
          <Form.Control 
          required 
          type="text" 
          placeholder="Poids en kg"
          name="poids" 
          onChange={handleChange}
          style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom10" className='p-2 '>
          <Form.Control 
          required 
          type="text" 
          placeholder="Taille de l'écran"
          name="tailleEcran"
          onChange={handleChange}  
          style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom11" className='p-2 '>
          <Form.Control 
          required 
          type="text" 
          placeholder="Couleur produit"
          name="couleur"
          onChange={handleChange}  
          style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom12" className='p-2 '>
          <Form.Control 
          required 
          type="text" 
          placeholder="Dimensions (l x p x h) en mm"
          name="dimensions"
          onChange={handleChange}  
          style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom13" className='p-2 '>
          <Form.Control 
          required 
          type="text"
          onChange={handleChange} 
          placeholder="Type de batterie / autonomie"
          name="typeBatterie"  
          style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom14" className='p-2 '>
          <Form.Control 
          required
          type="text" 
          placeholder="Système d'exploitation"
          name="systèmeExploitation"
          onChange={handleChange}  
          style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom15" className='p-2 '>
          <Form.Control 
          required 
          type="text" 
          placeholder="Prix"
          name="prix" 
          style={{width:'300px',height:'50px',textAlign: 'center',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom16" className='p-2 '>
          <Form.Control 
          required 
          type="text" 
          placeholder="Quantité en stock"
          name="quantitéStock"
          onChange={handleChange} 
          style={{width:'300px',textAlign: 'center',height:'50px',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group  controlId="validationCustom17" className='p-2 '>
          <Form.Control 
          required 
          type="text" 
          placeholder="Description"
          name="description"
          onChange={handleChange} 
          style={{width:'300px',textAlign: 'center',height:'50px',borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group controlId="validationCustom18" className="p-2">
          <Form.Control
            required
            type="file"
            name="image"
            onChange={handleFileChange}
            style={{ width: '300px', textAlign: 'center', height: '50px', borderRadius: '5px' }}
          />
        </Form.Group>

      </Row>
      <Button type="submit" className="ju">Submit form</Button>
    </Form>

    
  );
}

