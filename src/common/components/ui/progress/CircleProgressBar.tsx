import "@/common/components/ui/progress/progress.styles.scss";

interface CircleProgressBarProps {
  progress: number;
  size?: number;
  value?: number;
  maxValue?: number;
}

export const CircleProgressBar = ({
  progress,
  size = 20,
  value,
  maxValue,
}: CircleProgressBarProps) => {
  const radius = (size - 3) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="circle-progress-bar">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
      >
        <circle
          className="circle-progress-bar__bg"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={3}
        />
        <circle
          className="circle-progress-bar__fill"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={3}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
    </div>
  );
};
