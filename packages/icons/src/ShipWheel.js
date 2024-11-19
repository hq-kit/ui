import * as React from 'react'
const SvgShipWheel = (props) => (
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
      d="M12 2v7.5m0 0A2.5 2.5 0 0 0 9.5 12M12 9.5a2.5 2.5 0 0 1 2.5 2.5M19 5l-5.23 5.23M22 12h-7.5m0 0a2.5 2.5 0 0 1-2.5 2.5m7 4.5-5.23-5.23M12 14.5V22m0-7.5A2.5 2.5 0 0 1 9.5 12m.73 1.77L5 19m4.5-7H2m8.23-1.77L5 5m15 7a8 8 0 1 1-16 0 8 8 0 0 1 16 0"
    />
  </svg>
)
export default SvgShipWheel
