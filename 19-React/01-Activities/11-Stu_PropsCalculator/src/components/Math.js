import React from "react";

function Math (props) {
    let value;
    switch (props.operator) {
        case "+":
            value = props.num1 + props.num2;
            break;
        case "-":
            value = props.num1 - props.num2;
            break;
        case "*":
            valeu = props.num1 * props.num2;
            break;
        case "/":
            value = props.num1 / props.num2;
            break;
    }
}