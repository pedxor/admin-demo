import React from "react";

interface MilestoneProps {
  mode?: "light" | "dark";
  type: "tasks-completed" | "tasks-left";
  metric: number;
  totalTasks?: number;
  label: string;
  comparison: string;
}

const Milestone: React.FC<MilestoneProps> = ({
  mode = "light",
  type,
  metric,
  totalTasks,
  label,
  comparison,
}) => {
  let comparisonText = "";
  let progress = 0;

  if (type === "tasks-completed" && totalTasks) {
    progress = (metric / totalTasks) * 100;
    comparisonText = `${comparison} more than your average`;
  } else if (type === "tasks-left") {
    progress = metric;
    comparisonText = `${comparison} quicker than last week`;
  }

  const radius = 60; // Aumenté el radio del círculo
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const circleColor =
    mode === "dark" ? "var(--color-light-tertiary)" : "var(--color-primary)";
  const backgroundColor =
    mode === "dark" ? "var(--color-light)" : "var(--color-light-secondary)";
  const valueColor =
    mode === "dark" ? "var(--color-light)" : "var(--color-primary)";

  return (
    <div
      className={`rounded-lg p-6 transition-colors duration-300 ${
        mode === "dark" ? "bg-primary text-white" : "text-dark bg-white"
      }`}
    >
      <div className="flex flex-col items-start space-y-2">
        <div className="relative flex items-center justify-center pt-8">
          <svg
            width="150"
            height="150"
            viewBox="0 0 150 150"
            className="rotate-90 transform"
          >
            <circle
              cx="75"
              cy="75"
              r={radius}
              stroke={backgroundColor}
              strokeWidth="5"
              fill="none"
            />
            <circle
              cx="75"
              cy="75"
              r={radius}
              stroke={circleColor}
              strokeWidth="5"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-500 ease-out"
            />
          </svg>
          <div
            className="absolute text-4xl font-bold"
            style={{ color: valueColor }}
          >
            {type === "tasks-completed" ? metric : `${metric}%`}
          </div>
        </div>

        <div className="text-md mt-auto font-medium">{label}</div>
        <div className="text-3xl font-semibold">
          {type === "tasks-completed" ? "Tasks completed" : "Tasks left"}
        </div>
        <div className="text-sm font-medium">{comparisonText}</div>
      </div>
    </div>
  );
};

export default Milestone;
