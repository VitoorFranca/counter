import React from "react";
export interface CountdownData {
  initialTime: number;
  isActive: boolean;
  hasFinished: boolean;
  minutes: number;
  seconds: number;
  resetCountdown: () => void;
  startCountdown: () => void;
}

export function useCounter(initialTime: CountdownData["initialTime"]) {
  const [time, setTime] = React.useState(initialTime * 60);
  const [isActive, setIsActive] = React.useState(false);
  const [hasFinished, setHasFinished] = React.useState(false);
  let countdownTimeout: NodeJS.Timeout;

  React.useEffect(() => {
    if (isActive && time >= 0) {
      countdownTimeout = setInterval(() => {
        setTime(time - 1);
        setIsActive(true);
        clearTimeout(countdownTimeout);
      }, 1000);
    } else if (isActive && time === 0) {
      clearTimeout(countdownTimeout);
      setHasFinished(true);
      setIsActive(false);
    }
    return () => clearTimeout(countdownTimeout);
  }, [isActive, time]);

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(initialTime * 60);
    setHasFinished(false);
  }

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return {
    isActive,
    resetCountdown,
    hasFinished,
    startCountdown,
    minutes,
    seconds,
  };
}
