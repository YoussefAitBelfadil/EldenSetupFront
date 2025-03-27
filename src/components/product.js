import { Button, Card, Badge, Carousel, Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import pc from "../images/ordinateur-portable-hp-dragonfly-g4-96z84et.jpg";
import "../CSS/product.css"


export default function Product({ products }) {

  // Create array of available images
  const [images] = useState(() => {
    // Use the actual image URLs from the products object
    const imgs = [products.Image, products.Image2, products.Image3, products.Image4, products.Image5];
    return imgs.filter(img => img !== null); // Filter out null values
  });

    if (!products) {
    return (
      <Card style={{ width: '18rem', height: '25em' }}>
        <Card.Body className="d-flex justify-content-center align-items-center">
          <Spinner animation="border" variant="warning" />
        </Card.Body>
      </Card>
    );
  }
  // Destructure product properties
  const {
    name,
    Prix,
    Quantité_en_stock,
  } = products;

  // Calculate discount (example logic)
  const originalPrice = parseFloat(Prix) + (Prix*0.2);
  const discount = originalPrice - (Prix*0.2);

  return (
    <div className="position-relative d-inline-block m-3">
      <Card style={{ width: '18rem',height: '25em' }}>
        {/* Image Carousel */}
        <Carousel interval={null} indicators={images.length > 1}>
          {images.length > 0 ? (
            images.map((img, index) => (
              <Carousel.Item key={index}>
                <Card.Img
                  variant="top"  src={img}  alt={`${name} - Image ${index + 1}`} className="product-image"
                  onError={(e) => {
                    e.target.src = pc; // Fallback image
                    e.target.className = "product-image fallback";
                  }}
                 style={{width:"300px"}}/>
              </Carousel.Item>
            ))
          ) : (
            <Carousel.Item>
              <Card.Img variant="top" src={pc} alt="Default product" />
            </Carousel.Item>
          )}
        </Carousel>

        <Card.Body>
          <Card.Title>{name.substring(0, 30)}</Card.Title>
          
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <span className="text-decoration-line-through text-muted me-2">
                {originalPrice.toFixed(2)} DH
              </span>
              <span className="h5">{Prix} DH</span>
            </div>
            
          </div>
          <Badge bg={Quantité_en_stock > 0 ? "success" : "danger"}>
              {Quantité_en_stock > 0 ? "In Stock" : "Out of Stock"}
            </Badge>
          {discount > 0 && (
            <Badge bg="danger" className="mt-2">
              Save {(Prix*0.2).toFixed(2)} DH
            </Badge>
          )}
          <Button variant="warning" className="w-100 mt-3">
            View Details
          </Button>
        </Card.Body>
      </Card>
            
    </div>
    
  );
}