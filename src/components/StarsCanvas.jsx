import { useMemo } from "react";

const FIELD = 3000;

function stars(count) {
  const s = [];
  for (let i = 0; i < count; i++) {
    s.push(`${Math.round(Math.random() * FIELD)}px ${Math.round(Math.random() * FIELD)}px #fff`);
  }
  return s.join(",");
}

export default function StarsCanvas() {
  const [sm, md, lg] = useMemo(() => [stars(600), stars(200), stars(80)], []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="star-layer stars-1" style={{ width: 1, height: 1, boxShadow: sm, opacity: 0.4 }} />
      <div className="star-layer stars-2" style={{ width: 2, height: 2, boxShadow: md, opacity: 0.6 }} />
      <div className="star-layer stars-3" style={{ width: 2, height: 2, boxShadow: lg, opacity: 0.8 }} />
    </div>
  );
}
