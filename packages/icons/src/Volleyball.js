import * as React from 'react'
const SvgVolleyball = (props) => (
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
      d="M11.1 7.1a16.55 16.55 0 0 1 10.9 4M12 12a12.6 12.6 0 0 1-8.7 5m8.7-5a12.8 12.8 0 0 1 8.7 5M12 12a13.3 13.3 0 0 1 0-10m4.8 11.6a16.55 16.55 0 0 1-9 7.5M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2M6.3 3.8a16.55 16.55 0 0 0 1.9 11.5"
    />
  </svg>
)
export default SvgVolleyball
