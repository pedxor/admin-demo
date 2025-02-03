import React, { useState, useEffect } from "react";
import { FiX, FiVideo } from "react-icons/fi";

interface Step {
  id: number;
  text: string;
}

interface TutorialLink {
  text: string;
  href: string;
}

const title = "Charge the boosters...";
const subtitle = "Start automating your processes!";
const steps: Step[] = [
  { id: 1, text: "Create a new automation" },
  { id: 2, text: "Set up your rules" },
  { id: 3, text: "Skyrocket your workflow" },
];

const tutorialLink: TutorialLink = {
  text: "Watch tutorial",
  href: "#",
};

const Boosters: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleClose = () => {
    setIsFadingOut(true); // Start fade out animation
    setTimeout(() => {
      setIsVisible(false); // Remove from DOM after transition
    }, 300); // Match the Tailwind duration (300ms)
  };

  if (!isVisible) return null;

  return (
    <div
      className={`bg-secondary relative w-full rounded-lg p-6 transition-all duration-300 ${isFadingOut ? "translate-y-[-20px] opacity-0" : "translate-y-0 opacity-100"}`}
    >
      {/* Close Button */}
      <button
        className="absolute top-2 right-3 text-lg font-bold text-gray-600 hover:text-gray-900"
        onClick={handleClose}
      >
        <FiX />
      </button>

      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        {/* Title and Subtitle */}
        <div className="text-center md:text-left">
          <p className="font-semibold">{title}</p>
          <p className="font-semibold">{subtitle}</p>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-6 md:flex-row">
          {steps.map((step) => (
            <div className="flex items-center space-x-3" key={step.id}>
              <div className="border-primary text-primary flex h-10 w-10 items-center justify-center rounded-full border-1 text-lg font-bold">
                {step.id}
              </div>
              <p className="font-semibold">{step.text}</p>
            </div>
          ))}
        </div>

        {/* Tutorial Link */}
        <div className="me-5 xl:me-10">
          <a
            className="text-primary flex items-center gap-2 font-bold no-underline hover:underline"
            href={tutorialLink.href}
          >
            <FiVideo />
            {tutorialLink.text}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Boosters;
