import { Box } from "@mui/material";

import { useCounter, CountdownData } from "../../hooks/useCounter";
import { CounterControls } from "../CounterControls";
import { DisplayCounter } from "../DisplayCounter";

export type CounterProps = {
  initial: CountdownData["initialTime"];
};

export function Counter({ initial }: CounterProps) {
  const {
    minutes,
    seconds,
    startCountdown,
    hasFinished,
    isActive,
    resetCountdown,
  } = useCounter(initial);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
      bgcolor="cyan"
    >
      <DisplayCounter minutes={minutes} seconds={seconds} />
      <CounterControls
        startCountdown={startCountdown}
        resetCountdown={resetCountdown}
      />
    </Box>
  );
}
