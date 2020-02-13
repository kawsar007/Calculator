import React from 'react';
import "./Button.css";

export default function Button(props) {
    return (
        <div className="button-wrapper"
    onClick={() => props.handleClick(props.children)}
    >
    {props.children}
</div>
    )
}

// import React from 'react';
// import "./Button.css";

// const isOperator = val => {
//     return !isNaN(val) || val === "." || val === "=";
// }

// const Button = props => 
// <div 
//    className={`button-wrapper
//     ${isOperator(props.children) ? null : "operator"
//     }`}
//     onClick={() => props.handleClick(props.children)}
//     >
//     {props.children}
// </div>

// export default Button;

