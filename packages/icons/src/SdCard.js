import * as React from 'react'
const SvgSdCard = (props) => (
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
      d="M13 6v2m3-2v2m-6-1v1M7 21h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-6.172a2 2 0 0 0-1.414.586L5.586 7.414A2 2 0 0 0 5 8.828V19a2 2 0 0 0 2 2"
    />
  </svg>
)
export default SvgSdCard
