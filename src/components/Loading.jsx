import React from "react";

function Loading() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-black">
      <style>
        {`
          /* 2. Your excellent drawing animation - unchanged */
          .draw-path {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: draw-icon 2.5s ease-in-out forwards;
          }

          @keyframes draw-icon {
            to {
              stroke-dashoffset: 0;
            }
          }
        `}
      </style>
      
      <svg
        className="m-auto w-28 h-28" // Size is good
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g 
          fill="none" 
          stroke="#AA8A56" // 4. Changed color to brand-gold
          strokeWidth="4" // Slightly thinner for a blueprint feel
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path
            className="draw-path"
            d="M20 80 L20 40 L50 10 L80 40 L80 80 L20 80"
            style={{ animationDelay: '0s' }}
          />
          
          <path
            className="draw-path"
            d="M20 40 L80 40"
            style={{ animationDelay: '0.8s' }}
          />

          <path
            className="draw-path"
            d="M40 80 L40 60 L60 60 L60 80"
            style={{ animationDelay: '1.2s' }}
          />
        </g>
      </svg>
    </div>
  );
}

export default Loading;