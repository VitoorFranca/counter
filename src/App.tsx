import React from "react";

import CssBaseline from "@mui/material/CssBaseline";

import { Counter } from "./components/Counter";
import { Tabs } from "./components/Tabs";
import type { ItemInterface } from "./components/Tabs";

export function App() {
    const itemTabs: ItemInterface[] = [
        {
            id: "pomodoro",
            value: "pomodoro-25",
            label: "Pomodoro",
            component: <Counter initial={25} />,
        },
        {
            id: "short-break",
            value: "short-break",
            label: "Intervalo Curto",
            component: <Counter initial={5} />,
        },
        {
            id: "long-break",
            value: "long-break",
            label: "Intervalo Longo",
            component: <Counter initial={10} />,
        },
    ];
    return (
        <React.Fragment>
            <CssBaseline />
            <Tabs itemsTabs={itemTabs} />
        </React.Fragment>
    );
}
