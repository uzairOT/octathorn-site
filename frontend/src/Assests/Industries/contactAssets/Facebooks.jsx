import React from "react";

function Facebooks() {
  return (
    <svg
      width="70"
      height="70"
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_238_513)">
        <rect
          x="15"
          y="13"
          width="40"
          height="40"
          rx="6"
          fill="#0E4366"
          fill-opacity="0.78"
        />
        <path
          d="M36.1635 40.4976V33.6676H38.4677L38.8102 30.9935H36.1635V29.2901C36.1635 28.5185 36.3785 27.9901 37.486 27.9901H38.8894V25.606C38.2066 25.5328 37.5202 25.4975 36.8335 25.5001C34.7969 25.5001 33.3985 26.7435 33.3985 29.026V30.9885H31.1094V33.6626H33.4035V40.4976H36.1635Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_238_513"
          x="0.6"
          y="0.6"
          width="68.8"
          height="68.8"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="7.2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_238_513"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_238_513"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default Facebooks;
