import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      if (latest > 0.1) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, [scrollYProgress]);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-tech-blue origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-6 left-6 z-50"
      >
        <Button
          size="icon"
          className="rounded-full w-12 h-12 bg-gray-800/80 hover:bg-gray-700 text-white backdrop-blur-sm"
          onClick={scrollToTop}
        >
          <ArrowUp className="w-6 h-6" />
        </Button>
      </motion.div>
    </>
  );
}