import { Typography } from "@mui/material";

import { CountdownData } from "../../hooks/useCounter";

type Props = {
  minutes: CountdownData["minutes"];
  seconds: CountdownData["seconds"];
};

export function DisplayCounter({ minutes, seconds }: Props) {
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");
  return (
    <Typography
      sx={{ fontSize: 140, fontWeight: "bold" }}
    >{`${minuteLeft}${minuteRight}:${secondLeft}${secondRight}`}</Typography>
  );
}
