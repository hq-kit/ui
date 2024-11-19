import * as React from 'react'
const SvgLocateOff = (props) => (
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
      d="M2 12h3m0 0c0-1.9.83-3.61 2.11-4.89M5 12c0 3.87 3.13 7 7 7m7-7h3m-3 0c0 .67-.1 1.33-.29 1.96M19 12c0-3.87-3.13-7-7-7m0-3v3m0 0c-.67 0-1.33.1-1.96.29M12 19v3m0-3c1.9 0 3.61-.83 4.89-2.11M2 2l20 20"
    />
  </svg>
)
export default SvgLocateOff
