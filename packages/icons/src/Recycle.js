import * as React from 'react'
const SvgRecycle = (props) => (
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
      d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.79 1.79 0 0 1-.004-1.784L7.196 9.5m0 0 1.097 4.096M7.196 9.5 3.1 10.598M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.78 1.78 0 0 0 0-1.775l-1.226-2.12M11 19l3-3m-3 3 3 3M9.344 5.811l1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.78 1.78 0 0 1 1.546.888l3.943 6.843m0 0-4.096-1.098m4.096 1.098 1.097-4.096"
    />
  </svg>
)
export default SvgRecycle
