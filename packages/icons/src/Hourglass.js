import * as React from 'react'
const SvgHourglass = (props) => (
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
      d="M5 22h14M5 2h14m-2 20v-4.172a2 2 0 0 0-.586-1.414L12 12m0 0-4.414 4.414A2 2 0 0 0 7 17.828V22m5-10L7.586 7.586A2 2 0 0 1 7 6.172V2m5 10 4.414-4.414A2 2 0 0 0 17 6.172V2"
    />
  </svg>
)
export default SvgHourglass
