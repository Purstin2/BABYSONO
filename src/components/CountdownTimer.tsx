import { useEffect, useState } from "react";

interface CountdownTimerProps {
  /** Total seconds to count down from */
  initialSeconds?: number;
}

const formatTime = (totalSeconds: number) => {
  const minutes = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (totalSeconds % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
};

export const CountdownTimer = ({ initialSeconds = 14 * 60 + 37 }: CountdownTimerProps) => {
  const [remaining, setRemaining] = useState(initialSeconds);

  useEffect(() => {
    if (remaining <= 0) return;

    const interval = window.setInterval(() => {
      setRemaining((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => window.clearInterval(interval);
  }, [remaining]);

  return (
    <span className="font-mono text-sm tracking-widest text-foreground">
      {formatTime(remaining)}
    </span>
  );
};

export default CountdownTimer;
