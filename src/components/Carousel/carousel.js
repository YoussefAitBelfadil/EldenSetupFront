import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './CarouselImage';


export default function Carouseel() {
  return (
    <Carousel interval={1000} style={{marginTop:'18px'}}>
      <Carousel.Item>
      <ExampleCarouselImage text="first slide" index={0}/>
      </Carousel.Item>

      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" index={1}/>
      </Carousel.Item>

      <Carousel.Item>
      <ExampleCarouselImage text="third slide" index={2}/>
      </Carousel.Item>
    </Carousel>
  );
}
