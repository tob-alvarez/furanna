import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
    <div className=' d-flex justify-content-center '>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img src="https://i.imgur.com/KjhUP3e.jpg" className='fotoCarrito'/>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://i.imgur.com/HDiAWuQ.jpg" className='fotoCarrito' />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://i.imgur.com/lg1r0VM.jpg" className='fotoCarrito' />
        </Carousel.Item>
      </Carousel>
    </div>
    </>
  );
}

export default Home;