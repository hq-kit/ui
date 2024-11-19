import * as React from 'react'
const SvgImages = (props) => (
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
      d="M18 22H4a2 2 0 0 1-2-2V6m20 7-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18m3-10a2 2 0 1 1-4 0 2 2 0 0 1 4 0M8 2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2"
    />
  </svg>
)
export default SvgImages
