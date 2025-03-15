import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import img from "../images/Livraison.jpeg";
import img1 from "../images/liv1.jpg";
import img2 from "../images/liv2.jpg"
import Filterr from "../components/filter";
import Navvv from "../components/Navbar";
import MyFooter from "../components/footer";



export default function Livraison(){
    return(
        <>
        <div className="bg-white">
            <Navvv/>
            <Filterr />
        </div>
            
            <Container className="w-100 mt-5">
                <Row>
                <Col md={10} className="bg-infos">
                <h2 className="ms-2 " style={{borderBottom:'1px solid rgb(1, 1, 1)'}}>Modes de livraison</h2>
                    <Row className="ms-2 mt-4">
                        <h3 style={{borderLeft:"4px solid #007bff",color:"#034081"}}>Les modes de livraison sur ramsysa.ma</h3>
                        <p>Sur iris.ma, vous commandez et vous vous faites livrer partout au Maroc sans vous déplacer. La livraison est assurée par les soins de l'un de nos transporteurs à l'adresse que vous spécifiez où que vous soyez au Maroc.</p>
                        <img src={img} alt="Livraison" style={{width:'600px' , height:'auto'}}/>
                    </Row>
                    <Row className="ms-2 mt-4">
                        <h3 style={{borderLeft:"4px solid #007bff",color:"#034081"}}>Livraison par nos transporteurs</h3>
                        <p>Achetez sans vous déplacer, votre commande vous est livrée, dans les plus brefs délais, à domicile ou à l'adresse que vous avez précisée lors de votre commande.<br/><br/>
                            Le délai de livraison dépend de la disponibilité des produits que vous avez commandés. Il est aussi important de ne pas oublier que la commande vous est expédiée après sa validation. Donc, si vous avez choisi de payer par dépôt d'espèces dans une agence bancaire ou par virement bancaire, le calcul du délai de livraison (en jours ouvrés) se fera à partir du moment où nous aurons reçu votre règlement et validé votre commande.<br/><br/>
                            Pour avoir plus de visibilité sur l'acheminement de votre marchandise, vous recevez un e-mail de confirmation, dès réception de votre règlement, vous informant que votre commande a été validée. Dès que votre commande sera expédiée, un code d'expédition vous sera envoyé afin de pouvoir suivre en tant réel le parcours de votre colis. Par ailleurs, vous pouvez toujours suivre de près le traitement de votre commande sur iris à partir de votre compte.</p>
                    </Row>
                    <Row className="ms-2 mt-4">
                        <h3 style={{borderLeft:"4px solid #007bff",color:"#034081"}}>Combien coûte la livraison ? </h3>
                        <p>Nos transporteurs vous livrent <strong>partout au Maroc</strong>  pour un tarif de <strong>40 Dirhams TTC</strong>. Si le poids de votre colis dépasse les 30 Kgs, le prix de la livraison dépendra à ce moment là du poids des produits que vous avez choisis. Vous pouvez à tout moment visualiser le coût de la livraison sur votre écran, pour cela il vous suffit d'ajouter le produit qui vous intéresse à votre panier. <br/><br/> 
                            Si vous habitez <strong>Rabat ou Témara</strong>, commandez vos produits et nous vous livrerons pour 20 Dirhams TTC seulement.</p>
                        <img src={img1} alt="Livraison" style={{width:'650px' , height:'auto'}}/>
                    </Row>
                </Col>
                <Col md={2} >
                    <img src={img2} alt="Livraison" style={{width:'200px' , height:'auto'}}/>
                </Col>
                </Row>
            </Container>
            <MyFooter />
        </>
    )
}