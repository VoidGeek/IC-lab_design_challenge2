import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const MyCarousel = () => {
  return (
    <>
      <div className='text-center mt-3'>
        <h1>Carousel</h1>
      </div>
      <div className='container mt-3'>
        <Carousel>
          <div>
            <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=2000" alt=''/>
          </div>
          <div>
            <img src="https://cdn1.epicgames.com/ue/product/Screenshot/13-1920x1080-de2690d4f6b08b8d5e0edb5abb485591.jpg?resize=1&w=1920" alt=''/>
          </div>
          <div>
            <img src="https://images.alphacoders.com/132/1328375.png" alt=''/>
          </div>
        </Carousel>
      </div>
    </>
  )
}

export default MyCarousel;
