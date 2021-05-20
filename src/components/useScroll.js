import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const useScroll = () => {
  const controls = useAnimation();
  const [ref, isInView] = useInView({ threshold: 0.3 });

  controls.start(isInView ? 'show' : 'hidden');

  return [ref, controls];
};

export default useScroll;
