import React from "react";
import "./sandbox.css";

const Sandbox = (props) => {
  return (
    <div className="canvas">
      <svg viewBox="0 0 300 300" height="300" width="300">
        {/* <circle cx="150" cy="150" r="100" fill="hotpink" />
        <circle cx="150" cy="150" r="50" fill="beige" /> */}
        <circle
          cx="150"
          cy="150"
          r="100"
          fill="transparent"
          stroke="hotpink"
          stroke-width="20"
        />
        <circle cx="150" cy="150" r="50" fill="hotpink" />
      </svg>
      <svg viewBox="0 0 300 300" width="300" height="300">
        <circle
          cx="150"
          cy="150"
          r="100"
          fill="transparent"
          stroke="hotpink"
          stroke-width="20"
        />
        <line x1="150" y1="60" x2="150" y2="240" stroke="black" />
        <line x1="60" y1="150" x2="240" y2="150" stroke="black" />
      </svg>
      <svg viewBox="0 0 300 300" width="300" height="300">
        <g fill="olive">
          <polygon points="0,300 100,100 175,300" />
          <polygon points="120,300 200,140 300,300" />
        </g>
        <circle cx="70" cy="50" r="30" fill="gold" />
        <ellipse cx="80" cy="50" rx="60" ry="15" fill="white" />
        <ellipse cx="100" cy="60" rx="30" ry="10" fill="white" />
        <ellipse cx="60" cy="40" rx="30" ry="10" fill="white" />
      </svg>
    </div>
  );
};

export default Sandbox;
