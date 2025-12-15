import { motion } from "framer-motion";
import { ReactNode, useState } from "react";

interface Card3DProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hoverScale?: number;
}

const Card3D = ({ children, className = "", onClick, hoverScale = 1.02 }: Card3DProps) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      className={`perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileHover={{ scale: hoverScale }}
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div
        className="relative glass rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-500"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-light/5 via-transparent to-cyan-glow/5 pointer-events-none" />
        
        {/* Shine effect */}
        <div 
          className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `linear-gradient(${135 + rotateY * 5}deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)`,
          }}
        />
        
        {children}
      </div>
    </motion.div>
  );
};

export default Card3D;
