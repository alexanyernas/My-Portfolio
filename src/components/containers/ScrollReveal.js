import React, { useRef, useEffect } from "react";
import scrollReveal from "scrollreveal";

const ScrollReveal = ({ children, style }) => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        reset: true,
        delay: 100
      });
  }, []);

  return (
    <section
      ref={sectionRef}
      style={style}
      className="container scroll-section"
      data-testid="section"
    >
      {children}
    </section>
  );
};

export default ScrollReveal;