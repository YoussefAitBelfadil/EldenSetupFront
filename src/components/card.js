import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/csscard.css";
import { motion, AnimatePresence } from "framer-motion";
import img from "../images/menu-burger (3).png";
import img1 from "../images/traverser (2).png"
import {Button,Card,Badge} from 'react-bootstrap'
import pc from "../images/ordinateur-portable-hp-dragonfly-g4-96z84et.jpg"

export default function ProductCard(){
    const [flipped, setFlipped] = useState(false);

  return (
    <div className="container d-inline">
      <div  className="d-inline-block  card-container position-relative">
        <div className="card-base d-flex flex-column justify-content-center align-items-center p-3 border rounded text-white position-relative">
          <button 
            className="btn  position-absolute top-0 end-0 m-2"
            onClick={() => setFlipped(!flipped)}>
            <img src={img1} alt="icon" />
          </button>
        </div>
        <AnimatePresence>
          {!flipped && (
            <motion.div
              className="card-front d-flex flex-column justify-content-center align-items-center p-3 border rounded position-absolute"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <button 
                className="btn d-block position-absolute top-0 end-0 m-2"
                onClick={() => setFlipped(true)}><img src={img} alt="icon"/></button>

              <Card.Img variant="top" src={pc} className='w-75 mt-5 d-block'/>
              <Card.Body className="text-center">
                <Card.Text className='text-start'>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <h5><span>4000 DH</span> 5000 DH</h5>
                <Button variant="warning">Go somewhere</Button>
              </Card.Body>
              <Badge bg="danger" className="position-absolute top-0 start-0 " style={{ fontSize: "0.75rem", padding: "0.3em 0.6em" ,marginTop: "5px",marginLeft:"5px" }}>1500 DH</Badge>
              <Badge bg="success" className="position-absolute top-0 start-0 " style={{ fontSize: "0.75rem", padding: "0.3em 0.6em" ,marginTop: "28px",marginLeft:"5px" }}>En stock </Badge> 
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};


