import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import img from "../images/paiement.jpeg";
import imgg from "../images/liv1.jpg"
import img1 from "../images/cash on delivery.jpeg";
import img2 from "../images/liv2.jpg"
import Navvv from "../components/Navbar";
import MyFooter from "../components/footer";
import Filterr from "../components/filter";



export default function Paiement(){
    return(
        <>
        <div style={{backgroundColor:"#F7F7F7"}}>
        <div className="bg-white">
            <Navvv/>
            <Filterr />
        </div>
            
            <Container className="w-100 mt-5 ">
                <Row >
                <Col md={10} className="bg-light">
                <h2 className="ms-2" style={{borderBottom:'1px solid rgb(1, 1, 1)'}}>Modes de paiement</h2>
                    <Row className="ms-2 mt-4" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                        <h3 style={{borderLeft:"4px solid #007bff",color:"#034081"}}>Le paiement par carte bancaire</h3>
                        <img src={img} className="my-4" alt="Livraison" style={{width:'600px' , height:'auto'}}/>
                        <p>Incontestablement le moyen le plus simple et le plus rapide ; il suffit de quelques clics et votre commande vous est expédiée.<br/><br/>
                            Sur iris, vous pouvez effectuer vos achats aussi bien par une carte bancaire marocaine que par une carte étrangère.<br/><br/>
                            Grâce à son partenariat avec <a href="https://www.cmi.co.ma/">le Centre Monétique Interbancaire</a>  (CMI), IRIS vous garantit un paiement électronique entièrement sécurisé.<br/> Vos données personnelles (identité, numéro de carte…etc.) sont entièrement cryptées et utilisées uniquement au cours de la transaction sur la plateforme Ecom du CMI.
                            Ramsys ne conserve donc aucun numéro de carte bancaire.<br/><br/>
                            Le paiement en ligne géré par le CMI repose sur des technologies et concepts reconnus par les experts d'e-commerce du monde entier, il est par ailleurs régi par des lois et réglementations nationales et internationales.<br/><br/>
                            Le système de paiement est certifié par le CMI, VISA, MasterCard et l'ensemble des banques marocaines.</p>
                        
                    </Row>
                    <Row className="ms-2 mt-4">
                        <h3 style={{borderLeft:"4px solid #007bff",color:"#034081"}}>Le paiement par virement bancaire</h3>
                        <p >Ce mode de paiement nécessite plus de temps de traitement que celui par carte bancaire.<br/><br/>
                            Une fois votre commande passée, vous devez alors procéder à un virement bancaire à partir de votre banque au compte bancaire de la SGM2I :<br/><br/>
                            <p className="text-center">RIB: 007 826 000000000000000 89</p>
                            <p className="text-center">Domiciliation: Attijariwafa bank : Agence BCM Guiliz ,  Marrakech</p>
                            Il est à noter qu'un virement bancaire nécessite au moins 48 heures pour que l'argent soit transféré d'un compte à un autre.<br/><br/>
                            Il serait préférable d'indiquer, si possible, votre numéro de commande en référence de votre virement. Dès réception de ce dernier, votre commande est validée et vous est livrée par nos transporteurs dans les plus brefs délais.<br/><br/>
                            Notez bien que contrairement au paiement par carte bancaire, le produit que vous commandez n'est pas réservé immédiatement mais plutôt au moment de la validation définitive du paiement.</p>
                    </Row>
                    <Row className="ms-2 mt-4">
                        <h3 style={{borderLeft:"4px solid #007bff",color:"#034081"}}>Le paiement par dépôt d'espèces dans une agence bancaire</h3>
                        <p>Ce mode de paiement nécessite moins de temps de traitement en général que celui par virement bancaire.<br/><br/>
                            Une fois votre commande passée, vous devez alors procéder à un dépôt d'espèces dans n'importe quelle agence de Attijariwafa Bank au compte bancaire de la SGM2I :<br/><br/>
                            <p className="text-center">N° de compte: 0268 D 000 000 000</p>
                            <p className="text-center">Banque: Attijariwafa bank</p><br/>
                            Il est à noter que le dépôt d'espèces nécessite au moins 24 heures pour que l'argent soit transféré sur le compte de la société.<br/><br/>
                            Il serait préférable d'indiquer, si possible, votre numéro de commande en référence de votre virement. Dès réception de ce dernier, votre commande est validée et vous est livrée par nos transporteurs dans les plus brefs délais.<br/><br/>
                            Notez bien que contrairement au paiement par carte bancaire, le produit que vous commandez n'est pas réservé immédiatement mais plutôt au moment de la validation définitive du paiement.</p>
                    </Row>
                    <Row className="ms-2 mt-4" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                        <h3 style={{borderLeft:"4px solid #007bff",color:"#034081"}}>Le paiement en contre-remboursement </h3>
                        <img src={img1} className="my-4" alt="Livraison" style={{width:'650px' , height:'auto'}}/>
                        <p>Ce mode de paiement nécessite lui aussi un délai de traitement. Une fois votre commande passée sur notre site, elle restera en attente de validation jusqu'à ce qu'elle soit examinée par le service de contrôle des fraudes. Si tout est en règle elle est validée, et un email vous est envoyé vous précisant que votre commande a bien été validée.<br/><br/>
                            Votre colis sera ensuite expédié et une fois que vous l'aurez reçu, vous réglerez votre commande directement auprès du livreur au moment de la livraison.<br/><br/>
                            Il est à noter que ce mode de paiement est limité à certains produits et est uniquement accepté pour des commandes dont le montant est inférieur à 6000,00 DH TTC.<br/></p>
                    </Row>
                    <Row className="ms-2 mt-4" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                        <h3 style={{borderLeft:"4px solid #007bff",color:"#034081"}}>Le paiement par chèque bancaire certifié</h3>
                        <p>Que vous soyez une entreprise ou un particulier, vous pouvez optez pour le paiement par chèque bancaire à condition qu’il soit certifié par votre banque.<br/><br/>
                            Le chèque doit être libellé à l’ordre de la société qui gère le site ramsys.ma<br/><br/>
                            Tout comme le paiement par virement bancaire, le paiement par chèque nécessite un délai de traitement. Une fois votre commande effectuée, vous devrez nous envoyer, par mail ou par fax, une copie de votre chèque bancaire certifié à l'ordre de la SGM2I.<br/><br/>
                            Dès que cette copie est reçue, votre commande est validée et vous est expédiée dans les plus brefs délais. Vous remettrez le chèque certifié au livreur qui vous délivrera votre colis en prenant le soin de mentionner le numéro de la commande au dos de votre chèque.<br/><br/>
                            Notez bien que contrairement au paiement par carte bancaire, le produit que vous commandez n'est pas réservé immédiatement mais plutôt au moment de la validation définitive du paiement, c’est-à-dire après réception de la copie du chèque certifié.<br/></p>
                        <img src={imgg} className="my-4" alt="Livraison" style={{width:'800px' , height:'auto'}}/>
                    </Row>
                </Col>
                <Col md={2} >
                    <img src={img2} alt="Livraison" style={{width:'200px' , height:'auto'}}/>
                </Col>
                </Row>
            </Container>
            <MyFooter />
        </div>
        </>
    )
}