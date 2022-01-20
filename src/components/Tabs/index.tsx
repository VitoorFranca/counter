import React from "react";
import { Box, Button, Typography } from "@mui/material";

export type ItemInterface = {
  label: string;
  component: React.ReactNode;
  value: string;
  id?: string;
};

type TabsProps = {
  itemsTabs: ItemInterface[];
};

export function Tabs({ itemsTabs }: TabsProps) {
  const [current, setCurrent] = React.useState<string>(itemsTabs[0].value);
  function handleNavigation(navigateTo: ItemInterface["value"]) {
    setCurrent(navigateTo);
  }
  return (
    <Box
      bgcolor="cyan"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box sx={{ height: "80%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          {itemsTabs.map((item: ItemInterface) => {
            return (
              <Button
                variant={current === item.value ? "outlined" : "text"}
                sx={{ cursor: "pointer" }}
                key={item.id}
                onClick={() => handleNavigation(item.value)}
              >
                <input
                  style={{ display: "none" }}
                  type="radio"
                  name="tabs"
                  value={item.value}
                  id={item.id}
                  defaultChecked={current === item.value}
                />
                <label style={{ cursor: "pointer" }} htmlFor={item.id}>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {item.label}
                  </Typography>
                </label>
              </Button>
            );
          })}
        </Box>

        <Box sx={{ height: "60%" }}>
          {itemsTabs.map(
            (item: ItemInterface) => current === item.value && item.component
          )}
        </Box>
      </Box>
    </Box>
  );
}
