import { useState, useEffect } from 'react';
import Hearts from '../common/Hearts'; // Ajusta la ruta según la ubicación de tu componente Heart
import { useSpring, animated, config } from 'react-spring';
import './SV24.css'

const SV24 = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const generateHearts = () => {
      const newHearts = [];
      const containerWidth = window.innerWidth;
      const containerHeight = window.innerHeight;

      for (let i = 0; i < 10; i++) {
        const x = Math.random() * (containerWidth - 50); // 50 es el ancho del corazón
        const y = Math.random() * (containerHeight - 100); // 50 es la altura del corazón

        newHearts.push({
          id: i,
          x,
          y,
        });
      }
      setHearts(newHearts);
    };
    generateHearts();
  }, []);

  const removeHeart = (id) => {
    setHearts((prevHearts) => prevHearts.filter((heart) => heart.id !== id));
  };

  const styles = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: config.molasses, // Puedes ajustar la configuración de la animación aquí
  });

  return (
    <div className="text-light d-flex flex-column">
      <div className="container">
        <img src="https://i.imgur.com/HDiAWuQ.jpg" className='fotoCarrito' />
        <animated.div style={styles}>
          {hearts.map((heart) => (
            <Hearts key={heart.id} x={heart.x} y={heart.y} onRemove={removeHeart}/>
          ))}
        </animated.div>
      </div>
      <div className='container text-center mt-5'>
        <h2 className='preguntaSV24'>Quieres ser mi Valentin?</h2>
        <h2>Algo</h2>
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SV24;
