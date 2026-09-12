import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export const FloatingParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 2,
          duration: Math.random() * 20 + 15,
          delay: Math.random() * 10,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating gradient orbs */}
      <div 
        className="absolute w-96 h-96 rounded-full animate-float-slow opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(25 85% 60% / 0.4) 0%, transparent 70%)",
          top: "10%",
          left: "10%",
          filter: "blur(60px)",
        }}
      />
      <div 
        className="absolute w-80 h-80 rounded-full animate-float opacity-15"
        style={{
          background: "radial-gradient(circle, hsl(35 80% 55% / 0.3) 0%, transparent 70%)",
          bottom: "20%",
          right: "15%",
          filter: "blur(50px)",
          animationDelay: "2s",
        }}
      />
      <div 
        className="absolute w-64 h-64 rounded-full animate-glow-pulse opacity-10"
        style={{
          background: "radial-gradient(circle, hsl(30 60% 45% / 0.4) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          filter: "blur(40px)",
        }}
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full animate-twinkle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: `hsl(${25 + Math.random() * 20} 70% 60% / ${particle.opacity})`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
            boxShadow: `0 0 ${particle.size * 2}px hsl(25 85% 60% / 0.3)`,
          }}
        />
      ))}
    </div>
  );
};
