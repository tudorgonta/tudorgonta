import * as React from "react"
import { useState } from 'react';

const LogoTG = (props) => {

  const [isHover, setIsHover] = useState(false);

   const handleMouseEnter = () => {
      setIsHover(true);
   };
   const handleMouseLeave = () => {
      setIsHover(false);
   };

   const boxStyle = {
    fontSize: "113.55px",
    fontFamily: "Ayuthaya",
    fill: "#f9e5c9",
    fontWeight: "70",
    opacity: isHover ? "90%" : "100%",
    cursor: isHover ? "pointer" : "",
    transition: "all 0.21s ease-in-out",
   };
   const pathStyle = {
    opacity: isHover ? "60%" : "100%",
    cursor: isHover ? "pointer" : "",
    transition: "all 0.21s ease-in-out",
   };
   const path2Style = {
    opacity: isHover ? "90%" : "100%",
    cursor: isHover ? "pointer" : "",
    transition: "all 0.21s ease-in-out",
   };

  return (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 370.5 399.13" {...props}>
    <defs>
      <style>
        {
          ".cls-1,.cls-2{fill:#f9e5c9}.cls-1,.cls-4{stroke:#f9e5c9;stroke-linecap:round;stroke-miterlimit:10;stroke-width:10px}.cls-4{fill:none}"
        }
      </style>
    </defs>
    <title>{"Asset 1"}</title>
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <g id="In" style={path2Style} onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
          <path className="cls-1" d="m5 217.76 183.26 176.37" style={{
              fill: "none",
              strokeMiterlimit: 10,
              strokeWidth: 10,
              stroke: "#f9e5c9",
            }} />
          <path className="cls-2" d="M188.26 394.13 365.5 220.15" style={{
              fill: "none",
              strokeMiterlimit: 10,
              strokeWidth: 10,
              stroke: "#f9e5c9",
            }} />
          <path
            style={{
              stroke: "#b4b4b4",
              fill: "none",
              strokeMiterlimit: 7,
              strokeWidth: 7,
              strokeLinecap: "round",
            }}
            d="M188.26 394.13 365.5 220.15"
          />
          <path className="cls-4" d="M188.26 394.13 365.5 220.15" style={{
              fill: "none",
              strokeMiterlimit: 7,
              strokeWidth: 7,
              stroke: "#f9e5c9",
            }} />
          <path
            style={{
              fill: "#b4b4b4",
              strokeMiterlimit: 7,
              strokeWidth: 7,
            }}
            d="M188.25 42.9 365.5 220.15"
          />
          <path
            style={{
              stroke: "#b4b4b4",
              fill: "none",
              strokeMiterlimit: 7,
              strokeWidth: 7,
            }}
            d="M188.25 42.9 365.5 220.15"
          />
          <path className="cls-4" d="M188.25 42.9 365.5 220.15" style={{
              fill: "none",
              strokeMiterlimit: 7,
              strokeWidth: 7,
              stroke: "#f9e5c9",
            }} />
          <path
            style={{
              fill: "none",
              strokeMiterlimit: 7,
              strokeWidth: 7,
              stroke: "#f9e5c9",
            }}
            d="M188.25 42.9 365.5 220.15"
          />
          <path className="cls-2"  d="M188.25 42.9 365.5 220.15" style={{
              fill: "none",
              strokeMiterlimit: 10,
              strokeWidth: 10,
              stroke: "#f9e5c9",
            }} />
          <path className="cls-1" d="M54.22 173.02 188.25 42.9" style={{
              fill: "none",
              strokeMiterlimit: 10,
              strokeWidth: 10,
              stroke: "#f9e5c9",
            }} />
        </g>
        <g id="Out" style={pathStyle} onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
          <path
            className="cls-1"
            d="M362.37 176.93 188.26 5M313.47 225.53 188.26 352.19M6.8 179.13l181.46 173.06M188.26 5 6.8 179.13"
          />
        </g>
      </g>
      <text
        transform="translate(117.42 243.81)"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={boxStyle}
        id="Layer_2-2"
        data-name="Layer 2"
      >
        {"TG"}
      </text>
    </g>
  </svg>
  )
}

export default LogoTG
