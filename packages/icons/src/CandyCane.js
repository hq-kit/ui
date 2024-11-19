import * as React from 'react'
const SvgCandyCane = (props) => (
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
    <g clipPath="url(#candy-cane_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.75 7 15 2.1m-4.1 2.7L13 9m-5.1.7 2 4.4m-5 .6L7 18.9M5.7 21a2.016 2.016 0 0 1-3.5-2l8.6-14a6.003 6.003 0 1 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2z"
      />
    </g>
    <defs>
      <clipPath id="candy-cane_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgCandyCane
