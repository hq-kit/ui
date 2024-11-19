import * as React from 'react'
const SvgHousePlus = (props) => (
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
      d="M13.22 2.416a2 2 0 0 0-2.511.057l-7 6A2 2 0 0 0 3 10v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7.354M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8m6-15h6m-3-3v6"
    />
  </svg>
)
export default SvgHousePlus
