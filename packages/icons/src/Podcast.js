import * as React from 'react'
const SvgPodcast = (props) => (
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
      d="M16.85 18.58a9 9 0 1 0-9.7 0M8 14a5 5 0 1 1 8 0m-3-3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m0 6a1 1 0 0 0-2 0l.5 4.5a.5.5 0 0 0 1 0z"
    />
  </svg>
)
export default SvgPodcast
