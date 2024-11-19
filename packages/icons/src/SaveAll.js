import * as React from 'react'
const SvgSaveAll = (props) => (
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
      d="M10 2v3a1 1 0 0 0 1 1h5m2 12v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6m8 4H4a2 2 0 0 1-2-2V6m6 12a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z"
    />
  </svg>
)
export default SvgSaveAll
