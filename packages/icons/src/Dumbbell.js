import * as React from 'react'
const SvgDumbbell = (props) => (
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
    <g clipPath="url(#dumbbell_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.4 14.4 9.6 9.6m11.9 11.9-1.4-1.4M3.9 3.9 2.5 2.5m16.157 18.985a2 2 0 1 1-2.83-2.828l-1.766 1.768a2 2 0 0 1-2.83-2.83l6.365-6.363a2 2 0 0 1 2.829 2.829l-1.768 1.767a2 2 0 0 1 2.828 2.829zM6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 0 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 0 1 2.829 2.829z"
      />
    </g>
    <defs>
      <clipPath id="dumbbell_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgDumbbell
