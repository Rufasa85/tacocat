import React from 'react'

export default function Math({operator, num1,num2}) {
    let result;
    switch (operator) {
        case "+":
            result = num1+num2
            break;
        case "-":
            result = num1-num2
            break;
        case "*":
            result = num1*num2
            break;
        case "/":
            result = num1/num2
            break;
    
        default:
            result = "not a valid operator"
            break;
    }
    return (
    <p>{num1} {operator} {num2} = {result}</p>
    )
}
