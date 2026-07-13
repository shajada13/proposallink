import { Heart } from "lucide-react";

export default function CelebrationScreen({ onRestart }) {
  return (
    <div className="proposal-card celebration-card">
      <Heart className="celebration-heart" fill="currentColor" />
      <h1 className="celebration-title">You said Yes, 10 out of 10 times</h1>
      <p className="celebration-subtitle">
        That was the real question all along... and the answer was always Yes.
      </p>
      <button onClick={onRestart} className="btn btn-restart">
        Start over
      </button>
    </div>
  );
}
