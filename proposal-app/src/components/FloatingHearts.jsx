import { Heart } from "lucide-react";

const FLOAT_HEARTS = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  left: Math.round(Math.random() * 96),
  delay: Math.round(Math.random() * 6 * 10) / 10,
  duration: 10 + Math.round(Math.random() * 8),
  size: 14 + Math.round(Math.random() * 14),
}));

export default function FloatingHearts() {
  return (
    <>
      {FLOAT_HEARTS.map((h) => (
        <Heart
          key={h.id}
          className="floating-heart"
          style={{
            left: `${h.left}%`,
            width: h.size,
            height: h.size,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
          }}
          fill="currentColor"
        />
      ))}
    </>
  );
}
