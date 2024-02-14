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
        <h2 className='preguntaSV24'>Para mi Valentin :</h2>
      </div>
      <div className='container text-center gap-3'>
        <h5 className='textoSV24 mt-4'>Mi amor... tantas cosas que decirte y tan pocas que salen de mi boca, como ya te dije, deberias aprender a leer mi ojos cuando te miro y solo asi dimensionarias el amor que tengo por vos. Quizas no soy el mejor haciendo estas cartas o expresandome, pero de verdad te quiero, en este poco tiempo que pasamos juntos descubri que me siento realmente cómodo a tu lado, quiero que siga asi. Tenemos muchos proyectos juntos y se que vendrán más, eso me encanta porque te considero mi compañera. Te amo mucho, siempre te lo voy a decir hasta cuando pasemos por las peores situaciones porque lo que me haces sentir es distinto a todo.</h5>
        <h5 className='textoSV24 mt-4'>Ésto es solo un poco de lo realmente siento por vos, que es inmenso y si quisiera poner todo no entraría :/</h5>
        <h5 className='textoSV24 mt-4 mb-5'>Estoy feliz de tenerte a mi lado para todo, sabes que podes contar conmigo en todas mi amor, Te amo 🤍</h5>
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SV24;
