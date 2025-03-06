import React from 'react';
import i1 from '../../images/1.png';
import i2 from '../../images/2.png';
import i3 from '../../images/3.png';

function CarouselImage({ index,text }) {
  const images = [i1, i2, i3];
  return <img className="d-block w-100" src={images[index]} alt={text} />;
}
export default CarouselImage;

