import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import { FiVideo } from "react-icons/fi";
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
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return null;
  }

  return (
    <div className="relative w-full rounded-lg bg-secondary p-6">
      {/* Close Button */}
      <button
        className="absolute top-2 right-3 text-lg font-bold text-gray-600 hover:text-gray-900"
        onClick={() => setVisible(false)}
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
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-1 border-primary text-lg font-bold text-primary">
                {step.id}
              </div>
              <p className="font-semibold">{step.text}</p>
            </div>
          ))}
        </div>

        {/* Tutorial Link */}
        <div className="me-5 xl:me-10">
          <a
            className="flex items-center gap-2 font-bold text-primary no-underline hover:underline"
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
