import * as React from 'react'
const SvgGripHorizontal = (props) => (
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
      d="M12 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2M19 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2M5 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2M12 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2M19 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2M5 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
    />
  </svg>
)
export default SvgGripHorizontal
