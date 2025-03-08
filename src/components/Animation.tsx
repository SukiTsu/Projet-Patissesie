import { useEffect, useRef, useState, ReactNode } from "react";
import "../assets/style/styleAnimation.css"

interface AnimatedOnScrollProps {
  duration: number;
  children: ReactNode;
  repeat:boolean
}

const AnimatedOnScroll: React.FC<AnimatedOnScrollProps> = ({ children, duration, repeat }) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }else if (repeat) {
          entry.target.classList.remove("visible");
        }
      },
      { threshold: 1 } // Déclenche l'animation quand 30% de l'élément est visible
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
    ref={elementRef}
    className={`animated-element ${isVisible ? "visible" : ""}`}
    style={{ transitionDuration: `${duration}s` }}
  >
      {children}
    </div>
  );
};

export default AnimatedOnScroll;