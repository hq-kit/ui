import * as React from 'react'
const SvgFolderSync = (props) => (
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
      d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5M12 10v4m0 0h4m-4 0 1.535-1.605a5 5 0 0 1 8 1.5M22 22v-4m0 0h-4m4 0-1.535 1.605a5 5 0 0 1-8-1.5"
    />
  </svg>
)
export default SvgFolderSync
