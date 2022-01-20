import { Box, Button } from "@mui/material";
import { CountdownData } from "../../hooks/useCounter";

type Props = {
  startCountdown: CountdownData["startCountdown"];
  resetCountdown: CountdownData["resetCountdown"];
};

export function CounterControls({ startCountdown, resetCountdown }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        width: "60%",
      }}
    >
      <Button size="large" variant="contained" onClick={startCountdown}>
        Start
      </Button>
      <Button size="large" variant="contained" onClick={resetCountdown}>
        Reset
      </Button>
    </Box>
  );
}
