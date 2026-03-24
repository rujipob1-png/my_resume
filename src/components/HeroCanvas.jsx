export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Ambient glow behind photo */}
      <div className="absolute w-[420px] h-[420px] rounded-full bg-white/[0.03] blur-[120px]" />

      <div className="hero-photo-wrapper">
        {/* Animated gradient border ring */}
        <div className="hero-photo-ring" />

        {/* Outer glow pulse */}
        <div className="hero-photo-glow" />

        {/* Profile photo */}
        <div className="hero-photo-inner">
          <img
            src="/profile.jpg"
            alt="Rujipob Chusat"
            className="w-full h-full object-cover object-[center_5%]"
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
}
