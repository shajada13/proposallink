import { useState } from "react";
import QUESTIONS from "./data/questions.js";
import FloatingHearts from "./components/FloatingHearts.jsx";
import ProposalCard from "./components/ProposalCard.jsx";
import CelebrationScreen from "./components/CelebrationScreen.jsx";

export default function App() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  const total = QUESTIONS.length;

  function handleYes() {
    if (step + 1 >= total) {
      setDone(true);
    } else {
      setStep((s) => s + 1);
    }
  }

  function restart() {
    setStep(0);
    setDone(false);
  }

  return (
    <div className="app-container">
      <FloatingHearts />

      {!done ? (
        <ProposalCard
          step={step}
          total={total}
          question={QUESTIONS[step]}
          onYes={handleYes}
        />
      ) : (
        <CelebrationScreen onRestart={restart} />
      )}

      <span className="signature">Shajada</span>
    </div>
  );
}
