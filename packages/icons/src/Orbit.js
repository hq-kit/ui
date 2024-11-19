import * as React from 'react'
const SvgOrbit = (props) => (
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
    <g clipPath="url(#orbit_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.4 21.9a10 10 0 0 0 9.94-15.416M13.5 2.1a10 10 0 0 0-9.84 15.416M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0m6-7a2 2 0 1 1-4 0 2 2 0 0 1 4 0M7 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      />
    </g>
    <defs>
      <clipPath id="orbit_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgOrbit
