import React from "react";
import WithTooltip from "./WithTooltip";

export default function ScheduleMenuButton(props) {
    const classes = props.className || "";
    const variant = props.variant || "primary";
    const tooltip = props.tooltip || "";
    const onclick = props.onClick || (() => {});
    const label = props.children;
    const disabled = Boolean(props.disabled);
    const mobile = window.matchMedia("(max-width: 768px)").matches;

    const button = (
        <button 
            className={"btn btn-" + variant + " " + classes}
            onClick={onclick}
            disabled={disabled}
        >
            {label}
        </button>
    )

    if (mobile) {
        let textColor = "text-dark";
        if (["primary", "secondary", "success", "danger"].includes(variant)) {
            textColor = "text-light";
        }

        return (
            <span onClick={onclick} className={"link bg-" + variant + " " + textColor + " " + classes}>
                { label }
            </span>
        )
    } else if (tooltip) {
        return (
            <WithTooltip message={tooltip}>
                {button}
            </WithTooltip>
        )
    } else {
        return button
    }
}