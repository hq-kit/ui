import * as React from 'react'
const SvgCherry = (props) => (
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
      d="M12 17a5 5 0 0 1-10 0c0-2.76 2.5-5 5-3m5 3c0-2.76-2.5-5-5-3m5 3a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3m-5 3c0-2.76 2.5-5 5-3M7 14c3.22-2.91 4.29-8.75 5-12m5 12c-.06-3-3.34-9.62-5-12m0 0c2.86 4.67 5.71 7 10 7 0-2.33-4.29-7-10-7"
    />
  </svg>
)
export default SvgCherry
