import * as React from 'react'
const SvgCarrot = (props) => (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m8.64 14-2.05-2.04M15.34 15l-2.46-2.46M15 9s1.86-2 3.5-2C20.67 7 22 9 22 9s-1.33 2-3.5 2S15 9 15 9m0 0s-2-1.33-2-3.5S15 2 15 2s2 1.33 2 3.5C17 7.16 15 9 15 9M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 1 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7"
    />
  </svg>
)
export default SvgCarrot
