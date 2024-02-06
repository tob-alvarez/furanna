/* eslint-disable react/prop-types */
import { useSpring, animated, config } from 'react-spring';

const Hearts = ({ x, y }) => {
  const styles = useSpring({
    from: { opacity: 0, transform: 'translate(0px, -100px)' },
    to: { opacity: 1, transform: 'translate(0px, 0px)' },
    config: config.slow, // Puedes ajustar la configuración de la animación aquí
  });

  return (
    <animated.div
      style={{
        position: 'absolute',
        transform: styles.transform,
        opacity: styles.opacity,
        left: x,
        top: y,
        color: 'red',
        fontSize: '2rem',
      }}
    >
      ❤️
    </animated.div>
  );
};

export default Hearts;
