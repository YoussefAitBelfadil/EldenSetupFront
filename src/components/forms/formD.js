import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

export default function FormD() {
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
    <Form noValidate validated={validated} onSubmit={handleSubmit} className="m-5 p-4 bg-light w-75">
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationSociété" className="d-flex align-items-center">
          <Form.Label className="me-3 mb-0" style={{ width: "150px" }}>Société</Form.Label>
          <InputGroup hasValidation>
            <Form.Control type="text" placeholder="Société" required />
            <Form.Control.Feedback type="invalid">Choisis une société</Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationEmail" className="d-flex align-items-center">
          <Form.Label className="me-3 mb-0" style={{ width: "150px" }}>Email</Form.Label>
          <InputGroup hasValidation>
            <Form.Control type="email" placeholder="Email" required />
            <Form.Control.Feedback type="invalid">Écris ton email</Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationTelephone" className="d-flex align-items-center">
          <Form.Label className="me-3 mb-0" style={{ width: "150px" }}>Téléphone</Form.Label>
          <InputGroup hasValidation>
            <Form.Control type="tel" placeholder="Téléphone" pattern="^[0-9]{10}$" required />
            <Form.Control.Feedback type="invalid">Écris un numéro valide</Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationAdresse" className="d-flex align-items-center">
          <Form.Label className="me-3 mb-0" style={{ width: "150px" }}>Adresse</Form.Label>
          <InputGroup hasValidation>
            <Form.Control type="text" placeholder="Adresse" required />
            <Form.Control.Feedback type="invalid">Écris ton adresse</Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md="3" controlId="validationCodePostale" className="d-flex align-items-center">
          <InputGroup hasValidation>
            <Form.Control type="text" placeholder="Code Postal" pattern="^[0-9]{5}$" required />
            <Form.Control.Feedback type="invalid">Écris un code postal valide</Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md="3" controlId="validationVille" className="d-flex align-items-center">
          <InputGroup hasValidation>
            <Form.Control type="text" placeholder="Ville" required />
            <Form.Control.Feedback type="invalid">Écris ta ville</Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationProduits" className="d-flex align-items-center">
          <Form.Label className="me-3 mb-0" style={{ width: "150px" }}>Liste des produits</Form.Label>
          <InputGroup hasValidation>
            <Form.Control type="text" placeholder="Produits" required />
            <Form.Control.Feedback type="invalid">Écris la liste des produits</Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>

      <Button type="submit">Envoyer</Button>
    </Form>
  );
}
