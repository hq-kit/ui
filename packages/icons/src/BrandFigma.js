import * as React from 'react'
const SvgBrandFigma = (props) => (
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
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.242 2a3.335 3.335 0 0 0-.014 6.667 3.335 3.335 0 0 0 .014 6.666h3.335V12.02a3.336 3.336 0 1 0 3.347-3.354A3.335 3.335 0 0 0 14.91 2zm6.647 6.667h-3.313v3.312a3.335 3.335 0 0 1 3.313-3.312"
      clipRule="evenodd"
    />
    <path fill="currentColor" d="M8.242 22a3.335 3.335 0 0 0 3.335-3.333v-3.334H8.242a3.335 3.335 0 0 0 0 6.667" />
  </svg>
)
export default SvgBrandFigma
