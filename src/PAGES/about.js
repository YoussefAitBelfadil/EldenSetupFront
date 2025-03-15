import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import img from "../images/iris-ecommerce.jpg";
import imgg from "../images/liv1.jpg"
import img1 from "../images/team-iris.jpg";
import img2 from "../images/liv2.jpg"
import Navvv from "../components/Navbar";
import MyFooter from "../components/footer";
import Filterr from "../components/filter";



export default function Aboutt(){
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
                <h2 className="ms-2" style={{borderBottom:'1px solid rgb(1, 1, 1)'}}>Qui sommes nous?</h2>
                    <Row className="ms-2 mt-4" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                        <h3 style={{borderLeft:"4px solid #007bff",color:"#034081"}}>ramsys.ma site de vente en ligne de matériel informatique</h3>
                        <p>ramsys.ma est un site d’e-commerce qui a été créé en 2010 avec pour objet de faciliter la fonction achat au citoyen marocain, en proposant un vaste choix de produits informatiques et électroniques sélectionnés parmi les meilleures références et simples à acquérir en quelques clics sans avoir à se déplacer.</p>
                        <img src={img} className="my-4" alt="Livraison" style={{width:'600px' , height:'auto'}}/>
                        <p>ramsys.ma est né aussi dans la perspective d’accompagner l’essor numérique d’un Maroc en mouvement où il serait temps d’aller de l’avant et de laisser les Nouvelles Technologies de l’Information et de la Communication prendre place.<br/><br/>
                            Aujourd’hui, iris.ma a acquis une place de choix dans le domaine de la vente en ligne de matériel informatique au Maroc, il se positionne clairement désormais comme leader du marché dans son domaine.<br/><br/>
                            Avec des dizaines de milliers de clients à son actif et des dizaines de milliers de commandes livrées sur tout le territoire marocain, notre site d’e-commerce s’est taillé une expertise au fil des ans qui lui permet d’accompagner les besoins de ses différents clients et de satisfaire leurs exigences.<br/><br/>
                            ramsys.ma s’adresse aussi bien aux particuliers qu’aux entreprises. Il propose un portail pro à ces dernières et offre une gamme de services et de produits dédiés aux professionnels.<br/></p>
                        
                    </Row>
                    <Row className="ms-2 mt-4">
                        <h3 style={{borderLeft:"4px solid #007bff",color:"#034081"}}>Full Stack Developer</h3>
                        <p >Hi I'm Youssef ait belfadil , a passionate Full Stack Developer currently studying at OFPPT.<br/>
                         I specialize in both front-end and back-end development, working with technologies like HTML, CSS, JavaScript, React.js, PHP, and more.<br/>
                         I'm driven by the challenge of solving complex problems and building impactful solutions.<br/> 
                         Whether it's creating seamless user experiences or developing robust server-side functionality, I'm always eager to learn, grow, and push the boundaries of what technology can do.</p>
                    </Row>
                    <Row className="ms-2 mt-4" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                        <h3 style={{borderLeft:"4px solid #007bff",color:"#034081"}}>Une équipe pluridisciplinaire</h3>
                        <p>ramsys.ma c’est aussi une équipe jeune et dynamique qui œuvre sur tous les fronts pour offrir aux utilisateurs la meilleure expérience achat possible sur un site d’e-commerce.</p>
                        <img src={img1} className="my-4" alt="Livraison" style={{width:'800px' , height:'auto'}}/>
                        <p>Nous accordons beaucoup de soin au choix des produits qui figurent sur notre catalogue afin de proposer à notre clientèle une vaste sélection de produits de qualité aux meilleurs prix possibles sur le marché.<br/><br/>
                            Notre équipe technique veille à ce que notre site soit toujours à la pointe des nouvelles technologies, offrant une expérience utilisateur conviviale et ergonomique. Nous accordons la plus grande importance également à ce que le processus d’achat soit simplifié et adapté à tous les utilisateurs.<br/><br/>
                            Notre staff logistique œuvre à garantir à nos clients une grande efficacité dans le traitement de leurs commandes et une livraison dans les plus brefs délais.<br/><br/>
                            Enfin notre équipe Marketing veille à toujours vous présenter le meilleur et les derniers nés du High-tech et à vous proposer régulièrement diverses promotions et affaires à ne pas rater.<br/><br/>
                            ramsys.ma c’est l’Excellence et la Qualité mises à votre service !<br/></p>
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