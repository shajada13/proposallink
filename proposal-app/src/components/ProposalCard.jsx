import { useRef, useState } from "react";
import { Heart } from "lucide-react";

export default function ProposalCard({ step, total, question, onYes }) {
  const [dodges, setDodges] = useState(0);
  const [noPos, setNoPos] = useState({ x: 0, y: 0, r: 0 });
  const cardRef = useRef(null);

  const yesScale = 1 + Math.min(dodges, 8) * 0.12;

  function dodgeNo() {
    const card = cardRef.current;
    const maxX = card ? card.offsetWidth * 0.32 : 90;
    const maxY = card ? card.offsetHeight * 0.22 : 60;
    const x = (Math.random() - 0.5) * 2 * maxX;
    const y = (Math.random() - 0.5) * 2 * maxY;
    const r = (Math.random() - 0.5) * 60;
    setNoPos({ x, y, r });
    setDodges((d) => d + 1);
  }

  function handleYes() {
    setNoPos({ x: 0, y: 0, r: 0 });
    setDodges(0);
    onYes();
  }

  return (
    <div ref={cardRef} className="proposal-card">
      <div className="proposal-card-header">
        <Heart className="header-heart" fill="currentColor" />
        <span>
          Question {step + 1} / {total}
        </span>
        <Heart className="header-heart" fill="currentColor" />
      </div>

      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${(step / total) * 100 + (100 / total) * 0.15}%` }}
        />
      </div>

      <p key={step} className="question-text">
        {question}
      </p>

      <div className="button-row">
        <button
          onClick={handleYes}
          className="btn btn-yes"
          style={{ transform: `scale(${yesScale})` }}
        >
          Yes
        </button>

        <button
          onMouseEnter={dodgeNo}
          onClick={dodgeNo}
          className="btn btn-no"
          style={{
            transform: `translate(${noPos.x}px, ${noPos.y}px) rotate(${noPos.r}deg)`,
          }}
        >
          No
        </button>
      </div>

      {dodges > 0 && (
        <p className="hint-text">
          hmm, "No" doesn't seem to work here... try again
        </p>
      )}
    </div>
  );
}
