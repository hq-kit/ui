import * as React from 'react'
const SvgCigaretteOff = (props) => (
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
      d="M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13m2-8c0-2.5-2-2.5-2-5M2 2l20 20m-1-10a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866M22 8c0-2.5-2-2.5-2-5M7 12v4"
    />
  </svg>
)
export default SvgCigaretteOff
