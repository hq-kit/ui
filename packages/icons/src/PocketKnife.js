import * as React from 'react'
const SvgPocketKnife = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
    className={`cleon-icons ${props.className ? props.className : 'size-4'}`}
    data-slot="icon"
    aria-hidden="true"
  >
    <g clipPath="url(#pocket-knife_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2m13-7h.01M6 18h.01M18 11.66V22a4 4 0 0 0 4-4V6m-1.17 2.83a4 4 0 0 0-4.362-6.528 4 4 0 0 0-1.298.868l-12 12a4.002 4.002 0 0 0 5.66 5.66z"
      />
    </g>
    <defs>
      <clipPath id="pocket-knife_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgPocketKnife
