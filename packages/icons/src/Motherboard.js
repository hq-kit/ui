import * as React from 'react'
const SvgMotherboard = (props) => (
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
      fill="currentColor"
      d="M16 7a1 1 0 1 0-2 0zm-2 4a1 1 0 1 0 2 0zm5-4a1 1 0 1 0-2 0zm-2 4a1 1 0 1 0 2 0zm2 4a1 1 0 1 0-2 0zm-2 3a1 1 0 1 0 2 0zM7 14a1 1 0 1 0 0 2zm8 2a1 1 0 1 0 0-2zm-8 1a1 1 0 1 0 0 2zm8 2a1 1 0 1 0 0-2zM6 4h13V2H6zm14 1v14h2V5zm-1 15H6v2h13zM5 19V5H3v14zm1 1a1 1 0 0 1-1-1H3a3 3 0 0 0 3 3zm14-1a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3zM19 4a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3zM6 2a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1zm3 6h2V6H9zm2 0v2h2V8zm0 2H9v2h2zm-2 0V8H7v2zm0 0H7a2 2 0 0 0 2 2zm2 0v2a2 2 0 0 0 2-2zm0-2h2a2 2 0 0 0-2-2zM9 6a2 2 0 0 0-2 2h2zM1 6v2h2V6zm0 9v4h2v-4zm0-6v5h2V9zm13-2v4h2V7zm3 0v4h2V7zm0 8v3h2v-3zM7 16h8v-2H7zm0 3h8v-2H7z"
    />
  </svg>
)
export default SvgMotherboard
