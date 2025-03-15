import React from "react";
import { Container, Row, Col,Table } from "react-bootstrap";
import imgg from "../images/liv1.jpg"
import img2 from "../images/liv2.jpg"
import Navvv from "../components/Navbar";
import MyFooter from "../components/footer";
import BasicExample from "../components/filterr";



export default function Solve(){
    return(
        <>
        <div style={{backgroundColor:"#F7F7F7"}}>
        <div className="bg-white">
            <Navvv/>
            <BasicExample />
        </div>
            
            <Container className="w-100 mt-5 ">
                <Row >
                <Col md={10} className="bg-light">
                <Table striped bordered hover size="sm">
                <thead>
                    <tr >
                    <th className="p-4">Problème</th>
                    <th className="p-4"> Détails</th>
                    <th className="p-4">Résolution</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className="p-4">Article non conforme</td>
                    <td className="p-4">Le produit que vous avez reçu ne correspond pas à ce que vous avez commandé : article différent, couleur, capacité…</td>
                    <td className="p-4">Le produit est échangé contre celui que vous aviez choisi au moment de la commande, les frais de retour et de renvoi étant à notre charge.</td>
                    </tr>

                    <tr>
                    <td className="p-4">Mauvaise condition ou article endommagé</td>
                    <td className="p-4"> Le produit que vous avez reçu est en mauvais état ou a subi un endommagement au moment de la livraison.</td>
                    <td className="p-4">Le produit est échangé contre un autre neuf, les frais de livraison étant à notre charge. Cependant, l’endommagement doit être signalé dans un délai de 48 heures après réception du colis, au-delà de ce délai, l’article n’est pas échangé.
                    Si l’article en question n’est plus en stock, vous serez remboursé du montant de la commande.</td>
                    </tr>
                    <tr>
                    <td className="p-4">Le montant facturé est incorrect</td>
                    <td className="p-4">Le montant qui figure sur la facture est supérieur ou inférieur au montant que vous avez payé au moment de la commande.</td>
                    <td className="p-4">Une nouvelle facture vous est renvoyée si vous le souhaitez, avec le montant exact que vous avez payé lors de votre commande.</td>
                    </tr>

                    <tr>
                    <td className="p-4">Non livré en temps opportun</td>
                    <td className="p-4">Votre article n’a pas été livré dans le délai de livraison maximal annoncé sur la fiche du produit par iris.ma au moment de l’achat.</td>
                    <td className="p-4">Si le produit n’a pas été expédié, le montant total de votre commande vous est remboursé dans un délai de 15 jours maximum.<br/><br/>
                        En cas d’expédition, vous nous retournez le colis une fois reçu. Dès que nous en accuserons la réception, le montant de votre commande ainsi que les frais de retour vous seront remboursés dans un délai de 15 jours maximum.</td>
                    </tr>

                    <tr>
                    <td className="p-4">Défaillance du produit pendant la période de garantie</td>
                    <td className="p-4"> Un défaut matériel affecte l’article que vous avez acheté et le rend impropre à l’usage auquel il était prédestiné.</td>
                    <td className="p-4">Si le produit est toujours sous garantie et que le défaut survenu est matériel et non un défaut d’utilisation, vous nous retournez le produit en question pour qu’il soit réparé, les frais de retour étant à la charge du client.</td>
                    </tr>
                </tbody>
                </Table>
                <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <img src={imgg} className="my-4" alt="Livraison" style={{width:'800px' , height:'auto'}}/>
                </div>
                
                </Col>
                <Col md={2} >
                    <img src={img2} alt="Livraison" style={{width:'250px' , height:'auto'}}/>
                </Col>
                </Row>
            </Container>
            <MyFooter />
        </div>
        </>
    )
}

