import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';

const HeroCamera = ({ children }) => {
  const group = useRef();

  useFrame((state, delta) => {
    easing.dampE(group.current.rotation, [-state.pointer.y / 3, state.pointer.x / 5, 0], 0.25, delta);

    // if (!isMobile) {
      
    // }
  });

  return <group ref={group}>{children}</group>;
};

export default HeroCamera;