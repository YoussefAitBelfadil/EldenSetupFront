import { useState } from 'react';
import FormD from '../components/forms/formD';
import img from "../images/quote.webp"

export default function Devis() {

  return (<>
  <div>
  <h4>Demander un devis</h4>
  <img src={img} alt='Icon' style={{height:'60px',width:'60px'}} />
  </div>
    
  <div></div>
    <FormD/>
    </>
  );
}
