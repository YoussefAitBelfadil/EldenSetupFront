import Filterr from "../components/filter";
import Carouseel from "../components/Carousel/carousel"
import {Row,Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import b1 from "../images/sub-banner-1.jpg"
import b2 from "../images/sub-banner-2.jpg"
import b3 from "../images/sub-banner-3.jpg"
import c1 from "../images/utilisateur-actif (1).png"
import c2 from "../images/ecran.png"
import c3 from "../images/chariot (1).png"
import Product from "../components/product";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home(){
    const [products, setProducts] = useState([]);
  const [selectedType, setSelectedType] = useState("ORDINATEUR"); 

//api
        useEffect(() => {
            if (selectedType) {
            axios
                .get(`http://localhost:8000/api/products/${selectedType}`)
                .then((response) => {
                setProducts(response.data);
                })
                .catch((error) => {
                console.error("Error fetching products:", error);
                });
            }
        }, [selectedType]);

    return( <>
        <Filterr/>
        <Carouseel />
        <Row >
            <Col>
            <Card className="bg-dark text-black mt-5 ms-4" border="light">
                <Card.Img src={b1} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
            </Col>

            <Col>
            <Card className="bg-dark text-black mt-5 mx-2" border="light">
                <Card.Img src={b2} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
            </Col>

            <Col>
            <Card className="bg-dark text-black mt-5 me-4" border="light">
                <Card.Img src={b3} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
            </Col>
        </Row>
        <Row className="justify-content-center bg-light mb-5 w-75 mt-5" style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "0 auto" }}>
            <div className="text-md-center mx-4 w-25 ">
                <img src={c1} alt="user" style={{width:"60px",height:"auto" }}/>
                <h4>Plus de 30000 clients satisfaits</h4>
                <p>Un site de confiance avec des dizaines de milliers de colis livrés à son actif.</p>
            </div>
            <div className="text-md-center mx-4 w-25  ">
                <img src={c2} alt="user" style={{width:"60px",height:"auto" }}/>
                <h4>Plus de 12 ans d’expérience</h4>
                <p>Une expertise acquise après une longue expérience dans la vente en ligne du matériel informatique.</p>
            </div>
            <div className="text-md-center mx-4 w-25 ">
                <img src={c3} alt="user" style={{width:"60px",height:"auto" }}/>
                <h4>Plus de 10000 références</h4>
                <p>De nombreuses références listées pour répondre à tous les besoins et tous les budgets.</p>
            </div>
        </Row>

        <Row className="m-3">
        <Col  className={`border-bottom border-dark ${selectedType === "ORDINATEUR" ? "fw-bold text-primary" : ""}`}>
        <h5 className="pb-2" onClick={() => setSelectedType("ORDINATEUR")}>Ordinateur</h5>
    </Col>
    <Col  className={`border-bottom border-dark ${selectedType === "IMPRIMANTE" ? "fw-bold text-primary" : ""}`}>
        <h5 className="pb-2" onClick={() => setSelectedType("IMPRIMANTE")}>Imprimante</h5>
    </Col> 
    <Col  className={`border-bottom border-dark ${selectedType === "ECRAN" ? "fw-bold text-primary" : ""}`}>
        <h5 className="pb-2" onClick={() => setSelectedType("ECRAN")}>Ecran</h5>
    </Col> 
    <Col  className={`border-bottom border-dark ${selectedType === "CLAVIER" ? "fw-bold text-primary" : ""}`}>
        <h5 className="pb-2" onClick={() => setSelectedType("CLAVIER")}>Clavier</h5>
    </Col> 
    <Col  className={`border-bottom border-dark ${selectedType === "SOURIS" ? "fw-bold text-primary" : ""}`}>
        <h5 className="pb-2" onClick={() => setSelectedType("SOURIS")}>Souris</h5>
    </Col> 
    <Col  className={`border-bottom border-dark ${selectedType === "stockage" ? "fw-bold text-primary" : ""}`}>
        <h5 className="pb-2" onClick={() => setSelectedType("stockage")}>Stockage</h5>
    </Col> 
    <Col  className={`border-bottom border-dark ${selectedType === "TABLETTE_GRAPHIQUE" ? "fw-bold text-primary" : ""}`}>
        <h5 className="pb-2" onClick={() => setSelectedType("TABLETTE_GRAPHIQUE")}>Tablette</h5>
    </Col> 
        </Row>

        <div>
        {products.map(products => (
            <Product key={products.id} products={products} />
        ))}
    </div>
        
    </>
    );
}