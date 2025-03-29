import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Badge, Spinner, Alert, Container, Row, Col } from 'react-bootstrap';
import Countdown from "./countdown";
import defaultImage from "../images/ordinateur-portable-hp-dragonfly-g4-96z84et.jpg";

const API_BASE_URL = 'http://127.0.0.1:8000/api';

const getImageUrl = (imagePath) => {
  if (!imagePath) return defaultImage;
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }
  return `${API_BASE_URL}/${imagePath.replace(/^\/+/, '')}`;
};

export default function Productfull() {
  const { type, id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentImg, setCurrentImg] = useState(defaultImage);
  const [productImages, setProductImages] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const endpoint = `${API_BASE_URL}/Details/${type}/${id}`;
        console.log('Fetching from:', endpoint);

        const response = await fetch(endpoint);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        setProduct(result.data);
        
        // Extract all available images from the product data
        const images = [];
        
        // Add main image if exists
        if (result.data.Image) images.push(result.data.Image);
        if (result.data.image) images.push(result.data.image);
        if (result.data.images?.main) images.push(result.data.images.main);
        
        // Add additional images if available
        if (result.data.images?.gallery && Array.isArray(result.data.images.gallery)) {
          images.push(...result.data.images.gallery);
        }
        
        // Filter out any undefined/null values
        const validImages = images.filter(img => img);
        
        setProductImages(validImages);
        
        // Set the first available image as current
        if (validImages.length > 0) {
          setCurrentImg(getImageUrl(validImages[0]));
        }
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err.message);
        setTimeout(() => navigate('/'), 3000);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [type, id, navigate]);

  const handleClick = (img) => {
    setCurrentImg(getImageUrl(img));
  };

  if (loading) {
    return (
      <div className="text-center mt-4">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="danger" className="mt-4">
        {error} - Redirecting to products page...
      </Alert>
    );
  }

  if (!product) {
    return (
      <Alert variant="warning" className="mt-4">
        Product not found
      </Alert>
    );
  }

  return (
    <Container fluid className="m-4 w-100">
      <Row>
        <Col md={6}>
          <div className="bg-body d-flex flex-column justify-content-center">
            <div className='d-flex justify-content-center'> 
              <img 
                src={currentImg} 
                alt={product.name }   
                style={{width: '350px', height: 'auto', objectFit: 'contain'}}
                className="img-fluid mb-3"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = defaultImage;
                }}
              />
            </div>
            
            {productImages.length > 1 && (
              <div className='d-flex justify-content-center gap-3 flex-wrap'>
                {productImages.map((img, index) => (
                  <img 
                    key={index}
                    src={getImageUrl(img)} 
                    alt={`Thumbnail ${index + 1}`} 
                    style={{
                      width: '80px', 
                      height: '80px',
                      cursor: 'pointer',
                      objectFit: 'cover',
                      border: currentImg === getImageUrl(img) ? '2px solid #0d6efd' : '1px solid #ddd'
                    }}  
                    onClick={() => handleClick(img)}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = defaultImage;
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </Col>
        
        <Col md={6}>
          <div>
            <h2>{product.name}</h2>
            <h4 className='text-primary'>{product.Marque} / {product.Sous-catégories}</h4>
            
            <div className="price-container mb-3">
              {product. Prix && (
                <span className="original-price me-2 text-decoration-line-through">
                  {product.Prix} DH
                </span>
              )}
              <span className="current-price fw-bold">
                {product.discount_price || product.Prix} DH
              </span>
              {product.discount_price && (
                <Badge bg="danger" className="ms-2">
                  Save {product.Prix - product.Prix} DH
                </Badge>
              )}
            </div>
            
            
            
            {product.Description && (
              <div className="mb-4">
                <h5>Description</h5>
                <p>{product.Description}</p>
              </div>
            )}
            
            <div className="d-flex gap-3">
              <Button 
                variant="warning" 
                className="add-to-cart-btn"
                disabled={!product.stock || product.stock <= 0}
              >
                {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
              </Button>
              
              <Badge bg={product.stock > 0 ? "success" : "danger"} className="align-self-center">
                {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
              </Badge>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}