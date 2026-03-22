import { useMemo } from "react";

export default function HeroCanvas() {
  const particles = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => {
        const angle = (i / 15) * Math.PI * 2;
        const radius = 140 + Math.random() * 80;
        return {
          id: i,
          size: 2 + Math.random() * 4,
          x: Math.cos(angle) * radius,
          y: Math.sin(angle) * radius,
          duration: 3 + Math.random() * 4,
          delay: Math.random() * 5,
        };
      }),
    []
  );

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Background glow blobs */}
      <div className="absolute w-96 h-96 rounded-full bg-primary-500/15 blur-[100px]" />
      <div className="absolute w-64 h-64 rounded-full bg-accent-500/10 blur-[80px] translate-x-16 translate-y-8" />

      <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80" style={{ perspective: 800 }}>
        {/* Inner glow layer */}
        <div className="hero-blob absolute inset-0 opacity-30 blur-2xl" />
        {/* Main morphing blob */}
        <div className="hero-blob absolute inset-0" />

        {/* Orbiting rings */}
        <div className="hero-ring hero-ring-1" />
        <div className="hero-ring hero-ring-2" />

        {/* Floating particles */}
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute top-1/2 left-1/2"
            style={{ transform: `translate(calc(-50% + ${p.x}px), calc(-50% + ${p.y}px))` }}
          >
            <div
              className="rounded-full bg-primary-400"
              style={{
                width: p.size,
                height: p.size,
                boxShadow: `0 0 ${p.size * 3}px rgba(99, 102, 241, 0.6)`,
                animation: `particle-float ${p.duration}s ease-in-out ${p.delay}s infinite`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
